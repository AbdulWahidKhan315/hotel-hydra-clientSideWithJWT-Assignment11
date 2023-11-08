import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const BookNow = () => {
    const { user } = useContext(AuthContext);
    const bookingData = useLoaderData();
    const { _id, available_seats, room_name, img1, price_per_night, room_description } = bookingData;
    const [display, setDisplay] = useState('hidden')
    const seats = parseInt(bookingData.available_seats)

    const handleBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const roomName = form.roomName.value;
        const phoneNumber = form.phoneNumber.value;
        const dateIn = form.date.value;
        const dateOut = form.date2.value;
        const price = form.price.value;
        const bookingRoom = {
            roomName: roomName,
            phoneNumber: phoneNumber,
            price: price,
            dateIn: dateIn,
            dateOut: dateOut,
            email: user?.email,
            img1: img1
        }
        fetch('https://hotel-hydra-server.vercel.app/api/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingRoom)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Booking successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    setDisplay('')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="bg-[#DEB887] p-2 lg:p-24">
                <div className="relative">
                    <img src={img1} className="h-[400px] md:h-[500px] w-full object-cover rounded-tl-3xl" alt="" />
                    <p className="w-1/2 absolute top-5 left-5 bg-orange-200 p-3 rounded-tl-3xl  animate-pulse hover:animate-none"><span className="text-3xl font-bold">Description: A</span>{room_description}</p>
                </div>
                <h1 className="text-center text-4xl md:text-5xl font-bold p-3">Book This Room: <span className="text-orange-600 ">{room_name}</span></h1>
                <div className="flex flex-col justify-center items-center py-4">
                    <h1>You can provide a review after booking...</h1>
                    <Link to={`/review/${room_name}`}>
                        <button className={`${display} text-orange-500 btn font-extrabold hover:bg-black`}>Leave a Review</button>
                    </Link>
                </div>
                {
                    seats>0 ? <div>
                    <form onSubmit={handleBook}>
                        <div className="flex gap-2 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-orange-700">Room Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="roomName" defaultValue={room_name} placeholder="Room Name" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-orange-700">Phone Number</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="phoneNumber" placeholder="Phone Number" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                        {/* second row */}
                        <div className="flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-orange-700">Check In Date</span>
                                </label>
                                <label className="input-group">
                                    <input type="date" name="date" placeholder="date" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-orange-700">Check Out Date</span>
                                </label>
                                <label className="input-group">
                                    <input type="date" name="date2" placeholder="Date" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control w-full  mb-10">
                                <label className="label">
                                    <span className="label-text font-semibold text-orange-700">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" defaultValue={price_per_night} placeholder="Price" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-block bg-[#B8860B] hover:bg-black text-white">Book</button>
                    </form>
                </div>: <h1 className="text-center text-3xl md:text-5xl font-bold text-orange-900">You can't book this room. There is no available seats</h1>
                }
            </div>
        </div>
    );
};

export default BookNow;