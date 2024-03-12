import React, { useState } from 'react';
import Navbar from './Nav';
import axios from 'axios';
import './Form.css' 
function Form() {
  const [name, setName] = useState('');
  const [information, setInformation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/addcouple', { name, information });
      console.log(response.data.message);
      // Reset the form fields
      setName('');
      setInformation('');
    } catch (error) {
      console.error('Error adding couple:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="form">
        <p className="heading">Add New Couples</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Couple Name!"
            value={name}
            
          />
          <br />
          <input
            type="text"
            placeholder="enter their information"
            value={information}
            
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Form;