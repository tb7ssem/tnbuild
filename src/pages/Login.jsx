import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Ensure this file exists

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const checkID = () => {
    if (username === "admin" && password === "admin") return true;
    return false;
  };

  const handleLogin = () => {
    if (checkID(username, password)) {
      navigate("/admin-dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <h1>Admin Login</h1>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
