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
                loader: ()=> fetch('http://localhost:5000/api/rooms')
            },
            {
                path: '/room_details/:id',
                element: <RoomDetails></RoomDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/api/rooms_details/${params.id}`)
            },
            {
                path: '/book_now/:id',
                element: <BookNow></BookNow>,
                loader: ({params})=> fetch(`http://localhost:5000/api/rooms_details/${params.id}`)
            },
            {
                path: '/myBookings',
                element: <PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params})=> fetch(`http://localhost:5000/api/find/forUpdate/${params.id}`)
            }
        ]
    }
])
export default router;