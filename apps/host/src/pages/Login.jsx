import React, { useState } from "react";
import { login, setToken } from "../auth/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const token = await login(username, password);
            setToken(token);
            navigate("/");
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />

            <input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;