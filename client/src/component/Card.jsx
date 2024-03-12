import React from 'react'

 const Card=(props)=> {
  console.log(props)
  return (
    <div>
    <img width={150} src={props.img} alt="" />
    <h1>{props.coupleNames}</h1>
    <p className='reason'>{props.reasonForWeirdness}</p>
    <p className='movies'>{props.moviesTogether}</p>
    <p className='year'>{props.yearOfRelationshipMarriage}</p>
    <p className='status'>{props.currentStatus}</p>
    <p className='contoversy'>{props.notableEventsControversies}</p>
    </div>
  )
}

export default Card