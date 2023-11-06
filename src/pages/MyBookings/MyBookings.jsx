import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    console.log(user?.email)

    useEffect(() => {
        fetch(`http://localhost:5000/api/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h2 className="text-3xl">This is bookings</h2>
        </div>
    );
};

export default MyBookings;