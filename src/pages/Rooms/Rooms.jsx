import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Rooms = () => {
  const roomsData = useLoaderData();
  const [rooms, setRooms] = useState(roomsData)
  const handleSort = () => {
    const customSort = (a, b) => {
      const price1 = a.price_per_night;
      const price2 = b.price_per_night;
      if (price1 < price2) return 1;
      else if (price1 > price2) return -1;
      return 0;
    }
    const sorted = [...rooms].sort(customSort)
    setRooms(sorted)
  }
  return (
    <div>
      <div className="flex justify-center mt-4">
        <button onClick={handleSort} className="btn bg-[#D9A05A] hover:bg-[#B8860B] transition-all hover:skew-x-2 hover:text-white hover:skew-y-2 hover:scale-105 animate-bounce hover:animate-none">Sort by Price</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {
          rooms.map(room => <div key={room.room_name} className="rounded-tl-full transition-all ease-out hover:rounded-tl-3xl duration-300 bg-[#DEB887] shadow-xl ">
            <Link to={`/room_details/${room._id}`}>
              <figure className="px-10 pt-10">
                <img src={room.img1} alt="Shoes" className="rounded-lg transition hover:scale-105 duration-500 delay-100" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-black font-extrabold">{room.room_name} <span>{room.price_per_night}</span></h2>
                <h2 className={room.available_seats > 0 ? 'font-bold text-green-500' : 'font-bold text-red-500'}>{room.available_seats > 0 ? 'Available' : 'Unavailable'}</h2>
              </div>
            </Link>
          </div>)
        }
      </div>
    </div>
  );
};

export default Rooms;