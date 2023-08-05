import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Notfound/NotFound";
import Main from "../shared/Main";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Authprovider from "../providers/Authprovider";
import AllToy from "../Pages/AllToy";
import AddAToy from "../Pages/AddAToy";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Pages/ToyDetails";
import MyToys from "../Pages/MyToys";



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
        path: "/all-toys",
        element: <AllToy />,
      },
      {
        path: "/view-details",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-toys",
        element: (
          <PrivateRoute>
            <AddAToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/view-details/:toyId",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
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