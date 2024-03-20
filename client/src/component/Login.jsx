
import React, { useState } from 'react';
import './Login.css';
import Navbar from './Nav.jsx';
import Axios from 'axios'

function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      // Setting cookie with username
      document.cookie = `username=${username};`;
      setLoggedIn(true);
      Axios.post("http://localhost:3000/auth", {username:username})
      .then((res)=>{
        console.log(res.data.token)
        document.cookie= `token=${res.data.token};expries=`+new Date(2030, 0, 1).toUTCString();
        
      })

    } else {
      alert('Please fill in both username and password.');
    }
  };

  const handleLogout = () => {
    // Clearing cookie
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // Implement server-side authentication and set HTTP-only cookies via HTTP response headers.
    setLoggedIn(false);
    document.cookie= `token=;expries=`+new Date(2030, 0, 1).toUTCString();

  };

  return (
    <div>
      <Navbar/>
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

