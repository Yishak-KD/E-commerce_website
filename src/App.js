import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactUs/ContactUs';
import ArtList from './pages/Shop/ArtList';
import About from './pages/About/About';
import HomePage from './pages/Home/HomePage';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route path='/shop' Component={ArtList} />
        <Route path='/about' Component={About} />
        <Route path='/contactus' Component={ContactPage} />
      </Routes>
    </div>
  )
}

export default App;