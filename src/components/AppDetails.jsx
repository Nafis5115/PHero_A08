import { Download, Star, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Rating from "./Ratings";
import formatDownloads from "../utils/formateDownload";
import { toast } from "react-toastify";
const AppDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { app } = location.state || {};

  const existingIds = JSON.parse(localStorage.getItem("ids")) || [];
  const [isInstalled, setIsInstalled] = useState(existingIds.includes(app.id));

  const handleInstall = () => {
    if (!existingIds.includes(app.id)) {
      existingIds.push(app.id);
      localStorage.setItem("ids", JSON.stringify(existingIds));
      setIsInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  return (
    <div className="mx-6 md:mx-12 text-[#001931] mt-12">
      <div className="flex flex-col items-start md:flex-row gap-6 md:items-center">
        <img className="shadow" src={app.image} alt="" />
        <div className="flex-1 mt-4 md:mt-0">
          <h1 className="font-bold text-2xl">{app.title}</h1>
          <p>
            <span className="font-thin">Developed by</span>{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {app.companyName}
            </span>
          </p>
          <div className="h-[1px]  w-109 md:w-full bg-black/20 my-4"></div>
          <div className="flex gap-14">
            <div>
              <Download size={30} className="text-[#00D390]" />
              <p className="text-[12px]">Downloads</p>
              <h1 className="text-2xl font-bold">
                {formatDownloads(app.downloads)}
              </h1>
            </div>
            <div>
              <Star size={30} fill="#FF8811" className="text-[#FF8811]" />
              <p className="text-[12px]">Average Ratings</p>
              <h1 className="text-2xl font-bold">{app.ratingAvg}</h1>
            </div>
            <div>
              <ThumbsUp size={30} className="text-[#632EE3]" />
              <p className="text-[12px]">Total Reviews</p>
              <h1 className="text-2xl font-bold">
                {formatDownloads(app.reviews)}
              </h1>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`btn text-white mt-3 ${
              isInstalled ? "bg-gray-400 cursor-not-allowed" : "btn-success"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="h-[1px] w-full bg-black/20 my-8"></div>
      <h1 className="font-semibold">Ratings</h1>
      <Rating ratings={app.ratings} />
      <div className="h-[1px] w-full bg-black/20 mb-8 mt-4"></div>
      <h1 className="font-semibold">Description</h1>
      <p className="font-thin my-4 text-[14px]">{app.description}</p>
    </div>
  );
};

export default AppDetails;
