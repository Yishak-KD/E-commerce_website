import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactUs/ContactUs';
import ArtList from './pages/Shop/ArtList';
import About from './pages/About/About';
import HomePage from './pages/Home/HomePage';
// import Images from './Components/Images';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route path='/shop' Component={ArtList} />
        <Route path='/about' Component={About} />
        <Route path='/contactus' Component={ContactPage} />
      </Routes>
    </div>
  )
}

export default App;












// import React, { useState } from 'react';
// import { StyleSheet, css } from 'aphrodite';
// // import logo from '../assets/List button.png';
// import sarahLogo from './assets/bin.png';
// import WelcomeMessage from './Components/WelcomeMessage';
// import backgroundImage from './assets/wallD.jpg';
// import ArtWork from './Components/ArtWork';
// import NavMenu from './Components/NavMenu';
// import ListButton from './Components/ListButton';
// import { Routes, Route } from 'react-router-dom'
// import ContactPage from './Components/ContactUs';
// import ArtList from './Components/ArtList';
// import About from './Components/About';
// import HomePage from './Components/HomePage';


// function App() {
//   const [showMenu, setShowMenu] = useState(false)

//   const handleMenuOpen = () => {
//     setShowMenu(true)
//   }

//   const handleMenuClose = () => {
//     setShowMenu(false)
//   }

//   return (
//     <div className={css(style.homePage)}>
//       {showMenu ? (
//         <NavMenu handleMenuClose={handleMenuClose} />
//       ) : (
//         <div>
//           <Routes>
//             <Route exact path='/' Component={HomePage} />
//             <Route path='/shop' Component={ArtList} />
//             <Route path='/about' Component={About} />
//             <Route path='/contactus' Component={ContactPage} />
//           </Routes>
//           <img className={css(style.sLogo)} src={sarahLogo} alt="" />
//           <ListButton handleMenuOpen={handleMenuOpen} />
//           <WelcomeMessage />
//           <ArtWork />
//         </div>
//       )}
//     </div>
//   )
// }

// const style = StyleSheet.create({
//   sLogo: {
//     padding: '5px 5px',
//     margin: '-10px 30px',
//     backgroundColor: 'transparent',
//     height: '500px',
//     width: '500px',
//   },
//   homePage: {
//     position: 'relative',
//     width: '100%',
//     height: '400px',
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: '100% 100%',
//     backgroundColor: 'beige'
//   }
// })

// export default App;