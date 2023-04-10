import React from 'react'
import { StyleSheet, css } from 'aphrodite';

function Footer() {
  return (
    <div>
        <footer className={css(style.footer)}>
            <p className={css(style.para)}>Copyright &copy; 2023</p>
        </footer>
    </div>
  )
}

const style = StyleSheet.create({
    footer: {
        backgroundColor: '#333333', 
        padding: '20px 0',
        textAlign: 'center',
        margin: 'auto',
        bottom: 0,
        width: '100%',
        // color: 'white',

    },
    para: {
        margin: '0'
    }
})

export default Footer