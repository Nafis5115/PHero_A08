import React from "react";

const Trusted = () => {
  return (
    <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-12">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-white text-[26px] md:text-[32px] mb-8">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex gap-14 mx-4 ">
          <div className="flex flex-col items-center">
            <p className="text-[12px] md:text-[14px] text-white/65 font-light">
              Total Downloads
            </p>
            <h1 className="text-[36px] md:text-[42px] font-bold text-white ">
              29.6M
            </h1>
            <p className="text-[12px] md:text-[14px] text-center text-white/65 font-light">
              21% more than last month
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[12px] md:text-[14px] text-white/65 font-light">
              Total Reviews
            </p>
            <h1 className="text-[36px] md:text-[42px] font-bold text-white ">
              906K
            </h1>
            <p className="text-[12px] md:text-[14px] text-center text-white/65 font-light">
              46% more than last month
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[12px] md:text-[14px] text-white/65 font-light">
              Active Apps
            </p>
            <h1 className="text-[36px] md:text-[42px] font-bold text-white ">
              132+
            </h1>
            <p className="text-[12px] md:text-[14px] text-center text-white/65 font-light">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
