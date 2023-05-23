import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Notfound/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    },
    {
        path: '/*',
        element:<NotFound/> ,
    }
]);


export default router;