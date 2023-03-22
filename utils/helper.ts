const withLeadingZero = (val) => ("0" + parseInt(val)).slice(-2);

const getDST = (val) => {
  let sign = val < 0 ? "-" : "";
  const dst = sign + `${withLeadingZero(parseInt(Math.abs(val)))}:${withLeadingZero(parseInt((Math.abs(val) % 1) * 60))}`;
  return dst;
};

const getHDetails = (_hNow, _hTzOffset) => {
  let ampm = "PM";
  let hNow = _hNow + _hTzOffset;
  if (hNow < 0) {
    hNow += 12;
    ampm = "AM";
  }
  while (hNow > 12) {
    ampm = ampm == "AM" ? "PM" : "AM";
    hNow = hNow - 12;
  }
  return {
    hNow,
    ampm,
  };
};

const getMDetails = (_mNow, _mTzOffset) => {
  let mNow = _mNow + _mTzOffset;
  let hBorrow = 0;
  while (mNow > 59) {
    mNow = mNow - 60;
    hBorrow += 1;
  }
  return {
    mNow,
    hBorrow,
  };
};

export { withLeadingZero, getDST, getHDetails, getMDetails };
