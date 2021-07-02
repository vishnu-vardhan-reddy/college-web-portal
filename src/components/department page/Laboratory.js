import React from 'react'
import './Laboratory.css'
import lab1 from './lab1.jpg'

function Laboratory() {
  return (
    <div className='laboratory'>
      <h2>Laboratories</h2>
      <div className='laboratoryContainer'>
        <div className='laboratoryContainer__content'>
          <div className='laboratoryContainer__contentImage'>
            <img src={lab1} alt='' />
            <div className='overlay'>
              <div className='overlay__text'>Laboratory 1</div>
            </div>
          </div>
          <p>
            One of the most sought after courses amongst engineering students,
            Computer Science Engineering (CSE) is an academic programme which
            integrates the field of Computer Engineering and Computer Science.
            The programme, which emphasises the basics of computer programming
            and networking, comprises a plethora of topics. The said topics are
            related to computation, algorithms, programming languages, program
            design,{' '}
          </p>
        </div>
        <div className='laboratoryContainer__content'>
          <div className='laboratoryContainer__contentImage'>
            <img src={lab1} alt='' />
            <div className='overlay'>
              <div className='overlay__text'>Laboratory 2</div>
            </div>
          </div>
          <p>
            One of the most sought after courses amongst engineering students,
            Computer Science Engineering (CSE) is an academic programme which
            integrates the field of Computer Engineering and Computer Science.
            The programme, which emphasises the basics of computer programming
            and networking, comprises a plethora of topics. The said topics are
            related to computation, algorithms, programming languages, program
            design,{' '}
          </p>
        </div>
        <div className='laboratoryContainer__content'>
          <div className='laboratoryContainer__contentImage'>
            <img src={lab1} />
            <div className='overlay'>
              <div className='overlay__text'>Laboratory 3</div>
            </div>
          </div>

          <p>
            One of the most sought after courses amongst engineering students,
            Computer Science Engineering (CSE) is an academic programme which
            integrates the field of Computer Engineering and Computer Science.
            The programme, which emphasises the basics of computer programming
            and networking, comprises a plethora of topics. The said topics are
            related to computation, algorithms, programming languages, program
            design,{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Laboratory
