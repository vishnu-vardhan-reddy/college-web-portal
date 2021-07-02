import React, { useEffect } from 'react'
import './Department.css'
import About from './About'
import Faculty from './Faculty'
import Laboratory from './Laboratory'
import Acheivements from './Acheivements'
import { useHistory, useParams } from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill'
import SyllabusAccordion from './../utils/SyllabusAccordion'
import { departmentResponse } from './../utils/api'

function Department() {
  // const history = useHistory();
  // console.log(history);
  // useEffect(() => {
  //   const hash = history.location.hash;
  //   const el = hash && document.getElementById(hash.substr(1));
  //   if (el) {
  //     el.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [history.location.hash]);

  let { departmentId } = useParams()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await departmentResponse(departmentId)
        if (response) {
          console.log(response)
        }
      } catch (err) {
        console.log(err)
      }
    })()
  })

  useEffect(() => {
    smoothscroll.polyfill()
    window.__forceSmoothScrollPolyfill__ = true
  })

  return (
    <div className='department'>
      <h1>Computer Science & Engineering</h1>
      <div className='departmentContainer'>
        <div id='about-us'>
          <About />
        </div>
        <div id='faculty'>
          <Faculty />
        </div>
        <div id='syllabus'>
          <SyllabusAccordion />
        </div>
        <div id='laboratories'>
          <Laboratory />
        </div>
        <div id='achievements'>
          <Acheivements />
        </div>
      </div>
    </div>
  )
}

export default Department
