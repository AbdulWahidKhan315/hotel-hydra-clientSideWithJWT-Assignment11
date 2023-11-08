import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
    const [featured, setFeatured] = useState([])
    const someData = featured.filter(data => data.price_per_night > 100)

    useEffect(() => {
        fetch('https://hotel-hydra-server.vercel.app/api/rooms')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className='text-4xl font-bold text-center text-[#B8860B] mb-6 italic mt-16'>Our Featured Rooms...</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    someData.map(some => <div key={some._id} className="card border-l-8 border-r-8 border-[#B8860B] lg:flex lg:flex-row lg:items-center bg-base-100 shadow-xl">
                        <div>
                            <figure><img className="" src={some.img1} alt="Movie" /></figure>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title animate-pulse">{some.room_name}</h2>
                            <h2 className="card-title text-amber-600">{some.price_per_night}$</h2>
                            <p className="text-gray-500">A{some.room_description}</p>
                            <div className="card-actions">
                                <Link to={`/book_now/${some._id}`}>
                                    <button className="btn bg-[#D9A05A] transition ease-out duration-300 hover:scale-105 hover:bg-[#B8860B] hover:text-white animate-bounce hover:animate-none">Book Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Featured;