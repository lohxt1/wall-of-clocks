import { useEffect, useState } from "react";
import Clock from "@/components/ui/clock";
import timezones from "@/lib/timezones";

const clocks = timezones;

const Clocks = () => {
  // local timezone offset
  const localTzOffset = new Date().getTimezoneOffset() / 60;
  // local timezone offset - HOUR
  const localHTzOffset = parseInt(localTzOffset) / -1;
  // local timezone offset - MINUTE
  const localMTzOffset = ((localTzOffset % 1) * 60) / -1;

  const [hNow, setHNow] = useState(new Date().getUTCHours());
  const [mNow, setMNow] = useState(new Date().getUTCMinutes());
  const [sNow, setSNow] = useState(new Date().getUTCSeconds());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHNow(new Date().getUTCHours());
      setMNow(new Date().getUTCMinutes());
      setSNow(new Date().getUTCSeconds());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative flex w-[700px] flex-wrap">
      {clocks.map((_, idx) => (
        <Clock idx={idx} sNow={sNow} mNow={mNow} hNow={hNow} localHTzOffset={localHTzOffset} localMTzOffset={localMTzOffset} {..._} />
      ))}
    </div>
  );
};

export default Clocks;
