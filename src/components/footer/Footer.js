import React, { useState, useEffect } from 'react'
import './Footer.css'
import { Link, useHistory } from 'react-router-dom'
import collegeLogo from './collegeLogo.svg'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import axios from 'axios'
import CloudIcon from '@material-ui/icons/Cloud'

function Footer() {
  const [temp, setTemp] = useState('')
  const [humidity, setHumidity] = useState('')
  const [weather, setWeather] = useState('')
  const [date, setDate] = useState('')
  const history = useHistory();

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  useEffect(() => {
    let interval = setInterval(() => getTime(), 6000)
    return () => clearInterval(interval)
  }, [])

  const getTime = () => {
    const date = {
      dayName: days[new Date().getDay()],
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      day: new Date().toDateString().split(' ').slice(1).join(' '),
    }
    setDate(date)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios({
          method: 'GET',
          url: 'https://api.openweathermap.org/data/2.5/weather?id=1259312&units=metric&appid=8418bab274c40988fe689a5865d0dd2c',
        })
        if (data) {
          console.log(data)
          setTemp(data.data.main.temp)
          setHumidity(data.data.main.humidity)
          setWeather(data.data.weather[0].description)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='footer'>
      <div className='footer__top'>
        <div className='footer__topRow'>
          <p className='footer__topLine'>Academics</p>
          <small onClick={() => history.push('/academics/#classSchedule')}>Class Schedule</small>
          <small onClick={() => history.push('/academics/#examSchedule')}>Exam Schedule</small>
          <small onClick={() => history.push('/academics/#calender')}>Calenders and Time Tables</small>
        </div>

        <div className='footer__topRow'>
          <p className='footer__topLine'>Campus</p>
          <small onClick={() => history.push('/administrativeBlock')}>Administrative Block</small>
          <small onClick={() => history.push('/academicBlock')}>Academic Block</small>
          <small onClick={() => history.push('/hostels')}>Hostels</small>
          <small onClick={() => history.push('/library')}>Library</small>
        </div>

        <div className='footer__topRow'>
          <p className='footer__topLine'> Departments</p>
          <small onClick={() => history.push('/department/2')}>Computer Science</small>
          <small onClick={() => history.push('/department/1')}>Civil</small>
          <small onClick={() => history.push('/department/3')}>Electronics</small>
          <small onClick={() => history.push('/department/4')}>Electrical</small>
          <small onClick={() => history.push('/department/5')}>Metallurgy</small>
          <small onClick={() => history.push('/department/6')}>Mechanical</small>
        </div>

        <div className='footer__topRow'>
          <p className='footer__topLine'>About us</p>
          <a
              href='http://www.yogivemanauniversity.ac.in/'
              target='_blank'
              rel='noreferrer'
            >
              About University
            </a>
        
            <Link
              to='/about-college'
            >
              About College
            </Link>
    
            <a
              target='_blank'
              rel='noreferrer'
              href='http://www.yogivemanauniversity.ac.in/vc_prof.php'
            >
              Vice Chancellor profile
            </a>
      
            <a
              href='http://www.yogivemanauniversity.ac.in/colleges/rector.php'
              target='_blank'
              rel='noreferrer'
            >
              Registrar Profile
            </a>
    
            <Link
              to='/faculty-profile/principal'
            >
              principal Profile
            </Link>
        </div>

        <div className='footer__topRow'>
          <p className='footer__topLine'>
            <CloudIcon /> <span>Proddatur</span>
          </p>
          <small>
            {date.dayName} {date.time}, {date.day}
          </small>
          <small>
            <span>Temp: </span>{' '}
            <span style={{ color: '#e0e0de' }}> {temp}°C</span>
          </small>
          <small>
            Humidity: <span style={{ color: '#e0e0de' }}> {humidity}% </span>
          </small>
          <small>
            Weather:{'  '}
            <span style={{ color: '#e0e0de' }}> {weather}</span>
          </small>
        </div>
      </div>
      <div className='footer__middle'>
        <div className='footer__middleFirstRow'>
          <div className='footer__middleFirstRowLeft'>
            <p>YSR ENGINEERING COLLEGE OF YVU</p>
            <small>proddatur, kadapa, Andhra Pradesh 516360</small>
          </div>
          <Link to='/'>
            <img className='footer__middleLogo' src={collegeLogo} alt='' />
          </Link>
          <div className='footer__middleFirstRowRight'>
            <FacebookIcon />
            <YouTubeIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        {/* <div className="footer__middleSecondRow">
          <small>Australia</small>
          <small>Brazil</small>
          <small>Canada</small>
          <small>China</small>
          <small>France</small>
          <small>Germany</small>
          <small>Italy</small>
          <small>Japan</small>
          <small>Mexico</small>
          <small>NetherLands</small>
          <small>Singapore</small>
          <small>Spain</small>
          <small>United Arab Emirates</small>
          <small>United Kingdom</small>
          <small>United States</small>
        </div> */}
      </div>
      <div className='footer__bottom'>
        <div className='footer__bottomLinks'>
          <div className='footer__bottomLink '>
            <a href='#'>any Link here</a>
            <a href='#'>any link here</a>
            <a href='#'>any link here</a>
            <a href='#'>any link here</a>
          </div>
          <div className='footer__bottomText'>
            <p>
              Copyright © 2020 Ysr Engineering College of YVU. All Rights
              Reserved. Credits & Attribution
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
