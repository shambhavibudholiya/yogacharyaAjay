import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SlideEffect.css';

import image1 from './1.jpg';
import image4 from './4.jpg';
import image5 from './5.JPG';
import image6 from './6.jpg';
import image7 from './7.JPG';
import image8 from './8.JPG';
import image9 from './9.jpg';
import image10 from './10.jpg';
import image11 from './11.jpg';
import image12 from './12.jpg';
import image13 from './13.jpg';
import image14 from './14.JPG';
import image15 from './15.JPG';
import image17 from './17.jpg';
import image18 from './18.jpg';
import image19 from './19.jpg';



const slideImages = [
  'image1',
  'image4',
  'image5',
  'image6',
  'image7',
  'image8',
  'image9',
  'image10',
  'image11',
  'image12',
  'image13',
  'image14',
  'image15',
  'image17',
  'image18',
  'image19'
];

const properties = {
  duration: 2000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
    return (     
        <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide ">
            <div style={{'backgroundImage': `url(${image1})`}}>
            </div>
          </div>
          <div className="each-slide">
      <div style={{'backgroundImage': `url(${image17})`}}>
      
      </div>
    </div>
    <div className="each-slide">
      <div style={{'backgroundImage': `url(${image18})`}}>
      
      </div>
    </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image4})`}}>
           
            </div>
          </div>
          <div className="each-slide">
      <div style={{'backgroundImage': `url(${image12})`}}>
      
      </div>
    </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image5})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image6})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image7})`}}>
           
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image8})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image9})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image10})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image11})`}}>
  
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image19})`}}>
           
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image13})`}}>
            
            </div>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image14})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image15})`}}>
            
            </div>
          </div>
        </Slide>
        </div>
    )
}


export default Slideshow;
