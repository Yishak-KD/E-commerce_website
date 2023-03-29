import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import CloseButton from '../assets/close.png';
import { Link } from 'react-router-dom'


function NavMenu({ handleMenuClose }) {
  return (
    <div className={css(style.container)}>
        <nav className={css(style.menu)}>
              <button className={css(style.buttonClose)} onClick={handleMenuClose}>
              <img src={CloseButton} alt="" height="25px" width="25px"/>
          </button>
            <ul className={css(style.ulItems)}>
                <Link to='/' className={css(style.listItem)}>HOME</Link>
                <Link to='/shop' className={css(style.listItem)}>SHOP</Link>
                <Link to="/about" className={css(style.listItem)}>ABOUT</Link>
                <Link to="/contactus" className={css(style.listItem)}>CONTACT US</Link>
            </ul>
          </nav>
    </div>
  )
}

const style = StyleSheet.create({
    container: {
        minHeight: '100vh',
        backgroundColor: '#363945',
        marginTop: '-30px'
    },
    menu: {
        backgroundColor:'transparent',
        height: 'auto',
        color: 'white'
    },
    listItem: {
        margin: '30px 0',
        padding: '10px',
        fontSize: '50px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: "white",
},
    ulItems: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'block',
        paddingTop: '10px'
    },
    buttonClose: {
        display: 'flex',
        margin: '50px 1200px',
        padding: '10px 10px',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        position: 'absolute',
        color: 'white',
        backgroundColor: 'white'
    },
})

export default NavMenu;