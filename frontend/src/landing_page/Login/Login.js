import React, { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import "../signup/signup.css";

const Login = () => {
  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSuccess = (msg) =>
  {
    <div style={{width:'500px'}} class=" alert alert-warning alert-dismissible fade show" role="alert">
    <strong>User login successfully</strong> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiBaseUrl = process.env.REACT_APP_API_URL || "http://localhost:3002";
      const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001/";
      const { data } = await axios.post(
        `${apiBaseUrl}/api/auth/signin`,
        {
          ...inputValue,
        }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = dashboardUrl;
        }, 1000);
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-wrapper">
      <div className="form_container">
      <h2>Login Account</h2>
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
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
    </div>
  );
};

export default Login;