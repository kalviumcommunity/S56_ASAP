import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Nav';
import './Updateform.css'

function Updateform() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [coupleData, setCoupleData] = useState({
    coupleNames: "",
    reasonForWeirdness: "",
    moviesTogether: "",
    yearOfRelationshipMarriage: "",
    currentStatus: "",
    notableEventsControversies: "",
    img: ""
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://asap-bollywoodcouples.onrender.com/update/${id}`, coupleData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoupleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="form">
        <p className="heading">Update Couple Data !!</p>
        <form >
          <input
            type="text"
            name="coupleNames"
            placeholder="Enter Couple Names"
            value={coupleData.coupleNames}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="reasonForWeirdness"
            placeholder="Enter Reason For Weirdness"
            value={coupleData.reasonForWeirdness}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="moviesTogether"
            placeholder="Enter Movies Together"
            value={coupleData.moviesTogether}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="yearOfRelationshipMarriage"
            placeholder="Enter Year Of Relationship/Marriage"
            value={coupleData.yearOfRelationshipMarriage}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="currentStatus"
            placeholder="Enter Current Status"
            value={coupleData.currentStatus}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="notableEventsControversies"
            placeholder="Enter Notable Events/Controversies"
            value={coupleData.notableEventsControversies}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="img"
            placeholder="Enter Image URL"
            value={coupleData.img}
            onChange={handleChange}
          />
          <br />
         <button id='updatebut2' onClick={handleUpdate}>Update</button>
        </form>
      </div>
    </>
  );
}

export default Updateform;
