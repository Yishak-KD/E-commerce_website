import React from 'react'
import Image1 from '../assets/Item1.jpg'
import Image2 from '../assets/Item2.jpg'
import Image3 from '../assets/Item3.jpg'
import Image4 from '../assets/Item4.jpg'
import { StyleSheet, css } from 'aphrodite'
import ArtHeading from './ArtHeading'


function ArtList() {
    const artsWorks = [
        {id: 1, name: "ArtWork 1", price: 5000, imagePath: Image1},
        {id: 2, name: "ArtWork 2", price: 6000, imagePath: Image2},
        {id: 3, name: "ArtWork 3", price: 4500, imagePath: Image3},
        {id: 3, name: "ArtWork 3", price: 4500, imagePath: Image4}
    ] 

    const handleClick = () => {
        alert("Your items have been added to your cart.")
    }

  return (
      <div>
          <ArtHeading />

      <div className={css(styles.container)}>
        {artsWorks.map((item, index) => (
            <div>
            <img src={item.imagePath} alt="" height="300px" width="300px" />
            <div>
                <h1>{item.name}</h1>
                <p>Price: {item.price}ETB</p>
                <button className={css(styles.button)} onClick={handleClick}>Add to cart</button>
            </div>
            </div>
        ))}
    </div>
</div>
  )
}

const styles = StyleSheet.create({
    button: {
        // marginLeft: '55px'
    },
    container: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '50px',
        backgroundColor: "#FFE5B4"
    }
})

export default ArtList;