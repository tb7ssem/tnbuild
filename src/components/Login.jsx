import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../pages/Login.css'; // Import the CSS file

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login) {
            login(username, password);
        } else {
            console.error("login function is not defined");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;