// App.jsx

import './App.css'
import Navbar from './component/Nav'
import Homepage from './component/homepage'
import './component/homepage.css'
import React, { useState } from 'react';
import Form from './component/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Updateform from './component/Updateform';
import Login from './component/Login';

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/form' element={<Form />} />
        <Route path='/update/:id' element={<Updateform />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
