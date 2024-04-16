import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Store the submitted data
    const data = {
      username,
      password,
    };

    setSubmittedData(data);
  };

  return (
    <div className="login-container">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>

      {submittedData && (
        <div className="submitted-data">
          <h2>Welcome back</h2>
          <p> {submittedData.username}</p>
          <p>Password: hidden</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
