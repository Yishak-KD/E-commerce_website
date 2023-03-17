import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import logo from '../assets/List button.png';
import CloseButton from '../assets/close.png';
import sarahLogo from '../assets/SarahL.jpg';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)
    
    const handleMenuOpen = () => {
        setShowMenu(true)
    }
    
    const handleMenuClose = () => {
        setShowMenu(false)
    }


  return (
    <div>
    {showMenu ? (
        <nav className={css(style.menu)}>
            <button className={css(style.buttonClose)} onClick={handleMenuClose}>
            <img src={CloseButton} alt="" height="25px" width="25px"/>
        </button>
          <ul className={css(style.ulItems)}>
            <li className={css(style.listItem)}>Home</li>
            <li className={css(style.listItem)}>Shop</li>
            <li className={css(style.listItem)}>About</li>
            <li className={css(style.listItem)}>Contact Us</li>
          </ul>
        </nav>
      ) : (
        <div>
            <img className={css(style.sLogo)} src={sarahLogo} alt="" />
            <button className={css(style.ListButton)} onClick={handleMenuOpen}>
            <img src={logo} alt="" height="15px" width="22px"/>
            </button>
        </div>
      )} 
    </div>
  )
}

const style = StyleSheet.create({
    menu: {
        backgroundColor:'hsla(120, 100%, 25%, 0.3)',
        height: '100vh'
    },
    listItem: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
},
    ulItems: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'block'
    },
    ListButton: {
        padding: '0px',
        margin: '110px 120px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        float: 'right',
  },
    CloseButton: {
        display: 'flex',
        padding: '10px 20px',
        margin: '20px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        top: '10px',
        right: '10px',
        transform: 'translateY(-50%)',
        position: 'fixed'
    },
    sLogo: {
        padding: '20px 20px',
        margin: '70px 40px'
    }

  
})

export default Navigation