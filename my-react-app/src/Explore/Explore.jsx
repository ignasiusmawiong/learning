import React, { useState } from 'react';
import './Explore.css'
import images1 from '../constants/images1.jpg'
import images2 from '../constants/images2.jpg'
import images3 from '../constants/images3.jpg'
import images4 from '../constants/images4.jpg'
import images5 from '../constants/images5.jpg'
import images6 from '../constants/images6.jpg'
import images7 from '../constants/images7.jpg'

const images = [
  {
    src: images1,
    alt: 'Image 1',
  },
  {
    src: images2,
    alt: 'Image 2',
  },
  {
    src: images3,
    alt: 'Image 3',
  },
  {
    src: images4,
    alt: 'Image 4',
  },
  {
    src: images5,
    alt: 'Image 5',
  },
  {
    src: images6,
    alt: 'Image 6',
  },
  {
    src: images7,
    alt: 'Image 7',
  },
];

const Explore = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to close the full-screen image
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id='explore' >
<div className="explore_heading_text">
      <h1>EXPLORE</h1>
      <hr className='customline_explore'/>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(image.src)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Full-screen modal for large image display */}
      {selectedImage && (
        <div className="fullscreen-lightbox" onClick={closeImage}>
          <span className="close">&times;</span>
          <img className="fullscreen-image" src={selectedImage} alt="Selected" />
        </div>
      )}
      <div className="footer">
        <h2>Thank You for Visiting Us!</h2>
        <h4>We appreciate your interest in Sylvan Horizon Restaurant.
           We look forward to serving you with our delicious Chinese and
            Indian cuisine amidst nature. Hope to see you soon!</h4>
            <h6>© 2024 Sylvan Horizon Restaurant. All Rights Reserved.</h6>
      </div>
    </div>
  );
};
export default Explore