import React, { useEffect, useState } from 'react'
import './homepage.css'
import Navbar from './Nav'
import axios from 'axios'
import Card from './Card'

function Homepage() {
  const [data, setData] = useState([])
  
  const getData = () => {
    axios.get("http://localhost:3000/getdata").then((res) => {
      setData(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Navbar/>
      <p id='heading'>Let's Explore the Weirdest Bollywood Couples!!</p>
      <div className='main'> 
      <div id='separate'>
        {data.map((ele, i) => (
          <Card  key={i} {...ele} getData={getData} />
        ))}

      </div>
       
      </div>
    </div>
  )
}

export default Homepage
