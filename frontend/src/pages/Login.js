import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { NavLink } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const { setIsAuthenticated } = useAuth();
    const auth = useAuth();

    if (auth.isAuthenticated) {
        return <Navigate to='/admin' />
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3001/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.success) {
            login();
            setIsAuthenticated(true);
            <Navigate to={'/admin'} />
        } else {
            alert(data.message);
        }
    };

    return (
        <main className="container-login">
            <div className="login">
                <h4 className="title">LOGIN</h4>
                <form onSubmit={handleLogin}>
                    <div className="text-area">
                        <label htmlFor="username" className="label">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            className="text-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="text-area">
                        <label htmlFor="password" className="label">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="text-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <input
                        type="submit"
                        value="LOGIN"
                        className="btn"
                    />
                </form>
                <NavLink to="/" className='return'>Return to Home</NavLink >
            </div>
        </main>
    );
}

export default Login;