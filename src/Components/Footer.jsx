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
        backgroundColor: '#f7f7f7', 
        padding: '20px',
        position: 'absolute', 
        textAlign: 'center',
        bottom: '0',
        left: 0,
        right: 0,
        margin: 'auto'
    },
    para: {
        margin: '0'
    }
})

export default Footer