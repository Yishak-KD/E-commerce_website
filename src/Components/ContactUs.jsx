import React, {useState} from 'react'

function ContactUs() {
  const [contactState, SetContactState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleContactState = event => {
    const value = event.target.value;
    SetContactState({
      ...contactState,
      [event.target.name]: value
    })
  }

  const handleSubmit = (event) => {
    // alert("Form submitted")
    event.preventDefault();
    console.log(contactState)
  }
  return (
    <div>
        <h2>CONTACT US HERE AT SARAH'S ART GALLERY</h2>
        <form onSubmit={handleSubmit}>
          <label>Name*
            <input type="name" name="name" value={contactState.name} onChange={handleContactState} />
          </label>
          <br />
          <label>Email*
            <input type="email" name="email" value={contactState.email} onChange={handleContactState} />
          </label>
          <br />
          <label>Phone*
            <input type="number" name="phone" value={contactState.phone} onChange={handleContactState} />
          </label>
          <br />
          <label>Message*
            <textarea name='message' cols={10} rows={10} value={contactState.message} onChange={handleContactState} ></textarea>
          </label>
          <br />
          <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactUs;