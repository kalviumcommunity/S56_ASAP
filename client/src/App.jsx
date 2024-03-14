import './App.css'
import Navbar from './component/Nav'
import Homepage from './component/homepage'
import './component/homepage.css'
import React, { useState } from 'react';
import Form from './component/Form';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Updateform from './component/Updateform';

function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Homepage/>}></Route>
<Route path='/form' element={<Form/>}></Route>
<Route path='/update/:id' element={<Updateform/>}></Route>
    </Routes>
    </BrowserRouter>
       
   
  )
}

export default App