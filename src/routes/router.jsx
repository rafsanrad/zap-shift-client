import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import ErrorPage from "../pages/Error/ErrorPage";
import AboutUs from "../pages/About/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";

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
        path:'rider',
        element:<PrivateRoute>
          <Rider></Rider>
        </PrivateRoute>
      },
      {
        path:'send-parcel',
        element:<PrivateRoute>
          <SendParcel></SendParcel>
        </PrivateRoute>,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json())
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
    ],
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register
      }
    ]
  },
  {
    path: "*",
    Component: ErrorPage,
  },
  {
    path:'dashboard',
    element:<PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children:[
      {
        path:'my-parcels',
        Component:MyParcels
      }
    ]
  }
]);
