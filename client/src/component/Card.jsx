import React from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'
import './Card.css'

 const Card=(props)=> {
  console.log(props)
  const handleDel = ()=>{
    axios.delete(`https://asap-bollywoodcouples.onrender.com/deleteuser/${props._id}`)
    .then((res)=>{
      // console.log(res)
      props.getData()
    })
    .catch((err)=>{
      console.log(err)
    })}

  return (
    <div className='carddiv'>
    <img className='imagescard'  width={150} src={props.img} alt="" />
    <p id='couplenames'>{props.coupleNames}</p>
    <p className='reason'>{props.reasonForWeirdness}</p>
    <p className='movies'>{props.moviesTogether}</p>
    <p className='year'>{props.yearOfRelationshipMarriage}</p>
    <p className='status'>{props.currentStatus}</p>
    <p className='contoversy'>{props.notableEventsControversies}</p>
      <Link to= {`/update/${props._id}`} ><button id='update'>UPDATE</button></Link>
     <button id='delete' onClick={handleDel}>Delete</button>
    </div>
  )
}

export default Card