import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Ensure this file exists

const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			const data = await response.json();
			if (response.ok) {
				navigate("/login"); // Redirect to login on successful registration
			} else {
				setError(data.message); // Show error message
			}
		} catch (err) {
			setError("An error occurred. Please try again.");
		}
	};

	return (
		<div className="container">
			<div className="register-container">
				<div className="register-title">
					<span>Register</span>
				</div>
				{error && <p className="error-message">{error}</p>}
				<form onSubmit={handleRegister}>
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
					</div>
					<div className="input-wrapper">
						<input type="submit" className="input-submit" value="Register" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
