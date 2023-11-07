import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { user, signIn, signInWithGoogle } = useContext(AuthContext);


    const googleLogin = () => {
        signInWithGoogle()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cancel'
                })
            })
    }




    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid Email and password! Check your email and password',
                    icon: 'error',
                    confirmButtonText: 'Cancel'
                })
            })
    }

    return (
        <div className="bg-base-200">
            <div className="hero min-h-screen bg-base-200">
                <div className="flex flex-col lg:flex-row-reverse lg:gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[#B8860B]">Login now!</h1>
                        <p className="py-6 font-semibold">Please login in our website. By completing the registration you will get the premium service from our website.</p>
                        <p className="text-2xl font-bold mb-3 text-[#B8860B]">Login With google!</p>
                        {
                                    user ? "":
                                    <button onClick={googleLogin} className="btn bg-orange-600 text-white">Google</button>
                                }
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#D9A05A] md:ml-36">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    name="password" placeholder="Password" className="input input-bordered" required />
                                <p onClick={() => setShowPassword(!showPassword)} className="absolute right-1 top-12 text-xl">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                {
                                    user ?
                                        <h1 className="text-3xl font-bold">Already logged in</h1> :
                                        <button className="btn bg-orange-500 hover:bg-orange-700 text-white">Login</button>
                                }
                                <p>Do not have any accout? please <Link to="/register" className="font-bold text-blue-600">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;