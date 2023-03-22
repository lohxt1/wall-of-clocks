import { cn } from "@/utils/tailwind";

const Hand = (props) => {
  const { degrees, type } = props;

  const shapeToken = {
    second: "top-[3px] left-[24px] h-[22px] w-[2px]",
    minute: "top-[7px] left-[23.5px] h-[18px] w-[3px]",
    hour: "top-[11px] left-[23.5px] h-[14px] w-[3px]",
  };

  return (
    <div className={cn("absolute h-[50px] w-[50px]")}>
      <div
        className="relative h-[50px] w-[50px] rounded-full"
        style={{
          transform: `rotateZ(${degrees}deg)`,
        }}
      >
        <div className={cn("absolute rounded-full bg-black dark:bg-white", shapeToken[type])}></div>
      </div>
    </div>
  );
};

export default Hand;
