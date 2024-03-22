import React, { useState, useEffect } from 'react';
import './Login.css';
import Navbar from './Nav.jsx';
import Axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Check if the token exists in the cookie when component mounts
  useEffect(() => {
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      Axios.post("http://localhost:3000/auth", { username: username })
        .then((res) => {
          console.log(res.data.token);
          // Store token and username in cookie
          document.cookie = `token=${res.data.token}; expires=` + new Date(2030, 0, 1).toUTCString();
          document.cookie = `username=${username}; expires=` + new Date(2030, 0, 1).toUTCString();
          setLoggedIn(true);
        })
        .catch(error => {
          console.error("Login failed:", error);
          alert('Login failed. Please try again.');
        });
    } else {
      alert('Please fill in both username and password.');
    }
  };

  const handleLogout = () => {
    // Clear the token and username from the cookie
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setLoggedIn(false);
    // Redirect to homepage
    window.location.href = '/';
  };

  return (
    <div>
      <Navbar />
      {!loggedIn ? (
        <form>
          <h2 id='loginheading'>Login to Remember</h2>
          <div>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button id='loginbtn' type="button" onClick={handleLogin}>Login</button>
        </form>
      ) : (
        <div>
          <h2 id='welcometext'>Welcome, {username}!</h2>
          <button id='logoutbtn' onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Login;
