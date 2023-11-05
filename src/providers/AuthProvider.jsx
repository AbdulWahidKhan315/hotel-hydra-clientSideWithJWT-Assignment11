import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth"
import app from "../firebase/firebase.config";
import { createContext, useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const auth = getAuth(app);
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


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUserInFirebase
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;