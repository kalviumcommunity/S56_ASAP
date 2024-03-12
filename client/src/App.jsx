import './App.css'
import Navbar from './component/Nav'
import Homepage from './component/homepage'
import './component/homepage.css'
import React, { useState } from 'react';
import Form from './component/Form';
import {BrowserRouter , Routes, Route} from "react-router-dom" 

function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Homepage/>}></Route>
<Route path='/form' element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
       
   
  )
}

export default App