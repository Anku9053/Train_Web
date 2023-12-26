import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TrainfromTo from './TrainfromTo'
// import Homepage from './Navbar'
import Navbar from './Navbar'

const MainROutes = () => {
  return <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/trainsearch' element={<TrainfromTo/>}/>

  </Routes>
}

export default MainROutes