import React, { Suspense } from "react";
import Hero from "./Hero";
import Trusted from "./Trusted";
import TrendingApps from "./TrendingApps";
import { useLoaderData } from "react-router";

const Home = ({ appsPromise }) => {
  const appsData = useLoaderData(appsPromise);

  return (
    <div>
      <Hero></Hero>
      <Trusted></Trusted>

      <TrendingApps appsData={appsData}></TrendingApps>
    </div>
  );
};

export default Home;
