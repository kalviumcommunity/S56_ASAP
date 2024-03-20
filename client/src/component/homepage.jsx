import React, { useEffect, useState } from 'react';
import './homepage.css';
import Navbar from './Nav';
import axios from 'axios';
import Card from './Card';

function Homepage() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('all'); // Default to 'all' user

  const getUsers = () => {
    axios.get("http://localhost:3000/user").then((res) => {
      setUsers(res.data);
    });
  };

  const getData = () => {
    axios.get("https://asap-bollywoodcouples.onrender.com/getdata", {
      params: { user: selectedUser }
    }).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
    getUsers();
  }, [selectedUser]); // Fetch data when selectedUser changes

  const filterData=selectedUser==="all"?data:data.filter((el)=>{
    if (el.user==selectedUser){return el}
  })
  return (
    <div>
      <Navbar />
      <select id='dropdownmenu' onChange={(e) => setSelectedUser(e.target.value)}>
        <option value='all'>All Users</option>
        {users.map((user) => (
          <option key={user._id} value={user.user}>{user.user}</option>
        ))}
      </select>
      <p id='heading'>Let's Explore the Weirdest Bollywood Couples!!</p>
      <div className='main'>
        <div id='separate'>
          {filterData.map((ele, i) => (
            <Card key={i} {...ele} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
