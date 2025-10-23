import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col  items-center mt-8 text-[#001931]">
      <h1 className="text-[44px] md:text-[50px] font-bold leading-14 text-center">
        We Build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-center mx-4 font-light mt-3">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex my-6 gap-4">
        <a
          href="https://play.google.com/store/games?hl=en"
          className="flex items-center border border-[#D2D2D2] gap-2 px-4 py-2 rounded-sm cursor-pointer"
        >
          <img src="src/assets/playstore.png" alt="" />
          <span className="font-semibold">Google Play</span>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          className="flex items-center border border-[#D2D2D2] gap-2 px-4 py-2 rounded-sm cursor-pointer"
        >
          <img src="src/assets/appstore.png" alt="" />
          <span className="font-semibold">App Store</span>
        </a>
      </div>
      <img className="w-110 md:w-fit" src="src/assets/hero.png" alt="" />
    </div>
  );
};

export default Hero;
