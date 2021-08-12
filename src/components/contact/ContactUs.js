import React, { useState } from 'react';
import './ContactUs.css';
import location from './location.json';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GoogleMapReact from 'google-map-react';
import Lottie from 'react-lottie';
import FaqAccordion from './FaqAccordion';
import axios from '../../Axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const AnyReactComponent = ({ text }) => (
//   <div style={{ color: 'orange', fontSize: '3rem' }}>{<LocationOnIcon />}</div>
// );

function ContactUs() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('');
  const [emailBody, setEmailBody] = useState('');
  // const defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33,
  //   },
  //   zoom: 11,
  // };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: location,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const email = 'yvu@gmail.com';
    const subject = 'hi ' + name;
    window.open(
      'mailto:' + email + '?subject=' + subject + '&body=' + emailBody
    );
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      query: emailBody,
    }
    try{
      const result = await axios({
        method: 'POST',
        url: '/feedback',
        data: data
      })
      if(result){
        toast.dark('query submitted')
      }
    } catch(error){
      
      toast.dark('error submitting the query, try again')
    }
  }

  return (
    <div className='contactUs'>
      <div className='contactUs__container'>
        {/* <img src={location} alt='' className='contactUs__map' /> */}
        <a
          href='https://www.google.com/maps?q=ysr+engineering+college&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiH75C5hp3yAhXvIbcAHUKVAv8Q_AUoAnoECAEQBA'
          target='_blank'
          rel='noreferrer'
        >
          <Lottie options={defaultOptions} height={200} width={200} />
        </a>
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
              <input
                type='text'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <input type='email' placeholder='email'  /> */}
              <textarea
                type='text'
                placeholder='message'
                rows='6'
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
              />
              <div className='contactUs__buttons'>
              <button type='submit' onClick={(e) => sendEmail(e)}>
                Email
              </button>
              <button type='submit' onClick={(e) => submitFeedback(e)}>
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='faqContainer'>
        <h1>FAQ'S</h1>
        <FaqAccordion />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
/>
    </div>
  );
}

export default ContactUs;

// api key = AIzaSyC7FrXyd5iT7KS2Fv8xW7w3NFgvxP9BOZk
