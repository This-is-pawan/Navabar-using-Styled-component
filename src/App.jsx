import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Children } from "react";
import {
  About,
  Error,
  Landing,
  HomeLayout,
  Cocktail,
  Newsletter,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "landing",
        element: <Landing />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
        Children: [
          {
            index: true,
            element: <h2>our company</h2>,
          },
          {
            path: 'person',
            element: <h2>john doe</h2>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
