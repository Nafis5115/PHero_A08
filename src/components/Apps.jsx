import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";
import Spinner from "./Spinner2";

const Apps = ({ allAppsPromise }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allApps = useLoaderData(allAppsPromise);

  const [searchInput, setSearchInput] = useState("");
  const [filteredApps, setFilteredApps] = useState(allApps);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchInput) {
      setFilteredApps(allApps);
      setLoading(false);
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      const filtered = allApps.filter((app) =>
        app.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, allApps]);

  return (
    <div className="mx-6 md:mx-12 mt-8 text-[#001931]">
      <h1 className="text-[34px] md:text-[40px]  font-bold flex flex-col items-center">
        Our All Applications
      </h1>
      <p className="font-light text-[14px] md:text-[18px] text-center mb-8 flex flex-col items-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between">
        <h1 className="font-semibold text-[14px] md:text-[18px]">
          ({allApps.length}) Apps Found
        </h1>
        <label className="input w-60 md:w-100 bg-transparent border border-black/20">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>

      {loading ? (
        <Spinner />
      ) : filteredApps.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <h1 className="font-semibold flex justify-center items-center mt-12">
          No Apps Found!
        </h1>
      )}
    </div>
  );
};

export default Apps;
