import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css"; // Import the CSS file

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  

  const handleLogin = async () => {
    // Perform your login logic here, including the fetch request

    // Example usage of the CSS class in JSX
    // This should not be placed within the `handleLogin` function
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <div className="form-group">
          <input
            type="text"
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
        <Link to="/App2">
          <button onClick={handleLogin}>Login</button>
          </Link>
        </div>
        <p>
          Don't have an account? <Link to="/Signin">Sign up here</Link>
        </p>
    
      </div>
    </div>
  );
}

export default Login;
