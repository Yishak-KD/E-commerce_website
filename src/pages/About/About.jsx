import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import sarahImage from "../../assets/ABT.jpg";
import NavMenu from "../../Components/NavMenu";
import ListButton from "../../Components/ListButton";
import sarahLogo from "../../assets/bin.png";
import backgroundImage from "../../assets/wallC.jpg";
import Footer from '../../Components/Footer'

function About() {
  const [showMenu, setShowMenu] = useState(false);

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
          <div className={css(styles.imageContainer)}>
            <img className={css(styles.image)} src={sarahImage} alt="Sarah" />
          </div>
          <div className={css(styles.contentContainer)}>
            <h1 className={css(styles.heading)}>About Sarah</h1>
            <p className={css(styles.paragraph)}>
              Sarah is a talented artist based in Minnesota, USA. She has worked
              with a variety of companies in the area and is well-known for her
              stunning drawings. Sarah also creates beautiful designs on Canva,
              showcasing her versatility and creativity as an artist.
            </p>
            <p className={css(styles.paragraph)}>
              Sarah's work is inspired by nature and the world around her. She
              has a keen eye for detail and a passion for capturing the essence
              of her subjects in her art. Whether she's working on a
              commissioned piece or a personal project, Sarah always puts her
              heart and soul into every drawing she creates.
            </p>
            <p className={css(styles.paragraph)}>
              Sarah welcomes you to explore her gallery and hopes you find as
              much joy in her art as she does in creating it.
            </p>
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
  imageContainer: {
    display: 'inline-block',
    width: '30%',
    verticalAlign: 'top',
    marginTop: '70px',
  },
  image: {
    width: '100%',
  },
  contentContainer: {
    display: 'inline-block',
    width: '50%',
    paddingLeft: '20px',
    boxSizing: 'border-box',
  },
  footerContainer: {
    position: 'absolute',
    bottom: -400,
    left: 0,
    width: '100%'
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px",
    backgroundColor: "#f8f8f8",
  },
  body: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    width: "100%",
    height: "350px",
    objectFit: "cover",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    paddingBottom: "50px",
    backgroundColor: "#f8f8f8",
  },
  content: {
    flex: "1 1 auto",
    display: "flex",
  },
  sLogo: {
    padding: "17px 17px",
    margin: "-40px 0 0 -700px",
    height: "500px",
    width: "500px",
  },
});

export default About;