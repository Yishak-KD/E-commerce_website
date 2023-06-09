import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import NavMenu from "../../Components/NavMenu";
import ListButton from "../../Components/ListButton";
import sarahLogo from '../../assets/bin.png';
import backgroundImage from '../../assets/wallD.jpg'
import Footer from "../../Components/Footer";

function ContactUs() {
  const [contactState, SetContactState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuOpen = () => {
    setShowMenu(true)
  }

  const handleMenuClose = () => {
    setShowMenu(false)
  }

  const handleContactState = (event) => {
    const value = event.target.value;
    SetContactState({
      ...contactState,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !contactState.name ||
      !contactState.email ||
      !contactState.phone ||
      !contactState.message
    ) {
      setError("Please fill in all required fields.");
    } else {
      setError(null);
      console.log(contactState);
      // fetch('/',{
      //   method:'post',
      //   headers:{
      //     'content-type':"application/json"
      //   },
      //   body:contactState
      // })
    }
  };
  return (
    <div className={css(styles.container)}>
      {showMenu ? (
        <NavMenu handleMenuClose={handleMenuClose} />
      ) : (
        <div>
          <img className={css(styles.sLogo)} src={sarahLogo} alt="" />
          <ListButton handleMenuOpen={handleMenuOpen} />
          <div className={css(styles.body)}>
            <h2>CONTACT US HERE AT SARAH'S ART GALLERY</h2>
            <form className={css(styles.form)} onSubmit={handleSubmit}>
              <label className={css(styles.label)}>Name*</label>
              <input
                type="name"
                name="name"
                value={contactState.name}
                onChange={handleContactState}
                className={css(styles.input)}
              />
              <label className={css(styles.label)}>Email*</label>
              <input
                type="email"
                name="email"
                value={contactState.email}
                onChange={handleContactState}
                className={css(styles.input)}
              />
              <label className={css(styles.label)}>Phone*</label>
              <input
                type="number"
                name="phone"
                value={contactState.phone}
                onChange={handleContactState}
                className={css(styles.input)}
              />
              <label className={css(styles.label)}>Message*</label>
              <textarea
                name="message"
                cols={10}
                rows={10}
                value={contactState.message}
                onChange={handleContactState}
                className={css(styles.textarea)}
              ></textarea>
              <br />
              {error && <p className={css(styles.error)}>{error}</p>}
              <button type="submit" className={css(styles.button)}>
                SEND
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

const styles = StyleSheet.create({
  form: {
    display: "grid",
    gridTemplateColumns: '30% 70%',
    gap: '20px',
    width: "55%",
    // margin: "0 6%",
    padding: "30px",
    borderRadius: "5px",
    backgroundColor: 'transparent'
  },
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: 'beige',
    position: 'relative',
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    backgroundImage: `url(${backgroundImage})`, 
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',

  },
  label: {
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    margin: '0 50px'
  },
  body: {
    backgroundColor: 'beige',
    marginTop: '-134px',
    paddingTop: '20px'
  },
  input: {
    backgroundColor: 'transparent',
    padding: "10px",
    border: "1px solid black",
    // marginBottom: 10,
    boxSizing: "border-box",
    fontSize: '18px'
  },
  textarea: {
    border: "1px solid black",
    height: 200,
    resize: "vertical",
    marginBottom: 10,
    boxSizing: "border-box",
    textAlign:'left',
    fontSize: '18px',
    backgroundColor: 'transparent'
  },
  button: {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    gridColumnStart: "2",
    justifySelf: "start",
    alignSelf: "center",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#0077cc",
    },
  },
  error: {
    color: "red",
    marginLeft: '-300px'
  },
  sLogo: {
        padding: '17px 17px',
        margin: '-40px 0 0 -700px',
        height: '500px',
        width: '500px',
    },
});

export default ContactUs;