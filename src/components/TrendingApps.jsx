import { Link } from "react-router";
import AppCard from "./AppCard";

const TrendingApps = ({ appsData }) => {
  const apps = appsData.slice(0, 8);
  return (
    <div className="mt-8 mx-6 md:mx-12 text-[#001931]">
      <h1 className="flex justify-center text-[34px] md:text-[40px] font-bold ">
        Trending Apps
      </h1>
      <p className="font-light mb-8 text-[14px] md:text-[18px] text-center flex justify-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {Array.isArray(apps) ? (
          apps.map((app) => <AppCard key={app.id} app={app} />)
        ) : (
          <p>No apps found</p>
        )}
      </div>
      <Link to={"apps"} className="flex justify-center items-center">
        <button className="my-8 font-semibold px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md hover:opacity-90 transition-all">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default TrendingApps;
