import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { countries } from "@/utils/countries";
import Link from "next/link";
import unimate from "../../public/start-unimate.PNG";
import balance from "../../public/start-balance.PNG";
import start1 from "../../public/start-1.PNG";
import start2 from "../../public/start-2.PNG";
import start3 from "../../public/start-3.PNG";
import Image from "next/image";
const page = () => {
  return (
    <main className="pt-32 px-16">
      <h1 className="text-4xl font-bold mb-5 text-center text-[#ff961f]">
        YOU WILL FEEL GREAT, GUARANTEED
      </h1>
      <p className="text-center text-lg">
        The Feel Great System is backed with a 60 day product guarantee and a 90
        day blood work guarantee based on your A1C, cholesterol and
        triglycerides.
      </p>
      <div className="mt-6">
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
            className="px-5 py-2 bg-[#0056b3] hover:opacity-70 transition text-white rounded-xl"
          >
            Get Link
          </Link>
        </div>
      </div>
      {/* section 2 */}
      <section className="py-10">
        <h1 className="text-3xl mb-5 font-bold text-center text-[#ff961f]">
          Feel Great System Products
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <Image src={unimate} alt="feel great unimate" />
            <h1 className="text-3xl my-5 font-bold text-[#ff961f]">Unimate</h1>
            <p className="text-md">
              Get up and go with Unimate. This highly concentrated yerba mate
              drink contains a unique blend of plant compounds known to:
            </p>
            <ul className="list-disc mt-4 ml-10 flex flex-col gap-2">
              <li className="text-md ">Improve mood</li>
              <li className="text-md ">Boost energy</li>
              <li className="text-md ">Heighten mental clarity</li>
              <li className="text-md ">Suppress appetite</li>
            </ul>
          </div>
          <div>
            <Image src={balance} alt="feel great balance" />
            <h1 className="text-3xl my-5 font-bold text-[#ff961f]">Balance</h1>
            <p className="text-md">
              Balance is the smart solution to balanced nutrition. This patented
              blend of fibers, nutrients, and plant compounds are specifically
              designed to:
            </p>
            <ul className="list-disc mt-4 ml-10 flex flex-col gap-2">
              <li className="text-md ">
                Slow carbohydrate absorption so you stay full longer
              </li>
              <li className="text-md ">
                Promote proper digestion and cholesterol absorption
              </li>
              <li className="text-md ">
                Provide 9 essential vitamins and minerals
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16">
        <h1 className="text-3xl my-5 font-bold text-center text-[#ff961f]">
          WHAT TO EXPECT
        </h1>
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="flex flex-col gap-4 items-center">
            <Image src={start1} alt="number 1" />
            <p className="text-lg text-center">
              After checkout, you will receive an email receipt of your initial
              order. Locate your Member ID# save it and keep record of your
              email username & password for future orders
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image src={start2} alt="number 1" />
            <p className="text-lg text-center">
              Within 24-48hrs you will receive an email from me with
              instructions to join my exclusive Private Support Community and
              Member resources page. Here you will get answers to frequently
              asked questions, Instructions videos and helpful tips on how to
              maximize your results.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image src={start3} alt="number 1" />
            <p className="text-lg text-center">
              Access to exclusive Feel Great Live Q&A support and education
              calls and the option to connect with one of our feel great
              partners for a more personalized experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
