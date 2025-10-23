import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import formatDownloads from "../utils/formateDownload";

const AppCard = ({ app }) => {
  return (
    <Link
      to={`/appDetails`}
      state={{ app }}
      className="bg-white cursor-pointer p-4 flex flex-col gap-2 rounded-md"
    >
      <img src={app.image} alt="" className="md:w-[280px] rounded-md" />
      <h1 className="font-semibold">{app.title}</h1>
      <div className="flex justify-between">
        <div className="flex gap-2 py-1 px-2 rounded-sm items-center bg-[#00D390]/12  justify-center">
          <Download className="text-[#00D390] h-5"></Download>
          <h1 className="text-[#00D390]">{formatDownloads(app.downloads)}</h1>
        </div>
        <div className="flex gap-2 py-1 rounded-sm items-center bg-[#FF8811]/12 w-18 justify-center">
          <Star className="text-[#FF8811] h-5"></Star>
          <h1 className="text-[#FF8811]">{app.ratingAvg}</h1>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
