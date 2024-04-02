import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import Propertiesgridview from "pages/Propertiesgridview";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "landingpage",
      element: <LandingPage />,
    },
    {
      path: "propertiesgridview",
      element: <Propertiesgridview />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
