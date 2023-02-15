import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle, logInWithEmailAndPassword } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/home");
    }, [user, loading]);


    return (
        <>
            <div className="w-full h-full bg-blue-100 flex flex-col justify-center items-center">
                <input
                    type="text"
                    className="login-textbox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                />

                <input
                    type="password"
                    className="login-textbox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />

                <button onClick={() => logInWithEmailAndPassword(email, password)}>
                    Login
                </button>

                <p>or</p>

                <button onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    <p>Don't have an account? Sign up <Link to="/signup">here</Link></p>
                </div>
            </div>
        </>
    )
}