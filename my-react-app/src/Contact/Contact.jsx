import React from 'react'
import './Contact.css'
import call from '../constants/call.png'
import location from '../constants/location.png'
import time from '../constants/time.png'

const Contact = () => {
  return (
    <div id='contact' className='contact_container'>
        <h1>CONTACT US</h1>
        <hr className='contact_custome_line'/>
        <div className="contact_body">
            <div className="contact_1col">
                <div className="contact_1row">
                    <div className="contact_1row_1col">
                        <img src={call} alt="phone icon" />
                        <h2>CALL US:</h2>
                    </div>
                    <span>+91 1212121214 / +91 1245478965</span>
                </div>

                <div className="contact_1row">
                    <div className="contact_1row_1col">
                        <img src={location} alt="location icon" />
                        <h2>LOCATION:</h2>
                    </div>
                    <span>Sajer Main road, Nongpoh Town, MEGHALAYA.</span>
                </div>

                <div className="contact_1row">
                    <div className="contact_1row_1col">
                        <img src={time} alt="time icon" />
                        <h2>OPENING HOUR:</h2>
                    </div>
                    <span>Mon - Thu : 9.00 AM- 6.30 PM , Fri - Sat : 9.00 AM - 8.00 PM 
                    Sun : Close</span>
                </div>

            </div>
          
            <div className="contact_3col">
                <div className="contact_inputbox">
                    <label>EMAIL ID:</label>
                    <input type="text" />
                </div>
                <div className="contact_inputbox">
                    <label>NAME:</label>
                    <input type="text" />
                </div>
                <div className="contact_inputbox">
                    <label>ADDRESS:</label>
                    <input type="text" />
                </div>
                <div className="contact_inputbox_message">
                    <h2>MESSAGE:</h2>
                    <textarea rows={5} cols={60} placeholder='Feel free to   message us.' />
                </div>
                <div className="button">
                <button className='contact_submit'>SUBMIT</button>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Contact