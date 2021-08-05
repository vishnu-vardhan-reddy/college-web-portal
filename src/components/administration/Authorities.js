import React, { useEffect } from 'react';
import './Authorities.css';
import administrationPic from './adminstrationPic.jpg';
import MemberCard from './MemberCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ExecutiveCard from './ExecutiveCard';

function Authorities() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-out-quart',
      disable: window.innerWidth < 1024,
      delay: 100,
    });
  });
  return (
    <div className='authorities'>
      <div className='authoritiesContainer'>
        <img src={administrationPic} alt='authorities__image' />
        <h2 id='authorities-us'>Authorities of the University</h2>
        <div className='authorities__members' data-aos='slide-up'>
          <MemberCard />
          <MemberCard />
        </div>
        <div className='authorities__executiveCouncil'>
          <h3>Members of the Executive Council</h3>
          <div className='authorities__members' data-aos='slide-up'>
            <ExecutiveCard />
            <ExecutiveCard />
            <ExecutiveCard />
            <ExecutiveCard />
            <ExecutiveCard />
            <ExecutiveCard />
            <ExecutiveCard />
            <ExecutiveCard />
          </div>
        </div>
        <div className='principal__dean'>
          <div className='principal'>
            <h3>Principal</h3>
            <MemberCard />
          </div>
          <div className='principal'>
            <h3>Dean</h3>
            <MemberCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authorities;
