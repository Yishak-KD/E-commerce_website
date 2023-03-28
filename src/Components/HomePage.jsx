import React, {useState} from 'react';
import { StyleSheet, css} from 'aphrodite';
// import logo from '../assets/List button.png';
import sarahLogo from '../assets/bin.png';
import WelcomeMessage from './WelcomeMessage';
import backgroundImage from '../assets/wallD.jpg'
import ArtWork from './ArtWork';
import NavMenu from './NavMenu';
import ListButton from './ListButton';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import ContactPage from './ContactUs';
// import ArtList from "./ArtList";


function HomePage() {
    const [showMenu, setShowMenu] = useState(false)
    
    const handleMenuOpen = () => {
        setShowMenu(true)
    }
    
    const handleMenuClose = () => {
        setShowMenu(false)
    }

  return (
      <div className={css(style.homePage)}>
      {showMenu ? (
        <NavMenu handleMenuClose={handleMenuClose} />
        ) : (
          <div className={css(style.body)}>
              <img className={css(style.sLogo)} src={sarahLogo} alt="" />
              <ListButton handleMenuOpen={handleMenuOpen} />
              <WelcomeMessage />
              <ArtWork />
          </div>
        )} 
      </div>
  )
}

const style = StyleSheet.create({
    body: {
        // backgroundColor: 'green'
    },
    sLogo: {
        padding: '5px 5px',
        margin: '-10px 30px',
        backgroundColor: 'transparent',
        height: '500px',
        width: '500px',
    },
    homePage: {
        position: 'relative',
        width: '100%',
        height: '400px',
        backgroundImage: `url(${backgroundImage})`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundColor: 'beige'
    }  
})

export default HomePage;