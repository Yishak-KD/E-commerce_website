import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Art1 from '../assets/Art1.jpg';
import Art2 from '../assets/Art2.jpg';
import Art3 from '../assets/Art3.jpg';


function ArtWork() {
  return (
    <div className={css(style.artGrid)}>
        <div className={css(style.Arts)}>
            <img src={Art1} alt="" height='300px' width='300px'/>
            <h1>Art Work 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolor numquam sapiente ut exercitationem doloribus repudiandae asperiores, dolorum quia quo voluptas? At in, nemo atque ipsam laborum cum eum.</p>
        </div>
        <div className={css(style.Arts)}>
            <img src={Art2} alt="" height='300px' width='300px'/>
            <h1>Art Work 2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolor numquam sapiente ut exercitationem doloribus repudiandae asperiores, dolorum quia quo voluptas? At in, nemo atque ipsam laborum cum eum.</p>
        </div>
        <div className={css(style.Arts)}>
            <img src={Art3} alt="" height='300px' width='300px'/>
            <h1>Art Work 3</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolor numquam sapiente ut exercitationem doloribus repudiandae asperiores, dolorum quia quo voluptas? At in, nemo atque ipsam laborum cum eum.</p>
        </div>
    </div>
  )
}

const style = StyleSheet.create({
    artGrid: {
        backgroundColor: 'beige',
        display: 'flex',
        justifyContent: 'space-between',
        // margin: '35px 35px'
    },
    Arts: {
        // backgroundColor: 'red',
        padding: '50px 50px'
    }
})

export default ArtWork