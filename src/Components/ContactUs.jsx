import React, {useState} from 'react'
import { StyleSheet, css } from 'aphrodite'


function ContactUs() {
  const [contactState, SetContactState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [error, setError] = useState(null)

  const handleContactState = event => {
    const value = event.target.value;
    SetContactState({
      ...contactState,
      [event.target.name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!contactState.name || !contactState.email || !contactState.phone || !contactState.message) {
      setError("Please fill in all required fields.")
    } else {
      setError(null);
      console.log(contactState)
    }
  }
  return (
    <div className={css(styles.container)}>
        <h2>CONTACT US HERE AT SARAH'S ART GALLERY</h2>
        <form onSubmit={handleSubmit}>
          <div className={css(styles.labelContainer)}>
          <label className={css(styles.label)}>Name*
            <input type="name" name="name" value={contactState.name} onChange={handleContactState} className={css(styles.input)} />
          </label>
          </div>
          <br />
          <div className={css(styles.labelContainer)}>
          <label className={css(styles.label)}>Email*
            <input type="email" name="email" value={contactState.email} onChange={handleContactState} className={css(styles.input)} />
          </label>
          </div>
          <br />
          <div className={css(styles.labelContainer)}>
          <label className={css(styles.label)}>Phone*
            <input type="number" name="phone" value={contactState.phone} onChange={handleContactState} className={css(styles.input)} />
          </label>
          </div>
          <br />
          <div className={css(styles.labelContainer)}>
          <label className={css(styles.label)}>Message*
            <textarea name='message' cols={10} rows={10} value={contactState.message} onChange={handleContactState} className={css(styles.textarea)}></textarea>
          </label>
          </div>
          {error && <p className={css(styles.error)}>{error}</p>}
          <button type='submit' className={css(styles.button)}>SEND</button>
        </form>
    </div>
  )
}

const styles = StyleSheet.create({
  labelContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  label: {
    float: 'left',
    display: 'flex',
    width: '21%',
    marginRight: '5%',
    lineHeight: '1.6em'
  },
  input: {
    padding: '10px 150px',
    // borderRadius: 5,
    border: '1px solid black',
    // width: '100%',
    marginBottom: 10,
    boxSizing: 'border-box',
    // flexGrow: 1
  },
  textarea: {
    padding: '10px 150px',
    // borderRadius: 5,
    border: '1px solid black',
    // width: '100%',
    height: 200,
    resize: 'vertical',
    marginBottom: 10,
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: 5,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#0077cc'
    }
  },
  error: {
    color: 'red'
  }
})

export default ContactUs;