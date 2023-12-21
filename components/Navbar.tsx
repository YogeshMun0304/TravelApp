"use client"
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
   const [toggle,setToggle] = useState(false)
  return (
    <nav className="  flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden "
        onClick={()=>{
            setToggle(!toggle)
        }}
       
      />
      {toggle && <div className="lg:hidden">
        <ul className="flex flex-col gap-12 absolute top-10 left-50px right-[10px] bg-white py-5 px-10 rounded-lg shadow-lg">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
        </ul>

      </div>}
    </nav>
    



  );
};

export default Navbar;
