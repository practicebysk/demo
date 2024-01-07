// Routes1.js
import React from "react";
import { useRoutes } from "react-router-dom";
import Achild from "./Achild";
import A from "./A";

function Routes1() {
  let routes = useRoutes([
    {
      path: "/a",
      element: <A />, // Root route rendering component A
      children: [
        {
          path: "achild",
          element: <Achild />, // Nested route rendering component Achild
        },
      ],
    },
    // {
    //   path: "/b",
    //   element: <Achild />, // Another top-level route rendering component Achild
    // },
  ]);

  return routes;
}

export default Routes1;
