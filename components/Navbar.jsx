"use client";
import Image from "next/image";
import logo from "../public/feelgreat.png";
import { useState, useEffect } from "react";
import { BiLogoTiktok, BiLogoYoutube, BiLogoInstagram } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActiveNav(true) : setActiveNav(false);
    });
  }, []);
  return (
    <nav
      className={`fixed ${
        activeNav ? "shadow-lg" : ""
      } z-20 w-full transition bg-[#EDEDED] px-16 py-2 flex items-center justify-between`}
    >
      <Link href={"/"}>
        <Image
          height={192}
          width={192}
          className=""
          src={logo}
          alt="The Feel Great System Logo"
        />
      </Link>
      <ul className="lg:flex hidden items-center gap-4">
        <li>
          <Link
            href="/start"
            className="text-[#454545] hover:opacity-75 transition font-medium uppercase"
          >
            Start Now
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className="text-[#454545] hover:opacity-75 transition font-medium uppercase"
          >
            The Community
          </Link>
        </li>
      </ul>
      <div className="lg:flex hidden items-center gap-4">
        <Link
          href="https://www.tiktok.com/@ravmalik"
          className="hover:opacity-60 transition"
          target="_blank"
        >
          <BiLogoTiktok className="text-[#0056B3]" size={30} />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCMo2qKOVp7Urz1o6XdrTA4A"
          className="hover:opacity-60 transition"
          target="_blank"
        >
          <BiLogoYoutube className="text-[#0056B3]" size={30} />
        </Link>
        <Link
          href="https://www.instagram.com/rav.malik/"
          className="hover:opacity-60 transition"
          target="_blank"
        >
          <BiLogoInstagram className="text-[#0056B3]" size={30} />
        </Link>
      </div>
      <div onClick={() => setOpenNav(true)} className="lg:hidden block">
        <FiMenu size={25} className="text-[#0056b3]" />
      </div>
      {/* Mobile Nav */}
      <div
        className={`absolute top-0 left-[50%] ${
          openNav ? "grid opacity-100" : "hidden opacity-0"
        } place-items-center z-10 transition duration-500 -translate-x-[50%] bg-white h-screen w-full bg`}
      >
        <div
          onClick={() => setOpenNav(false)}
          className="absolute cursor-pointer hover:opacity-70 transition top-10 right-10"
        >
          <GrClose size={25} className="text-[#0056b3]" />
        </div>
        <ul className="flex flex-col items-center justify-center gap-4">
          <li onClick={() => setOpenNav(false)}>
            <Link
              href="/start"
              className="text-[#454545] hover:opacity-75 transition font-medium uppercase"
            >
              Start Now
            </Link>
          </li>
          <li onClick={() => setOpenNav(false)}>
            <Link
              href="/community"
              className="text-[#454545] hover:opacity-75 transition font-medium uppercase"
            >
              The Community
            </Link>
          </li>
        </ul>
        <div className="flex absolute bottom-10 justify-center items-center gap-4">
          <Link
            href="https://www.tiktok.com/@ravmalik"
            className="hover:opacity-60 transition"
            target="_blank"
          >
            <BiLogoTiktok className="text-[#0056B3]" size={30} />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCMo2qKOVp7Urz1o6XdrTA4A"
            className="hover:opacity-60 transition"
            target="_blank"
          >
            <BiLogoYoutube className="text-[#0056B3]" size={30} />
          </Link>
          <Link
            href="https://www.instagram.com/rav.malik/"
            className="hover:opacity-60 transition"
            target="_blank"
          >
            <BiLogoInstagram className="text-[#0056B3]" size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
