import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home";
import Apps from "../components/Apps";
import Installation from "../components/Installation";
import AppDetails from "../components/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => {
          const appsPromise = fetch("public/data.json");
          return appsPromise;
        },
        HydrateFallback: () => {},
      },
      {
        path: "apps",
        Component: Apps,
        loader: () => {
          const allAppsPromise = fetch("public/data.json");
          return allAppsPromise;
        },
        HydrateFallback: () => {},
      },
      {
        path: "installation",
        Component: Installation,
        loader: () => {
          const installedAppsPromise = fetch("public/data.json");
          return installedAppsPromise;
        },
        HydrateFallback: () => {},
      },
      {
        path: "appDetails",
        Component: AppDetails,
      },
    ],
  },
]);

export default router;
