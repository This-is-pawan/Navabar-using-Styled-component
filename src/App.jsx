import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Error from "./Error";
import { Children } from "react";
import {
  About,
  Error,
  Landing,
  HomeLayout,
  Cocktail,
  Newsletter,
} from "./pages";
import { loader as ladingLoader} from "./pages/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement:<Error/>,
    children: [
      {
        path: "landing",
        element: <Landing />,
        loader:ladingLoader,
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
