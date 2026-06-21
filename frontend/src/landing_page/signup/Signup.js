import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "./signup.css";

function SignUp() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiBaseUrl = process.env.REACT_APP_API_URL || "http://localhost:3002";
      const { data } = await axios.post(
        `${apiBaseUrl}/api/auth/signup`,
        { ...inputValue }
      );
      const { success, message } = data;
      if (success) {
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      } else {
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="signup-wrapper">
      <div className="form_container">
        <h2>Signup Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
