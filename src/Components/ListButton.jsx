import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/List button.png';


function ListButton({ handleMenuOpen }) {
  return (
    <div>
        <button className={css(style.ListButton)} onClick={handleMenuOpen}>
            <img src={logo} alt="" height="15px" width="22px"/>
        </button>
    </div>
  )
}

const style = StyleSheet.create({
    ListButton: {
        padding: '0px',
        margin: '-350px 150px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        float: 'right',
  }
})

export default ListButton;