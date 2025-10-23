import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#001931]  w-full px-6 md:px-12 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 cursor-pointer">
          <img className="h-10" src="src/assets/logo.png" alt="Logo" />
          <h1 className="font-semibold text-white">HERO.IO</h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-white">Social Links</h1>
          <div className="flex gap-3 mt-2">
            <img
              className="cursor-pointer"
              src="src/assets/twitter.png"
              alt=""
            />
            <img
              className="cursor-pointer"
              src="src/assets/linkedin.png"
              alt=""
            />
            <img
              className="cursor-pointer"
              src="src/assets/facebook.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#E5E7EB]/30 my-4"></div>
      <p className="text-[#FAFAFA] flex justify-center">
        Copyright © 2025 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
