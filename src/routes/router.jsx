import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import ErrorPage from "../pages/Error/ErrorPage";
import AboutUs from "../pages/About/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
