import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import ReactHelmet from "../../components/ReactHelmet/ReactHelmet";
import { configConsumerProps } from "antd/es/config-provider";
import moment from "moment/moment";

const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    // const m = moment();
    // console.log(`original moment: ${m.toString()}`);
    // m.subtract(myDate);
    // console.log(`after : ${m.toString()}`)

    useEffect(() => {
        fetch(`https://hotel-hydra-server.vercel.app/api/bookings?email=${user?.email}`, { credentials: "include" })
            .then(res => res.json())
            .then(data => setBookings(data))
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: `${err.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }, [])

    const handleDelete = (allData) => {
        const storedDateString = allData.dateIn;
        const storedDate = moment(storedDateString, 'YYYY/MM/DD');
        const currentDate = moment().format('YYYY/MM/DD');
        const daysDifferent = storedDate.diff(currentDate, 'days')

        if (daysDifferent < 1) {
            Swal.fire({
                title: 'Warning!',
                text: 'You can not cancel booking before 1 day ago from your booked date',
                icon: 'warning',
                confirmButtonText: 'Ok'
              })
            return ;
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hotel-hydra-server.vercel.app/api/bookings?data=${JSON.stringify(allData)}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(book => book._id !== allData._id);
                            setBookings(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <ReactHelmet title='My Bookings'></ReactHelmet>
            <h2 className="text-3xl text-center font-bold my-3">Your bookings items: {bookings.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="w-[800px] lg:w-full">
                        {/* head */}
                        <thead>
                            <tr className="bg-orange-200 text-black">
                                <th>No.</th>
                                <th>Room Name</th>
                                <th>Phone Number</th>
                                <th>Price</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>email</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings.map((data, index) => <tr className="bg-base-200 text-orange-500"
                                    key={data._id}>
                                    <th>{index + 1}</th>
                                    <th>{data.roomName}</th>
                                    <th>{data.phoneNumber}</th>
                                    <th>{data.price}</th>
                                    <th>{data.dateIn}</th>
                                    <th>{data.dateOut}</th>
                                    <th>{data.email}</th>
                                    <th>
                                        <img className="w-16 h-16 rounded-full" src={data.img1} alt="" />
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(data)}
                                            className="btn btn-sm bg-orange-600 text-white font-bold hover:bg-orange-800">Cancel</button>
                                        <Link to={`/update/${data._id}`}>
                                            <button className="btn btn-sm bg-green-600 text-white font-bold hover:bg-green-800">Update</button>
                                        </Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;