import React,{useState,useEffect} from 'react'
// import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Home.css';
import logo from '../constants/logo.png';
import homepage from '../constants/homepage.avif'
import menu2 from '../constants/menu2.mp4';

const Home = () => {
  const [toggleMenu, setToggleMenu]= useState (false)
  const [isScrolled, setIsScrolled] = useState (false)
  useEffect (() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY ;
      if (scrollTop>50){
        setIsScrolled(true);
      }else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener ("scroll", handleScroll);
    };
  },[]);
  return (
    <div id='home'className="home_page">
      <div className="home_background">
        <img src={homepage} alt="" />
        {/* <video className='background_video'autoPlay loop muted>
         <source src={menu2} type="video/mp4" />
       </video>  */}
        </div>
        <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>

      {/* <div className="navbar"> */}
      <div className="navbar_logo">
     <img src={logo} alt="app logo" />
      </div>
      <ul className='navbar_link'>

      <AnchorLink href="#home">Home</AnchorLink>
      <AnchorLink href="#aboutus">AboutUs</AnchorLink>
      <AnchorLink href="#menu">Menu</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <AnchorLink href="#explore">Explore</AnchorLink>
        
         {/* <li><a href="/">Home</a></li> 
          <li><a href="#about">About Us</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/explore">Explore</a></li> */}
        </ul>
        <a href=""></a>
      
      <div className="navbar_smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>
         
      </div>
      {toggleMenu &&(
      <div className="navbar_smallscreen_overlay">
      <MdOutlineRestaurantMenu fontSize={27} className='smallscreen_overlay_close' onClick={()=> setToggleMenu(false)}/>
      {/* <ul className='navbar_smallscreen'>
              <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/about" onClick={() => setToggleMenu(false)}>About Us</a></li>
              <li><a href="/menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="/contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li><a href="/booktable" onClick={() => setToggleMenu(false)}>Book Table</a></li>
            </ul> */}

            <ul className='navbar_smallscreen'>
              <AnchorLink href='#home' onClick={() => setToggleMenu(false)}>Home</AnchorLink>
              <AnchorLink href='#aboutus' onClick={() => setToggleMenu(false)}>AboutUs</AnchorLink>
              <AnchorLink href='#menu' onClick={() => setToggleMenu(false)}>Menu</AnchorLink>
              <AnchorLink href='#contact' onClick={() => setToggleMenu(false)}>Contact</AnchorLink>
              <AnchorLink href='#explore' onClick={() => setToggleMenu(false)}>Explore</AnchorLink>
            </ul>
      </div>
      )}

      
     </div>
     <div className="main_page">
      
       <div className="introduction_homepage">
         <h1>"Dining with a view,<br /> where every bite  tells a story."</h1>
       </div>
     </div>
     <div className="today_special">
      <h2>TODAY'S SPECIAL</h2>
      <hr className='custom-line' />
      <h4>Chicken Biryani</h4>
      <h4>Butter Chicken</h4>
     </div>
     <div className="homepage_welcome">
      <h2>Welcome To Sylvan Horizon Restaurant</h2>
     </div>
    </div>
  )
}

export default Home;
 