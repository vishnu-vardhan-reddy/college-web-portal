import React from 'react'
import './Achievements.css'
import achievements from './achievements1.jpg'
import ShowMoreText from 'react-show-more-text'

function Acheivements() {
  return (
    <div className='achievements'>
      <h2>Achievements</h2>
      <div className='achievementsContainer'>
        <div className='achievementsContainer__content'>
          {/* <div className="achievementsContainer__contentImage"> */}

          {/* <div class="overlay">
              <div class="overlay__text">achievements 1</div>
            </div>
          </div> */}
          {/* <ShowMoreText
            lines={5}
            more='Show more'
            less='Show less'
            className='content-css'
            anchorClass='my-anchor-css-class'
            expanded={false}
            width={280}
          > */}
          <p>
            One of the most sought after courses amongst engineering students,
            CompuOne of the most sought after courses amongst engineering
            students, Computer Science Engineering (CSE) is an academic
            programme which integrates the field of Computer Engineering and
            Computer Science. The programme, which emphasises the basics of
            computer programming and networking, comprises a plethora of topics.
            The said topics are related to computation, algorithms, programming
            languages, program design, ter Science Engineering (CSE) is an
            academic programme which integrates the field of Computer
            Engineering and Computer Science. The programme, which emphasises
            the basics of computer programming and networking, comprises a
            plethora of tOne of the most sought after courses amongst
            engineering students, Computer Science Engineering (CSE) is an
            academic programme which integrates the field of Computer
            Engineering and Computer Science. The programme, which emphasises
            the basics of computer programming and networking, comprises a
            plethora of topOne of the most sought after courses amongst
            engineering students, Computer Science Engineering (CSE) is an
            academic programme which integrates the field of Computer
            Engineering and Computer Science. The programme, which emphasises
            the basics of computer programming and networking, comprises a
            plethora of topics.{' '}
          </p>
          {/* </ShowMoreText> */}
          <img src={achievements} alt='' />
        </div>
        <div className='achievementsContainer__content'>
          {/* <div className="achievementsContainer__contentImage"> */}

          {/* <div class="overlay">
              <div class="overlay__text">achievements 1</div>
            </div>
          </div> */}
          <p>
            One of the most sought after courses amongst engineering students,
            CompuOne of the most sought after courses amongst engineering
            students, Computer Science Engineering (CSE) is an academic
            programme which integrates the field of Computer Engineering and
            Computer Science. The programme, which emphasises the basics of
            computer programming and networking, comprises a plethora of topics.
            The said topics are related to computation, algorithms, programming
            languages, program design, ter Science Engineering (CSE) is an
            academic programme which integrates the field of Computer
            Engineering and Computer Science. The programme, which emphasises
            the basics of computer programming and networking, comprises a
            plethora of tOne of the most sought after courses amongst
            engineering students, Computer Science Engineering (CSE) is an
            academic programme which integrates the field of Computer
            Engineering and Computer Science. The programme, which emphasises
            the basics of computer programming and networking, comprises a
            plethora of topOne of the most sought after courses amongst
            engineering students, Computer Science Engineering (CSE) is an
            academic programme which integrates the field of Computer
            Engineering and Computer Science. The programme, which emphasises
            the basics of computer programming and networking, comprises a
            plethora of topics.{' '}
          </p>
          <img src={achievements} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Acheivements
