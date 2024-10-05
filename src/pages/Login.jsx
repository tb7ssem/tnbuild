import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Ensure this file exists

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("login-page");
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("API URL:", process.env.REACT_APP_API_URL);
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "admin",
          password: "adminadmin"
        }),
      });
      const data = await response.json();
  
      if (response.ok) {
        // Handle successful login (e.g., store token, redirect)
        const { token } = data; // Assuming the token is returned in the response
        console.log("Login successful, token:", token);
        navigate("/admin");
      } else {
        setError(data.message || "Login failed"); // Show error message
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-title">
          <span>Login</span>
        </div>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <input
              type="text"
              id="user"
              className="input_field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username" // Add this line
            />
            <label htmlFor="user" className="label">
              Username
            </label>
            <i className="fe-regular fa-user icon"></i>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              id="pass"
              className="input_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password" // Add this line
            />
            <label htmlFor="pass" className="label">
              Password
            </label>
            <i className="fe-solid fa-lock icon"></i>
          </div>
          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="forgot">
              <a href="#">Forgot Password</a>
            </div>
          </div>
          <div className="input-wrapper">
            <input type="submit" className="input-submit" value="Login" />
          </div>
          <div className="signup">
            <span>
              Don't have an account <a href="/register">Sign up</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
