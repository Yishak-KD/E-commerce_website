import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function ArtHeading() {
  return (
    <div className={css(styles.body)}>
        <h2 className={css(styles.header)}>Sarah's Drawings Sale: Get Beautiful Artworks at Discounted Prices</h2>
        <div className={css(styles.paragraph)}>
          <p>Welcome to our Sarah's Drawings Sale, where you can find amazing artworks by the talented artist Sarah at discounted prices! We are excited to offer you four beautiful items that you can purchase online and add to your art collection.</p>
          <p>Whether you are a fan of Sarah's realistic portraits or her whimsical illustrations, we have something for everyone. Each piece is hand-drawn and unique, and they make great gifts for yourself or your loved ones.</p>
          <p>Don't miss out on this opportunity to own a piece of Sarah's artwork at a fraction of the original price. Hurry up and make your purchase before the sale ends!</p>
        </div>
    </div>
  )
}

const styles = StyleSheet.create({
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
    body: {
      padding: '-50px 30px',
      backgroundColor: '#f8f8ff',
      marginTop: '-143px',
      paddingTop: '25px',
      paddingBottom: '7px'
    }
})

export default ArtHeading