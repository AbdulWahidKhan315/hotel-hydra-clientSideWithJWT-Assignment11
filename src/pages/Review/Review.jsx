import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Review = () => {
    const name = useParams();

    const handleReview = (e)=>{
        e.preventDefault();
        const roomName = name.id
        const userName = e.target.yourName.value;
        const rating = e.target.rating.value;
        const comment = e.target.comment.value;
        const time = Date.now();
        const review = {
            roomName: roomName,
            userName: userName,
            rating: rating,
            comment: comment,
            time: time
        }
        fetch('http://localhost:5000/api/review',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Review added successfully. Look at the room details page to see...',
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
        <div>
            <div className="bg-orange-100">
                <h1 className="text-center text-5xl font-bold p-3">Provide a review for: <span className="text-orange-600">{name.id}</span> Room</h1>
                <div className="p-3">
                    <form onSubmit={handleReview}>
                        <div className="flex gap-2 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-orange-700">Your Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="yourName" placeholder="Your Name" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-orange-700">Provide Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-2">

                            <div className="form-control md:w-1/2 mb-10">
                                <label className="label">
                                    <span className="label-text font-semibold text-orange-700">Your Comment</span>
                                </label>
                                <label className="input-group">
                                    <textarea name="comment" placeholder="Please write your comment here..." id="" cols="30" rows="10" className=" input-bordered w-full p-2 font-semibold" required></textarea>
                                </label>
                            </div>
                        </div>
                        <div>
                        </div>
                        <button className="btn btn-block bg-[#B8860B] hover:bg-orange-900 text-white">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;