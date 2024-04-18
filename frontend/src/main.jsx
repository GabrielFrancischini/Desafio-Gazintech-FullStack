import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Desenvolvedores from "./Desenvolvedores";
import Criardesenvolvedores from "./Criardesenvolvedores";
import Editardesenvolvedores from "./Editardesenvolvedores";
import { Home } from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/desenvolvedores",
    element: <Desenvolvedores />,
  },

  {
    path: "/desenvolvedores/criar",
    element: <Criardesenvolvedores />,
  },

  {
    path: "/desenvolvedores/editar/:id",
    element: <Editardesenvolvedores />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
