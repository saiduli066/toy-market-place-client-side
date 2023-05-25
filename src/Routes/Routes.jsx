import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Notfound/NotFound";
import Main from "../shared/Main";
import Home from "../Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />
          },
    ]
    },
    {
        path: '/*',
        element:<NotFound/> ,
    }
]);


export default router;