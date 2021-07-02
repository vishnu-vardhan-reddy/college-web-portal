import React from 'react'
import './Hostel.css'
import hostelBg from './hostel_main.jpg'

function Hostel() {
  return (
    <div className='hostel'>
      <div className='hostelContainer'>
        <h1>Hostels</h1>
        <img src={hostelBg} alt={''} />
      </div>
    </div>
  )
}

export default Hostel
