import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsRobot } from "react-icons/bs";
import vectorpic1 from "@/public/img/headervector1.png";
import vectorpic2 from "@/public/img/headervector2.png";
import Image from "next/image";
import logo from "@/public/img/logo2.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex overflow-hidden relative flex-wrap items-center rounded-b-[36px] w-full h-auto px-[28px] py-[8px] text-2xl font-semibold top-0 z-50 justify-between ${
        isSticky
          ? "sticky bg-[#fff] text-[#000] shadow-md shadow-gray-300"
          : "bg-[#222648] text-[#fff]"
      }`}
    >
      <Link href="/" className="logo-box flex flex-wrap items-center relative z-40 gap-1" title='Home'>
                <b className='p-2 rounded-full' title='Universal Developers'><BsRobot /></b>
                <h1>UDT</h1>
            </Link>
      {/* <Link
        href="/"
        className="logo-box flex flex-wrap items-center relative z-40 gap-1"
        title="Home"
      >
        <Image src={logo} alt="logo-int-acad" className="w-[45px] h-[60px]" />
      </Link> */}

      <Image src={vectorpic1} alt="" className="h-[78px] absolute z-30" />
      <Image
        src={vectorpic2}
        alt=""
        className="h-[78px] absolute right-[246px]"
      />

      <ul className="tabs-List text-lg flex flex-wrap gap-8">
        <Link href="/">
          <li className="py-2">Home</li>
        </Link>
        <Link href="/services">
          <li className="py-2">Services</li>
        </Link>
        <Link href="/help">
          <li className="py-2">Help</li>
        </Link>
        <Link href="/help">
          <li className="py-2">About</li>
        </Link>
      </ul>

      <Link
        href={"/register"}
        className="btn-custom"
      >
        Register Now
      </Link>
    </nav>
  );
};

export default Navbar;
