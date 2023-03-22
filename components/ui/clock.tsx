import { motion } from "framer-motion";
import { getDST, getHDetails, getMDetails, withLeadingZero } from "@/utils/helper";
import { cn } from "@/utils/tailwind";
import { baseVariant, clockStructureVariant, clockTextVariant, clockVariant, clockVariantActive } from "./clockVariants";
import Hand from "./hand";

const Clock = (props) => {
  const { idx, sNow, mNow: _mNow, hNow: _hNow, offset: tzOffset, text, localHTzOffset, localMTzOffset, value } = props;

  const hTzOffset = parseInt(tzOffset);
  const mTzOffset = (tzOffset % 1) * 60;
  const isCurrentTimezone = localHTzOffset == hTzOffset && localMTzOffset == mTzOffset;

  const { hNow: __hNow, ampm } = getHDetails(_hNow, hTzOffset);
  const { mNow, hBorrow } = getMDetails(_mNow, mTzOffset);
  const dst = getDST(tzOffset);

  const hNow = __hNow + hBorrow;

  const sDegrees = (sNow * 360) / 60;
  const mDegrees = (mNow * 360) / 60 + sDegrees / 60;
  const hDegrees = (hNow * 360) / 12 + mDegrees / 60;

  const timeString = `${withLeadingZero(hNow)}:${withLeadingZero(mNow)}:${withLeadingZero(sNow)} ${ampm}`;

  return (
    <motion.div initial="initial" animate="visible" exit="exit" whileHover="hover" variants={baseVariant}>
      <motion.div
        className={cn("absolute top-[-50px] left-0 flex w-full flex-col justify-between", "text-gray-600 dark:text-gray-400")}
        variants={clockTextVariant}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start text-2xl font-black text-black dark:text-white">{value}</div>
          <pre>{timeString}</pre>
        </div>
      </motion.div>
      <motion.div
        className={cn("absolute bottom-[-50px] left-0 flex w-full flex-col justify-between", "text-gray-600 dark:text-gray-400")}
        variants={clockTextVariant}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <pre>{timeString}</pre>
          <div className="flex flex-row items-center justify-start underline decoration-dashed">
            <div className="max-w-[500px] text-sm">{text}</div>
            <div className="text-sm text-gray-400 dark:text-gray-600">&nbsp;(DST {dst.toString()})</div>
          </div>
        </div>
      </motion.div>
      <motion.div className={cn("relative h-[50px] w-[50px] cursor-pointer rounded-full")} variants={clockStructureVariant(idx)}>
        <motion.div
          className={cn("relative h-[50px] w-[50px] cursor-pointer rounded-full")}
          key={`clock-${idx}`}
          variants={isCurrentTimezone ? clockVariantActive : clockVariant}
        >
          {/* HOUR HAND */}
          <Hand degrees={hDegrees} type={"hour"} />
          {/* MINUTE HAND */}
          <Hand degrees={mDegrees} type={"minute"} />
          {/* SECOND HAND */}
          <Hand degrees={sDegrees} type={"second"} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Clock;
