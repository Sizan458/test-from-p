import { createBrowserRouter } from "react-router-dom";
import NavBar from "../component/NavBar/NavBar";



const Router =  createBrowserRouter([
    {
        path:"/",
        element:<NavBar></NavBar>
    }
])


export default Router;