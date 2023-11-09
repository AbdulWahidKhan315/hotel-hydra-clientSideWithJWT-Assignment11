import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])


    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinksStyle = ({ isActive }) => {
        return {
            backgroundColor: isActive ? '#B8860B' : '',
            textDecoration: isActive
        }
    }


    const navLinks = <>
        <li><NavLink style={navLinksStyle} to="/">Home</NavLink></li>
        <li><NavLink style={navLinksStyle} to="/rooms">Rooms</NavLink></li>
        <li><NavLink style={navLinksStyle} to="/myBookings">My Bookings</NavLink></li>
        <li><NavLink style={navLinksStyle} to="/login">Login</NavLink></li>
        <li><NavLink style={navLinksStyle} to="/register">Register</NavLink></li>
        <li><NavLink style={navLinksStyle} to="/aboutUs">About Us</NavLink></li>
    </>

    return (
        <div data-aos="fade-down" data-aos-duration="2000" className="navbar bg-base-200 text-black">
            <div className="navbar-start">
                <div className=" dropdown dropdown-right mb-8 lg:mb-0">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] relative p-2 shadow bg-black text-white rounded-box w-80">
                        <div className="flex flex-wrap">
                            {
                                navLinks
                            }
                        </div>
                    </ul>
                </div>
                <a className="btn btn-sm lg:btn-md normal-case text-base lg:text-xl bg-[#D9A05A] hover:bg-[#B8860B] text-white">Hotel-Hydra</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex flex-col-reverse lg:flex-row items-center">
                    {
                        user ? <p className="mr-2 font-bold hidden lg:flex">{user.displayName}</p> : ""
                    }
                    {
                        user ? <img className="w-14 h-14 rounded-full mr-1" src={user.photoURL} alt="" /> : <img src="" alt="" />
                    }
                </div>
                {
                    user ? <button onClick={handleSignOut} className="btn btn-sm lg:btn-md bg-[#D9A05A] hover:bg-[#B8860B] border-none font-bold text-white">Sign Out</button> :
                        <Link to="/login">
                            <button className="btn btn-sm lg:btn-md bg-[#D9A05A] hover:bg-[#B8860B]  border-none font-bold text-white">Login</button>
                        </Link>
                }



            </div>
        </div>
    );
};

export default Navbar;