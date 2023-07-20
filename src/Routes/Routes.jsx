import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Notfound/NotFound";
import Main from "../shared/Main";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Authprovider from "../providers/Authprovider";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Authprovider>
            <Login />
          </Authprovider>
        ),
      },
      {
        path: "/register",
        element: (
          <Authprovider>
            <Register />
          </Authprovider>
        ),
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);


export default router;