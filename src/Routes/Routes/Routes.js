import { createBrowserRouter } from "react-router-dom";
import MyOrders from "../../DashboardLayout/MyOrders/MyOrders";
import Main from "../../Layout/Main/Main";
import LogIn from "../../Pages/AuthenticationPages/LogInPage/LogIn";
import Register from "../../Pages/AuthenticationPages/RegisterPage/Register";
import Blog from "../../Pages/BlogPage/Blog/Blog";
import Dashboard from "../../Pages/DashboardPage/Dashboard/Dashboard";
import AddProduct from "../../Pages/DashboardPage/ShareDashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/DashboardPage/ShareDashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashboardPage/ShareDashboard/AllSellers/AllSellers";
import AllUser from "../../Pages/DashboardPage/ShareDashboard/AllUser/AllUser";
import MyBuyers from "../../Pages/DashboardPage/ShareDashboard/WishList/WishList";
import MyProducts from "../../Pages/DashboardPage/ShareDashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/DashboardPage/ShareDashboard/ReportedItems/ReportedItems";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/HomePage/Home/Home";
import Products from "../../Pages/ProductsPage/Products/Products";
import Payment from "../../PaymentPage/Payment/Payment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import WishList from "../../Pages/DashboardPage/ShareDashboard/WishList/WishList";
import Contact from "../../Pages/ContactPage/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }

        ]
    },
    {

        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/wishList',
                element: <WishList></WishList>
            },
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reportedItems',
                element: <ReportedItems></ReportedItems>
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/booking/${params?.id}`)
            }

        ]

    }
])

export default router;