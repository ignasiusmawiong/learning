// import React,{useState} from 'react'
// import { GiHamburgerMenu } from 'react-icons/gi';
// import {MdOutlineRestaurantMenu} from 'react-icons/md';
// import logo from './constants/logo.png';


// import './Navbar.css';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu]= useState (false)
//   return (
//     <div className='navbar'>
//       <div className="navbar_logo">
//      <img src={logo} alt="app logo" />
//       </div>
//       <ul className='navbar_link'>
//         <li><a href="home">Home</a></li>
//         <li><a href="about Us">About Us</a></li>
//         <li><a href="menu">Menu</a></li>
//         <li><a href="contact">Contact</a></li>
//         <li><a href="explore">Explore</a></li>
//       </ul>
//       <div className="navbar_login">
//         <a href="login">Login</a>
//       </div>
//       <div className="navbar_smallscreen">
//         <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>
         
//       </div>
//       {toggleMenu &&(
//       <div className="navbar_smallscreen_overlay">
//       <MdOutlineRestaurantMenu fontSize={27} className='smallscreen_overlay_close' onClick={()=> setToggleMenu(false)}/>
//      <ul className='navbar_smallscreen'>
//         <li><a href="home">Home</a></li>
//         <li><a href="about Us">About Us</a></li>
//         <li><a href="menu">Menu</a></li>
//         <li><a href="contact">Contact</a></li>
//         <li><a href="booktable">Book Table</a></li>
//       </ul>
//       </div>
//       )}

      
//     </div>
//   )
// }

// export default Navbar