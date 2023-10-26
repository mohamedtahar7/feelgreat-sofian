import Image from "next/image";
import communityHero from "../../public/community-hero.PNG";
import communityImg from "../../public/community.PNG";
import Link from "next/link";
const page = () => {
  return (
    <main className="pt-32 px-16">
      <div className="flex justify-center mb-8">
        <Image
          src={communityHero}
          alt="Feel great system community"
          className="w-[70%]"
        />
      </div>
      <div className="flex lg:flex-row flex-col gap-5 my-16">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold text-center text-[#ff961f]">
            OUR PRIVATE SUPPORT COMMUNITY
          </h1>
          <p className="text-md leading-[2rem]">
            When you order the feel great system you will be able to access my
            private support community. This exclusive platform will give you
            access to member only content, live webinars, tips and live support
            from other members of our Feel Great team and community. People who
            engage in the community get better results on the Feel Great System.
          </p>
          <h3 className="text-2xl font-semibold text-center text-[#0056b3]">
            Already ordered The Feel Great System?
          </h3>
          <Link
            href={"https://www.millionfeelgreat.com/"}
            className="py-2 px-6 bg-[#ff961f] text-white transition uppercase rounded-3xl hover:opacity-70"
            target="_blank"
          >
            Request Access
          </Link>
        </div>
        <div>
          <Image
            src={communityImg}
            alt="Feel great system community"
            height={1280}
            width={1280}
          />
        </div>
      </div>
      <p className="text-md text-center mb-10 italic">
        * If you have not ordered the feel great system you will not be accepted
        into the community. However if you request access and have not ordered,
        leave your number and someone will get back to you. *
      </p>
    </main>
  );
};

export default page;
