import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Services } from "./pages/Services/Services";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
