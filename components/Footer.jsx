import { BiLogoTiktok, BiLogoYoutube, BiLogoInstagram } from "react-icons/bi";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="flex md:flex-row flex-col gap-10 items-center justify-between py-16 px-16 bg-gradient-to-r from-[#1F6A8C] to-[#F28F20]">
      <div className="flex items-center gap-4">
        <Link
          href="https://www.tiktok.com/@ravmalik"
          className="hover:opacity-60 transition"
          target="_blank"
        >
          <BiLogoTiktok className="text-[#fff]" size={30} />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCMo2qKOVp7Urz1o6XdrTA4A"
          className="hover:opacity-60 transition"
          target="_blank"
        >
          <BiLogoYoutube className="text-[#fff]" size={30} />
        </Link>
        <Link
          href="https://www.instagram.com/rav.malik/"
          className="hover:opacity-60 transition"
          target="_blank"
        >
          <BiLogoInstagram className="text-[#fff]" size={30} />
        </Link>
      </div>
      <div>
        <Link
          className="hover:opacity-70 text-lg text-white font-medium underline transition"
          href={
            "https://www.oxsomeweb.com/privacy/20210802164317/thefeelgreatsystemcom.html"
          }
        >
          Privacy Policy
        </Link>
      </div>
    </section>
  );
};

export default Footer;
