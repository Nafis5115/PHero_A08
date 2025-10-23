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
        loader: async () => {
          const response = await fetch("/data.json");
          if (!response.ok) throw new Error("Failed to load apps data");
          const data = await response.json();
          return data;
        },
        HydrateFallback: () => {},
      },
      {
        path: "apps",
        Component: Apps,
        loader: async () => {
          const response = await fetch("/data.json");
          if (!response.ok) throw new Error("Failed to load apps data");
          const data = await response.json();
          return data;
        },
        HydrateFallback: () => {},
      },
      {
        path: "installation",
        Component: Installation,
        loader: async () => {
          const response = await fetch("/data.json");
          if (!response.ok) throw new Error("Failed to load apps data");
          const data = await response.json();
          return data;
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
