import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";

export const ResetPage = () => {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <div className="reset-page">
            <input 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
            />
            <button onClick={() => sendPasswordReset(email)}>Send password reset email</button>
            <p>Don't have an account? Register <Link to="/signup">here</Link></p>
        </div>
    );
}