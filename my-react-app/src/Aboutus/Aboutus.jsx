import React from 'react'
import './Aboutus.css'
import logo   from '../constants/logo.png'
import spark from '../constants/spark.mp4'

const Aboutus = () => {
  return (
    <div id='aboutus' className='aboutus_container'>
       <div className="aboutus_background">
            <video className='aboutus_background_video'autoPlay muted loop >
                <source src={spark} type='video/mp4'/>
            </video>
         </div>
      {/* <img src={bgimage} alt="aboutus background" /> */}
        <h1>ABOUT US</h1>
        <hr className='customline_aboutus'/>
        <div className="aboutus_1row">
          <div className="aboutus_1col">
            <p>Nestled in the heart of nature, Sylvan Horizon 
              Restaurant offers a unique dining experience where culinary
              excellence meets the serenity of the great outdoors. Specializing in
              both Indian and Chinese cuisine, we take pride in serving fresh,
              locally sourced ingredients crafted into delicious dishes
              that reflect our passion for food.</p>
          </div>
          <div className="aboutus_2col">
          <img src={logo} alt="about us center image" />
          </div>
          <div className="aboutus_3col">
            <p>Our restaurant is surrounded by breathtaking natural beauty, providing
              the perfect backdrop for a relaxing meal with friends and family. 
              Whether you're here for an intimate dinner, a family
              gathering, or a special celebration, our friendly
              staff is dedicated to making
              your experience unforgettable.</p>
          </div>
        </div>
        {/* <div className="aboutus_2row">
          <p>At Sylvan Horizon, we believe that great food brings people together, 
              and we are committed to delivering an exceptional dining 
              experience every time you visit.</p>
        </div> */}
    </div>
  )
}

export default Aboutus