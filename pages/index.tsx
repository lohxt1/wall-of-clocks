import { NextPage } from "next";
import Clocks from "@/containers/ui/clocks";
import { cn } from "@/utils/tailwind";

const Home: NextPage = () => {
  return (
    <div className={cn("flex h-[100%] w-screen items-center justify-center align-middle")}>
      <Clocks />
    </div>
  );
};

export default Home;
