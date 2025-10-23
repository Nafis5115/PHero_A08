import { Download, Star } from "lucide-react";
import React from "react";
import formatDownloads from "../utils/formateDownload";
import { toast } from "react-toastify";

const InstalledAppCard = ({ app, handleUninstall }) => {
  const uninstallApp = () => {
    handleUninstall(app.id);
    toast.error(`${app.title} has been uninstalled.`);
  };
  return (
    <div className="bg-white flex justify-between items-center shadow rounded-md p-4">
      <div className="flex items-center gap-2">
        <img className="h-20 rounded-md" src={app.image} alt="" />
        <div>
          <h1 className="font-semibold ml-1 mb-1">{app.title}</h1>

          <div className="flex items-center gap-3">
            <div className="flex  items-center">
              <Download className="text-[#00D390] h-4"></Download>
              <h1 className="text-[#00D390]">
                {formatDownloads(app.downloads)}
              </h1>
            </div>
            <div className="flex  items-center">
              <Star className="text-[#FF8811] h-4"></Star>
              <h1 className="text-[#FF8811]">{app.ratingAvg}</h1>
            </div>
            <p className="text-[#627382] text-[14px]">{app.size} MB</p>
          </div>
        </div>
      </div>
      <button onClick={uninstallApp} className="btn btn-success text-white">
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
