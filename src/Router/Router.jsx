import { Outlet, createBrowserRouter } from "react-router-dom";
import NavBar from "../component/NavBar/NavBar";
import Register from "../component/Register/Register";
import Login from "../component/Login/Login";
import DashBoard from "../component/DashBoard/DashBoard";



const Router =  createBrowserRouter([
    {
        path:"/",
        element:<div>
            <NavBar></NavBar>
            <Outlet></Outlet>

        </div>,
        children:[
           {
            path:"/dashboard",
             element:<DashBoard></DashBoard>
           },
           {
             path:"/register",
             element:<Register></Register>
           } ,
           {
            path:"/login",
            element:<Login></Login>
           }
        ]
    }
])


export default Router;