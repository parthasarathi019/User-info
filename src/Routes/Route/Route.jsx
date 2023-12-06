import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../Layout/MainPage";
import DashboardLayout from "../../Layout/DashboardLayout";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Work_Permit from "../../Pages/Work_Permit/Work_Permit";
import Visa from "../../Pages/Visa/Visa";
import Application_Stts from "../../Pages/Application_Stts/Application_Stts";
import Lima from "../../Pages/Lima/Lima";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/Work_Permit",
        element: <Work_Permit></Work_Permit>
      },
      {
        path: "/Visa",
        element: <Visa></Visa>
      },
      {
        path: "/Application_Stts",
        element: <Application_Stts></Application_Stts>
      },
      {
        path: "/Lima",
        element: <Lima></Lima>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />
  }
])
