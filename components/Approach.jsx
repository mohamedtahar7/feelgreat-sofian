import Image from "next/image";
import approachImg from "../public/approach.PNG";
const Approach = () => {
  return (
    <section className="md:px-16 px-5 flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl font-bold text-center text-[#ff961f]">
        Our Simple Approach
      </h1>
      <p className="text-lg px-16">
        Feel Great is designed to bridge the gap between where you are and where
        you want to be. The Feel Great approach is simple. eat the food that you
        love.
      </p>
      <Image src={approachImg} alt="The Feel Great Approach System" />
    </section>
  );
};

export default Approach;
