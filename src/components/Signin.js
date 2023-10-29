import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";

function Signin() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
        break;
      case "email":
        setError("");
        setEmail(e.target.value);
        break;
      case "pass1":
        setError("");
        setPass1(e.target.value);
        break;
      case "pass2":
        setError("");
        setPass2(e.target.value);
        break;
      default:
    }
  }

  const handleSubmit = () => {
    if (user !== "" && email !== "" && pass1 !== "" && pass2 !== "") {
      setMsg("Registration successful!");
      setUser("");
      setEmail("");
      setPass1("");
      setPass2("");
    } else {
      setError("All fields are required!");
    }
  }

  const checkPassword = () => {
    if (pass1.length < 8) {
      setError("Password is less than 8 characters!");
    }
  }

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2>Create an account</h2>
        <p>
          {msg !== "" ? (
            <span className="text-success">{msg}</span>
          ) : (
            <span className="text-danger">{error}</span>
          )}
        </p>
        <div className="form-group">
          <input
            type="text"
            name="user"
            value={user}
            onChange={(e) => handleInputChange(e, "user")}
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e, "email")}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="pass1"
            value={pass1}
            onChange={(e) => handleInputChange(e, "pass1")}
            onBlur={checkPassword}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="pass2"
            value={pass2}
            onChange={(e) => handleInputChange(e, "pass2")}
            placeholder="Repeat Password"
          />
        </div>
        <div className="form-group">
          <input type="checkbox" />
          <label>
            I agree all statements in <a href="#!">Terms of service</a>
          </label>
        </div>
        <div className="form-group">
          <Link to="/Login">
            <input
              type="submit"
              value="Submit"
              onClick={handleSubmit}
            />
          </Link>
        </div>
        <div className="form-group">
          <p>Have already an account? <Link to="/Login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
