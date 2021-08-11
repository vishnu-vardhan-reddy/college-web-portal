import React from 'react';
import './Achievements.css';

function Acheivements({ achievements }) {
  console.log(achievements);
  return (
    <div className='achievements'>
      <h2>Achievements</h2>
      <div className='achievementsContainer'>
        {achievements?.map((achievement, index) => (
          <div className='achievementsContainer__content'>
            <p>{achievement.description}</p>
            {/* </ShowMoreText> */}
            <img src={achievement.image} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Acheivements;
