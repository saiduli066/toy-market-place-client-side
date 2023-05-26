import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Notfound/NotFound";
import Main from "../shared/Main";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/blogs",
            element: <Blog />
          },
    ]
    },
    {
        path: '/*',
        element:<NotFound/> ,
    }
]);


export default router;