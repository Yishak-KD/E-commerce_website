import React from 'react';
// import Navigation from './Navigation';
import { StyleSheet, css } from 'aphrodite';

function WelcomeMessage() {
  return (
    <>
        <div className={css(style.message)}>
            {/* <Navigation /> */}
            <h1 className={css(style.header)}>Welcome to Sarah's World of Art</h1>
            <div className={css(style.paragraph)}>
                <p>Hello and welcome to Sarah's World of Art, the place where creativity meets inspiration. Our website is dedicated to showcasing the artwork of the talented artist, Sarah.</p>
                <p>Sarah's unique artistic style and vision are reflected in every piece she creates. Her passion for art is evident in the intricate details and vibrant colors of her paintings, drawings, and sculptures.</p>
                <p>We invite you to explore Sarah's world of art and be captivated by her creativity. From the breathtaking landscapes to the expressive portraits, each piece tells a unique story and leaves a lasting impression.</p>
            </div>
        </div>
    </>
  )
}

const style = StyleSheet.create({
    header: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        fontSize: '3rem',
    },
    paragraph: {
        padding: '0px 110px',
        color: 'black',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 20,
        lineHeight: '1.5em',
    },
    message: {
        paddingTop: '20px',
        padding: '-50px 10px',
        backgroundColor: '#f8f8ff',
        marginTop: '-126px',
        paddingBottom: '20px'
    }
})

export default WelcomeMessage;