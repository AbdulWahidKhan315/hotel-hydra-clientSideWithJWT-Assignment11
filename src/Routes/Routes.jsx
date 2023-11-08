import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../pages/ErrorPage/Error";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import BookNow from "../pages/BookNow/BookNow";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRoutes from "./PrivateRoutes";
import Update from "../pages/Update/Update";
import Review from "../pages/Review/Review";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
                loader: ()=> fetch('https://hotel-hydra-server.vercel.app/api/rooms')
            },
            {
                path: '/room_details/:id',
                element: <RoomDetails></RoomDetails>,
                loader: ({params}) => fetch(`https://hotel-hydra-server.vercel.app/api/rooms_details/${params.id}`)
            },
            {
                path: '/book_now/:id',
                element: <PrivateRoutes><BookNow></BookNow></PrivateRoutes>,
                loader: ({params})=> fetch(`https://hotel-hydra-server.vercel.app/api/rooms_details/${params.id}`)
            },
            {
                path: '/myBookings',
                element: <PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><Update></Update></PrivateRoutes>,
                loader: ({params})=> fetch(`https://hotel-hydra-server.vercel.app/api/find/forUpdate/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <Review></Review>
            }
        ]
    }
])
export default router;