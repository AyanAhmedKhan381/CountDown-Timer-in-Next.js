import React from "react";
import logo from "../../../public/Assets/linkedin-svg-com.svg"
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="mx-auto w-full ">
      <div className=" w-full flex mt-10 md:mt-40 space-x-6 justify-center items-center ">
        <a href="https://www.linkedin.com/in/ayan-ahmed-khan-3143ba274/" target="_blank">
        <Image src={logo} alt={"image"} width={30} height={30}/>
        </a>
      </div>
    </div>
  );
};