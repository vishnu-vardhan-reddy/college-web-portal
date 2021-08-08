import React, { useEffect } from 'react';
import './Faculty.css';
import FacultyCard from './FacultyCard/FacultyCard';
import HodCard from './HodCard/HodCard';
import StaffCard from './StaffCard/StaffCard';
import Fade from 'react-reveal/Fade';

function Faculty({ hod, faculty }) {
  return (
    <div className='faculty' id='faculty'>
      <h1>Faculty</h1>
      <div className='faculty__container'>
        <div className='facultyHodContainer'>
          <h3>Department Head</h3>
          <HodCard hodData={hod} />
        </div>
        <div className='facultyContainer'>
          <h3>Department Faculty</h3>

          <div className='facultyContainer__cards'>
            {faculty?.map((facultyData, index) => (
              <FacultyCard facultyData={facultyData} key={index} />
            ))}
          </div>
        </div>
        {/* <div className='facultyContainer'>
          <h3>Department Staff</h3>
          <div className='facultyContainer__cards'>
            <StaffCard />
            <StaffCard />
            <StaffCard />
            <StaffCard />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Faculty;
