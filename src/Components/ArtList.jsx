import React, { useState } from "react";
import Image1 from "../assets/Item1.jpg";
import Image2 from "../assets/Item2.jpg";
import Image3 from "../assets/Item3.jpg";
import Image4 from "../assets/Item4.jpg";
import { StyleSheet, css } from "aphrodite";
import ArtHeading from "./ArtHeading";
import NavMenu from "./NavMenu";
import ListButton from "./ListButton";
import sarahLogo from "../assets/bin.png";
import backgroundImage from "../assets/wallD.jpg";
import Footer from "./Footer";

function ArtList() {
  const [showMenu, setShowMenu] = useState(false);
  const artsWorks = [
    { id: 1, name: "ArtWork 1", price: 5000, imagePath: Image1 },
    { id: 2, name: "ArtWork 2", price: 6000, imagePath: Image2 },
    { id: 3, name: "ArtWork 3", price: 4500, imagePath: Image3 },
    { id: 4, name: "ArtWork 4", price: 6500, imagePath: Image4 },
  ];

  const handleClick = () => {
    alert("Your items have been added to your cart.");
  };

  const handleMenuOpen = () => {
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  return (
    <div>
      {showMenu ? (
        <NavMenu handleMenuClose={handleMenuClose} />
      ) : (
        <div className={css(styles.body)}>
          <img className={css(styles.sLogo)} src={sarahLogo} alt="" />
          <ListButton handleMenuOpen={handleMenuOpen} />
          <ArtHeading />
          <div className={css(styles.container)}>
            {artsWorks.map((item, index) => (
              <div>
                <img
                  src={item.imagePath}
                  alt=""
                  height="300px"
                  width="300px"
                  className={css(styles.image)}
                />
                <div>
                  <h1>{item.name}</h1>
                  <p>Price: {item.price}ETB</p>
                  <button className={css(styles.button)} onClick={handleClick}>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

const styles = StyleSheet.create({
  button: {
    // marginLeft: '55px'
  },
  body: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: 'transparent',
    position: 'relative',
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    backgroundImage: `url(${backgroundImage})`, 
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "50px",
    // backgroundColor: "#FFE5B4",
  },
  image: {
    maxWidth: "100%",
    // height: 'auto'
  },
  sLogo: {
    padding: '50px 50px',
    margin: '0px -100px',
    backgroundColor: 'transparent',
    height: '500px',
    width: '500px',
  }
});

export default ArtList;
