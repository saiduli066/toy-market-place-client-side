import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Notfound/NotFound";
import Main from "../shared/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    //     children: [
        
    // ]
    },
    {
        path: '/*',
        element:<NotFound/> ,
    }
]);


export default router;