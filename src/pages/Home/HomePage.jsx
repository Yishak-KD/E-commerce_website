import React, {useState} from 'react';
import { StyleSheet, css} from 'aphrodite';
import sarahLogo from '../../assets/bin.png';
import WelcomeMessage from '../../Components/WelcomeMessage';
import backgroundImage from '../../assets/wallD.jpg'
import ArtWork from '../../Components/ArtWork';
import NavMenu from '../../Components/NavMenu';
import ListButton from '../../Components/ListButton';
import Footer from '../../Components/Footer';

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
        <Footer />
      </div>
  )
}

const style = StyleSheet.create({
    welcomeMessage: {
        marginTop: '-126px',
    },
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