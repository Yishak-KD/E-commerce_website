import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Art1 from '../assets/Art1.jpg';
import Art2 from '../assets/Art2.jpg';
import Art3 from '../assets/Art3.jpg';


function ArtWork() {
    const Items = [
        {title: "Art Work 1", image: Art1, paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolor numquam sapiente ut exercitationem doloribus repudiandae asperiores, dolorum quia quo voluptas? At in, nemo atque ipsam laborum cum eum."},
        {title: "Art Work 2", image: Art2, paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolor numquam sapiente ut exercitationem doloribus repudiandae asperiores, dolorum quia quo voluptas? At in, nemo atque ipsam laborum cum eum."},
        {title: "Art Work 3", image: Art3, paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolor numquam sapiente ut exercitationem doloribus repudiandae asperiores, dolorum quia quo voluptas? At in, nemo atque ipsam laborum cum eum."},
    ]
  return (
    <div>
        <h1 className={css(style.headerTitle)}>CURRENT WORKS</h1>
        <div className={css(style.artGrid)}>
                {Items.map((item, index) => (
                    <div className={css(style.Arts)}>
                        <img src={item.image} alt="" height='320px' width='320px'/>
                        <h1 className={css(style.header)}>{item.title}</h1>
                        <p>{item.paragraph}</p>
                    </div>
                ))}
            </div>

    </div>
  )
}

const style = StyleSheet.create({
    '@font-face': {
        fontFamily: 'Cinzel',
        src: 'url(../../public/fonts/Cinzel-Regular.ttf)',
        fontStyle: 'normal',
        fontWeight: '400',
        fontDisplay: 'swap',
    },
    artGrid: {
        backgroundColor: '#f8f8ff',
        display: 'flex',
        justifyContent: 'space-between',
        // margin: '35px 35px'
        padding: '0px 60px'
    },
    Arts: {
        // backgroundColor: 'red',
        padding: '50px 50px'
    },
    header: {
        textAlign: 'center'
    },
    headerTitle: {
        backgroundColor: '#f8f8ff',
        margin: 0,
        paddingLeft: '110px',
        fontSize: '40px',
        fontFamily: 'Cinzel, sans-serif',
    }
})

export default ArtWork;