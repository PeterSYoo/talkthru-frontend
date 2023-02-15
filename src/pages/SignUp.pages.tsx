import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../firebase';


export const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    const register = () => {
        if (!name) {
            alert("Please enter name");
        }
        registerWithEmailAndPassword(name, email, password);
    };

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate("/home");
    }, [user, loading]);


    return (
        <>
            <div className="w-full h-full bg-blue-100 flex flex-col justify-center items-center">
                <input
                    type="text"
                    className="register-textbox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input 
                    type="text"
                    className="register-textbox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                />
                <input 
                    type="password"
                    className="register-textbox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button onClick={register}>Register</button>
                <p>or</p>
                <button onClick={signInWithGoogle}>Register with Google</button>
                <div>
                <p>Already have an account? Login <Link to="/login">here</Link></p>
                </div>
            </div>
        </>
    )
}