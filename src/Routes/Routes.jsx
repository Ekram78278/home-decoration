import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import home from "../Pages/home";
import Products from "../Pages/Products";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,

    errorElement:<ErrorPage/>,

    children:[
        {
            index:true,
            Component: home,
            loader: () => fetch('../../public/furnitureData.json')
        },
        { 
            path:"/products",
            Component: Products
        },
        { 
            path:"/wishlist",
            Component: Wishlist
        },
    ]
  },
]);


export default router