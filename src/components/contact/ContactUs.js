import React, { useState } from 'react'
import './ContactUs.css'
import location from './locationImg.jpg'
import MyLocationIcon from '@material-ui/icons/MyLocation'
import PhoneIcon from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GoogleMapReact from 'google-map-react'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FaqAccordion from './FaqAccordion'

const AnyReactComponent = ({ text }) => (
  <div style={{ color: 'orange', fontSize: '3rem' }}>{<LocationOnIcon />}</div>
)

function ContactUs() {
  // const [subject, setSubject] = useState('')
  const [name, setName] = useState('')
  const [emailBody, setEmailBody] = useState('')
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }

  const sendEmail = (e) => {
    e.preventDefault()
    const email = 'yvu@gmail.com'
    const subject = 'hi ' + name
    window.open(
      'mailto:' + email + '?subject=' + subject + '&body=' + emailBody
    )
  }

  return (
    <div className='contactUs'>
      <div className='contactUs__container'>
        {/* <img src={location} alt="" className="contactUs__map" /> */}
        {/* <div className="contactUs__map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyC7FrXyd5iT7KS2Fv8xW7w3NFgvxP9BOZk",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={14.7592} lng={78.5572} text="My Marker" />
          </GoogleMapReact>
        </div> */}
        <div className='contactUs__containerCard'>
          <div className='contactUs__containerCardLeft'>
            <div className='contactUs__containerCardLeftTop'>
              <h2>Contact Info</h2>
              <div className='contactUs__row'>
                <MyLocationIcon />
                <p>YMR Colony, Proddatur, Andhra Pradesh 516360</p>
              </div>
              <div className='contactUs__row'>
                <PhoneIcon />
                <p>097032 16827</p>
              </div>
              <div className='contactUs__row'>
                <MailOutlineIcon />
                <p>vc@yogivemanauniversity.ac.in</p>
              </div>
            </div>
            <div className='contactUs__containerCardLeftBottom'>
              <h2>Get Social</h2>
              <div className='contactUs__socialRow'>
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <div className='contactUs__containerCardRight'>
            <h2>Leave a Query</h2>
            <form>
              <input
                type='text'
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* <input type='email' placeholder='email'  /> */}
              <textarea
                type='text'
                placeholder='message'
                rows='6'
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
              />
              <button type='submit' onClick={(e) => sendEmail(e)}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='faqContainer'>
        <h1>FAQ'S</h1>
        <FaqAccordion />
      </div>
    </div>
  )
}

export default ContactUs

// api key = AIzaSyC7FrXyd5iT7KS2Fv8xW7w3NFgvxP9BOZk
