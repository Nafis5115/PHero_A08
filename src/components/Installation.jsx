import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { ChevronDown, Download, Star } from "lucide-react";
import { useLoaderData } from "react-router";
import InstalledAppCard from "./InstalledAppCard";

const Installation = ({ installedAppsPromise }) => {
  const allApps = useLoaderData(installedAppsPromise);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Sort By Size");
  const [installedApps, setInstalledApps] = useState([]);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);

    setInstalledApps((prevApps) => {
      const sortedApps = [...prevApps];
      if (option === "Ascending") {
        sortedApps.sort((a, b) => a.size - b.size);
      } else if (option === "Descending") {
        sortedApps.sort((a, b) => b.size - a.size);
      }
      return sortedApps;
    });
  };

  useEffect(() => {
    const storedAppsId = JSON.parse(localStorage.getItem("ids")) || [];
    const apps = allApps.filter((app) => storedAppsId.includes(app.id));
    setInstalledApps(apps);
  }, [allApps]);

  const handleUninstall = (id) => {
    const existingIds = JSON.parse(localStorage.getItem("ids")) || [];
    const updatedIds = existingIds.filter((storedId) => storedId !== id);
    localStorage.setItem("ids", JSON.stringify(updatedIds));
    setInstalledApps((prevApps) => prevApps.filter((app) => app.id !== id));
  };

  return (
    <div className="mx-4 md:mx-12 mt-8 text-[#001931]">
      <h1 className="text-[40px] font-bold flex flex-col items-center">
        Your Installed Apps
      </h1>
      <p className="font-light mb-8 flex flex-col items-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between">
        <h1 className="font-semibold">({installedApps.length}) Apps Found</h1>
        <div className="relative inline-block text-left">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            {selected}
            <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
          </button>

          {open && (
            <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-150 ease-out">
              <div className="py-1">
                {["Descending", "Ascending"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSelect(size)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {installedApps.length !== 0 ? (
        <div className="my-10 flex flex-col gap-4">
          {installedApps.map((app) => (
            <InstalledAppCard
              key={app.id}
              app={app}
              handleUninstall={handleUninstall}
            ></InstalledAppCard>
          ))}
        </div>
      ) : (
        <h1 className="flex justify-center items-center mt-12 font-bold">
          No Apps Found!
        </h1>
      )}
    </div>
  );
};

export default Installation;
