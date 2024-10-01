import React, { useEffect } from "react";
import { useState } from "react";
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

  const checkID = () => {
    if (username === "admin" && password === "admin") return true;
    return false;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (checkID(username, password)) {
      navigate("/admin-dashboard");
    } else {
      setError("Invalid username or password");
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
              Don't have an account <a href="#">Sign up</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
