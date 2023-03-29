import React, { useState } from "react";
import {} from '../../'
import Image1 from "../../assets/Item1.jpg";
import Image2 from "../../assets/Item2.jpg";
import Image3 from "../../assets/Item3.jpg";
import Image4 from "../../assets/Item4.jpg";
import { StyleSheet, css } from "aphrodite";
import ArtHeading from "../../Components/ArtHeading";
import NavMenu from "../../Components/NavMenu";
import ListButton from "../../Components/ListButton";
import sarahLogo from "../../assets/bin.png";
import backgroundImage from "../../assets/wallB.jpg";
import Footer from "../../Components/Footer";

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
    <div className={css(styles.pageContainer)}>
      {showMenu ? (
        <NavMenu handleMenuClose={handleMenuClose} />
      ) : (
        <div className={css(styles.body)}>
          <img className={css(styles.sLogo)} src={sarahLogo} alt="" />
          <ListButton handleMenuOpen={handleMenuOpen} />
          <ArtHeading />
          <div className={css(styles.container)}>
            {artsWorks.map((item, index) => (
              <div key={item.id}>
                <img
                  src={item.imagePath}
                  alt=""
                  height="300px"
                  width="300px"
                  className={css(styles.image)}
                />
                <div className={css(styles.itemList)}>
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
      <div className={css(styles.footerContainer)}>
        <Footer />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: 'transparent',
    position: 'relative',
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    backgroundImage: `url(${backgroundImage})`, 
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    paddingBottom: '50px',
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: "50px",
    padding: '20px 110px',
    backgroundColor: 'beige'
  },
  footerContainer: {
    position: 'absolute',
    bottom: -1230,
    left: 0,
    width: '100%'
  },
  image: {
    maxWidth: "100%",
    // height: 'auto'
  },
  itemList: {
    marginBottom: '50px'
  },
  sLogo: {
    padding: '17px 17px',
    margin: '-40px 0 0 -700px',
    height: '500px',
    width: '500px',
  }
});

export default ArtList;
