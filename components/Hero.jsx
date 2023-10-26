import { AiOutlineArrowDown } from "react-icons/ai";
import { countries } from "@/utils/countries";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="md:px-16 px-8 pt-32 pb-24">
      <h1 className="text-center leading-[4rem] font-bold text-5xl text-[#FF961F]">
        Start the Feel Great System Here
        <br />
        By Selecting Your Country Below
      </h1>
      <div className="flex justify-center mt-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/an9oO6sd-_U?si=oDdvbOuvoLv3JdvE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex items-center gap-2 justify-center mt-8">
        <AiOutlineArrowDown size={25} className="text-[#0056b3]" />
        <p className="py-1 px-5 uppercase bg-[#ff961f] w-fit text-sm text-white rounded-xl">
          Start Now
        </p>
        <AiOutlineArrowDown size={25} className="text-[#0056b3]" />
      </div>
      <div className="flex justify-center mt-8">
        <select
          className="py-1 border border-[#454545] px-6 text-md rounded-2xl"
          id="countries"
        >
          {/* <option value={category}>{category}</option> */}
          {countries.map((country, index) => (
            <option
              value={country}
              key={index}
              className={`text-md hover:bg-[#407c87] transition-all cursor-pointer px-4 border-2 border-[#407c87]`}
            >
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href={"https://ufeelgreat.com/usa/en/c/JXP478"}
          target="_blank"
          className="px-5 py-2 hover:opacity-70 transition bg-[#0056b3] text-white rounded-xl"
        >
          Get Link
        </Link>
      </div>
      <p className="text-center text-lg mt-6">
        The Feel Great System is backed with a 90 day money back guarantee.
      </p>
    </section>
  );
};

export default Hero;
