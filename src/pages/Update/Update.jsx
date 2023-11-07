import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const data = useLoaderData();
    const { dateIn, dateOut, phoneNumber, roomName, _id } = data;

    const handleUpdate = (e) => {
        e.preventDefault();
        const phoneNumber = e.target.phoneNumber.value;
        const dateIn = e.target.date.value;
        const dateOut = e.target.date2.value;
        const updated = {
            phoneNumber: phoneNumber,
            dateIn: dateIn,
            dateOut: dateOut
        }
        fetch(`http://localhost:5000/api/update/bookings/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(updated)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Booking update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })
        .catch(err => {
            Swal.fire({
                title: 'Error!',
                text: `${err.message}`,
                icon: 'error',
                confirmButtonText: 'Cancel'
            })
        })

    }

    return (
        <div className="bg-orange-100">
            <h1 className="text-center text-3xl md:text-5xl font-bold p-3">Update your bookings: <span className="text-orange-600">{roomName}</span></h1>
            <div>
                <form onSubmit={handleUpdate}>
                    <div className="flex gap-2 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-orange-700">Phone Number</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="phoneNumber" defaultValue={phoneNumber} className="input input-bordered w-full" required />
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
                                <input type="date" name="date" defaultValue={dateIn} placeholder="date" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 mb-10">
                            <label className="label">
                                <span className="label-text font-semibold text-orange-700">Check Out Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="date2" defaultValue={dateOut} placeholder="Date" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div>
                    </div>
                    <button className="btn btn-block bg-[#B8860B] hover:bg-orange-900 text-white">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;