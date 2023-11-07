import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../firebase/firebase.config";
import { createContext, useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUserInFirebase = (email, password) => {
        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Your password should be at least 6 character, 1 uppercase letter and 1 special character',
                icon: 'error',
                confirmButtonText: 'Cancel'
            })
            return;
        }
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setLoading(false);
            setUser(currentUser);
            if(currentUser){
                axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                })
                .catch(error =>{
                    Swal.fire({
                        title: 'Error!',
                        text: `${error.message}`,
                        icon: 'error',
                        confirmButtonText: 'Cancel'
                      })
                })
            }else{
                axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
                .then(res => {
                    console.log(res.data)
                })
            }
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUserInFirebase,
        signIn,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;