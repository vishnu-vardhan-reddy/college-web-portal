import React, { useEffect } from 'react';
import './Academics.css';
import ExamSchedule from './exam_schedule/ExamSchedule';
import SemesterSchedule from './time_table/SemesterSchedule';
import academicsImg from './academics.jpg';
import ClassSchedule from './class_schedule/ClassSchedule';
import smoothscroll from 'smoothscroll-polyfill';

function Academics() {
  useEffect(() => {
    smoothscroll.polyfill();
    window.__forceSmoothScrollPolyfill__ = true;
  });

  return (
    <div className='academics'>
      <h1>Academics</h1>
      <img src={academicsImg} alt='Academics__image' />
      <div className='academicsContainer'>
        <div id='classSchedule'>
          <ClassSchedule />
        </div>
        <div id='examSchedule'>
          <ExamSchedule />
        </div>
        <div id='calender'>
          <SemesterSchedule />
        </div>
      </div>
    </div>
  );
}

export default Academics;
