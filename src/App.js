// import Navigation from "./Components/Navigation";
import React from "react";
import Footer from "./Components/Footer";
// import WelcomeMessage from "./Components/WelcomeMessage";
// import Home from "./pages/Home/Home";
// import HomePage from './Components/HomePage';
// import ContactPage from './Components/ContactPage';
// import AboutPage from './Components/AboutPage';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch } from 'react-router-dom'
// import ArtWork from "./Components/ArtWork";
import HomePage from "./Components/HomePage";
// import ArtList from "./Components/ArtList";
// import ContactUs from "./Components/ContactUs";
// import { Routes, Route } from 'react-router-dom'
// import ContactUs from "./Components/ContactUs";


function App() {
  return (
    <div>
      {/* <Routes> */}
      {/* <Route path="/" element={<HomePage />} /> */}
      {/* <Route path="contactus" element={<ContactUs />} /> */}
      {/* </Routes> */}
      {/* <ContactUs /> */}
      {/* <Navigation /> */}
      {/* <WelcomeMessage /> */}
      {/* <Home /> */}
      <HomePage />
      {/* <ArtWork /> */}
      {/* <HomePage /> */}
      {/* <ArtList /> */}
      {/* <ArtList name="Artwork 2" price="6000" image="./assets/Art2.jpg" /> */}
      <Footer />
    </div>
  );
}

export default App;