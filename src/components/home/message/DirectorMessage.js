import React from 'react'
import './DirectorMessage.css'
import profile from './profile.svg'

function DirectorMessage() {
  return (
    <div className='directorMessage'>
      <div className='directorMessageContainer'>
        <h2>Message From The Director</h2>
        <div className='directorMessageContainer__bottom'>
          <img className='image' src={profile} alt='' />
          <div className='directorMessageContainer__message'>
            <p>
              Welcome to the portal of IIT Madras! We recently celebrated our
              Diamond Jubilee, but remain as young at heart as ever. As the#1
              ranked Institute in NIRF five years in a row, we remain steadfast
              in our commitment to excellence and growth in every facet – UG and
              PG degree programs, M.S. and PhD research programs, technology
              development for industry and national needs, startups,
              international partnerships, online education and outreach, and a
              vibrant campus life rich in cultural, sports and myriad other
              activities. Located on arguably the greenest and most beautiful
              campus in India, IIT Madras provides an unmatched environment for
              students to discover themselves, explore life, and learn from the
              excellent faculty and from each other. Throw in the nation’s first
              and largest IITM Research Park next door with an incredible deep
              technology startup ecosystem, excellent campus infrastructure,
              generous alumni support and involvement, and a fast-expanding
              engagement with the best of our peers globally, and you have an
              Institute that everyone wishes to be a student, employee, alumnus,
              or partner of. Welcome, once again, to IIT Madras! Vanakkam!!
            </p>
            <p className='director__name'> -Director Name</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DirectorMessage
