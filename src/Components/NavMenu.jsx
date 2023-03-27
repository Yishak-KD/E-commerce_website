import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import CloseButton from '../assets/close.png';
import { Link } from 'react-router-dom'


function NavMenu({ handleMenuClose }) {
  return (
    <div>
        <nav className={css(style.menu)}>
              <button className={css(style.buttonClose)} onClick={handleMenuClose}>
              <img src={CloseButton} alt="" height="25px" width="25px"/>
          </button>
            <ul className={css(style.ulItems)}>
              {/* <li className={css(style.listItem)}> */}
                <Link to='/' className={css(style.listItem)}>HOME</Link>
              {/* </li> */}
              {/* <li className={css(style.listItem)}> */}
                <Link to='/shop' className={css(style.listItem)}>SHOP</Link>
              {/* </li> */}
              {/* <li className={css(style.listItem)}> */}
                <Link to="/about" className={css(style.listItem)}>ABOUT</Link>
              {/* </li> */}
              {/* <li className={css(style.listItem)}> */}
                <Link to="/contactus" className={css(style.listItem)}>CONTACT US</Link>
              {/* </li> */}
            </ul>
          </nav>
    </div>
  )
}

const style = StyleSheet.create({
    menu: {
        backgroundColor:'transparent',
        height: '100vh',
        color: 'white'
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
    buttonClose: {
        display: 'flex',
        padding: '40px 50px',
        // margin: '20px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        // top: '10px',
        // right: '10px',
        // transform: 'translateY(-50%)',
        position: 'fixed'
    },
})

export default NavMenu;