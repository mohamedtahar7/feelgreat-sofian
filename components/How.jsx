import Image from "next/image";
import howImg from "../public/how.PNG";
const How = () => {
  return (
    <section className="py-8 md:px-16 px-5">
      <div className="flex flex-col items-center gap-4 p-4 bg-[#F1F6FB]">
        <h1 className="text-4xl font-bold text-center text-[#ff961f]">
          How it works
        </h1>
        <p className="text-lg px-16">
          The Feels Great System is simple. Wake up and start the morning with a
          delicious Unimate. Take Balance 5 to 15 minutes before your meals and
          eat your regular food. No dieting, No counting anything.
        </p>
        <Image
          alt="how the feel great system works"
          src={howImg}
          className="w-[80%]"
        />
      </div>
      <div className="mt-8 px-16">
        <p className="text-lg">
          Time-based eating, often referred to as intermittent fasting, has been
          associated with numerous health benefits:
        </p>
        <ul className="list-disc mt-4 ml-10 flex flex-col gap-2">
          <li className="text-lg ">Healthy Glucose & Cholesterol Levels</li>
          <li className="text-lg ">Improved body composition</li>
        </ul>
        <p className="text-lg my-4">
          Unimate and Balance work together to help you extend the time between
          dinner and your first meal of the following day.
        </p>
        <div className="mb-4">
          <h3 className="font-bold text-md mb-4">Unimate</h3>
          <p className="text-lg">
            Unimate is a concentrated Yerba Mate Extract. With the whole system
            it makes it simple to use, you feel great. It doesn't break your
            fast, it's just a tea extract and people report they feel much
            better on Unimate than other energy drinks and coffee.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-md mb-4">Balance</h3>
          <p className="text-lg">
            Balance is the smart solution to balanced nutrition. This patented
            blend of fibers, nutrients, and plant compounds are specifically
            designed to:
          </p>
          <ul className="list-disc mt-4 ml-10 flex flex-col gap-3">
            <li className="text-lg ">
              Provides support for healthy glucose metabolism
            </li>
            <li className="text-lg ">
              Helps to maintain normal blood glucose levels
            </li>
            <li className="text-lg ">
              Helps to maintain healthy skin, bones, hair, and nails
            </li>
            <li className="text-lg ">Helps lowers blood total cholesterol</li>
            <li className="text-lg ">
              Helps maintain the body’s ability to metabolize nutrients
            </li>
            <li className="text-lg ">
              Helps to maintain normal muscle function
            </li>
            <li className="text-lg ">Source of an Electrolyte</li>
            <li className="text-lg ">
              Source of an antioxidants for the maintenance of good health
            </li>
            <li className="text-lg ">
              Helps to maintain normal metabolism of iron
            </li>
            <li className="text-lg ">Helps in energy production</li>
            <li className="text-lg ">
              Helps to prevent vitamin B12 deficiency
            </li>
            <li className="text-lg">Helps in wound healing</li>
          </ul>
        </div>
        <p className="text-lg mt-4">
          Approved by health Canada Natural Product Number (NPN) 80061515
        </p>
      </div>
    </section>
  );
};

export default How;
