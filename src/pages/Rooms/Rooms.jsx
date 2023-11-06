import { Link, useLoaderData } from "react-router-dom";

const Rooms = () => {
  const rooms = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl">Rooms: {rooms.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {
          rooms.map(room => <div key={room.room_name} className="rounded-tl-full transition-all ease-out hover:rounded-tl-3xl duration-300 bg-[#DEB887] shadow-xl ">
            <Link to={`/room_details/${room._id}`}>
              <figure className="px-10 pt-10">
                <img src={room.img1} alt="Shoes" className="rounded-lg transition hover:scale-105 duration-500 delay-100" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-black font-extrabold">{room.room_name}</h2>
                <h2 className={room.available_seats>0 ? 'font-bold text-green-500' : 'font-bold text-red-500'}>{room.available_seats>0 ? 'Available' : 'Unavailable'}</h2>
              </div>
            </Link>
          </div>)
        }
      </div>
    </div>
  );
};

export default Rooms;