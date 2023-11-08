
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import ReactHelmet from "../../components/ReactHelmet/ReactHelmet";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { user, createUserInFirebase } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserInFirebase(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Register Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then()
                    .catch(error => {
                        Swal.fire({
                            title: 'Error!',
                            text: `${error.message}`,
                            icon: 'error',
                            confirmButtonText: 'Cool'
                        })
                    })
                navigate('/');
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    return (
        <div className="bg-base-200">
            <ReactHelmet title='Register'></ReactHelmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="flex flex-col lg:flex-row-reverse lg:gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[#B8860B]">Register now!</h1>
                        <p className="py-6 font-semibold">Please register in our website. By completing the registration you will get the premium service from our website.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#D9A05A] md:ml-36">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                    user ? <h1 className="text-3xl">Already logged in</h1> :
                                        <button className="btn bg-orange-500 hover:bg-orange-700 text-white">Register</button>
                                }
                                <p>Already have any accout? please <Link to="/login" className="font-bold text-blue-600">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;