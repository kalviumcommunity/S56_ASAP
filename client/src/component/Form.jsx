import React, { useState } from 'react';
import Navbar from './Nav';
import axios from 'axios';
import './Form.css';

function Form() {
  const [coupleNames, setCoupleNames] = useState('');
  const [reasonForWeirdness, setReasonForWeirdness] = useState('');
  const [moviesTogether, setMoviesTogether] = useState('');
  const [yearOfRelationshipMarriage, setYearOfRelationshipMarriage] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');
  const [notableEventsControversies, setNotableEventsControversies] = useState('');
  const [img, setImg] = useState('');

  const handlePost = async (event) => {
    event.preventDefault();
    
  
    try {
      const newCouplesData = {
        coupleNames: coupleNames,
        reasonForWeirdness: reasonForWeirdness,
        moviesTogether: moviesTogether,
        yearOfRelationshipMarriage: yearOfRelationshipMarriage,
        currentStatus: currentStatus,
        notableEventsControversies: notableEventsControversies,
        img: img
      };
  
      const res = await axios.post('http://localhost:3000/post', newCouplesData);
      console.log("Data posted successfully!");
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <>
      <Navbar />
      <div className="form">
        <p className="heading">Add New Couples</p>
        <form >
          <input
            type="text"
            placeholder="Enter Couple Names"
            value={coupleNames}
            onChange={(e) => setCoupleNames(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Reason For Weirdness"
            value={reasonForWeirdness}
            onChange={(e) => setReasonForWeirdness(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Movies Together"
            value={moviesTogether}
            onChange={(e) => setMoviesTogether(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Year Of Relationship/Marriage"
            value={yearOfRelationshipMarriage}
            onChange={(e) => setYearOfRelationshipMarriage(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Current Status"
            value={currentStatus}
            onChange={(e) => setCurrentStatus(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Notable Events/Controversies"
            value={notableEventsControversies}
            onChange={(e) => setNotableEventsControversies(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Image URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" onClick={handlePost}/>
        </form>
      </div>
    </>
  );
}

export default Form;
