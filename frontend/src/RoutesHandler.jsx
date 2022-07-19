import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MapPage from './pages/MapPage'
import EditPage from './pages/EditPage'

import React from 'react'

function RoutesHandler() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/map' element={<MapPage/>}/>
            <Route path='/edit' element={<EditPage/>}/>
        </Routes>
    </Router>
  )
}

export default RoutesHandler