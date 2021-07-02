import React from 'react'
import './Profile.css'
import profile from './profile.svg'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import CallOutlinedIcon from '@material-ui/icons/CallOutlined'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined'
import HomeIcon from '@material-ui/icons/Home'

function Profile() {
  return (
    <div className='profile'>
      <div className='profileContainer'>
        <div className='profileContainer__left'>
          <img src={profile} alt='' />
          <h3>DR Kalam</h3>
          <p>CSE Department</p>
          <p>Since 2010</p>
          <div className='profileContainer__leftSocial'>
            <FacebookIcon />
            <YouTubeIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        <div className='profileContainer__right'>
          <div className='profileContainer__rightContact'>
            <h3>Contact Info</h3>
            <div className='profile__contact'>
              <CallOutlinedIcon />
              <p>9999999999</p>
            </div>
            <div className='profile__contact'>
              <MailOutlinedIcon />
              <p>Abdul@yvu.ac.in</p>
            </div>
            <div className='profile__contact'>
              <HomeIcon />
              <p>proddatur, Andhra</p>
            </div>
          </div>
          <div className='profileContainer__rightAbout'>
            <h3>About Abdul</h3>
            <p>
              One of the most sought design, One of the most sought after
              courses amongst engineering students, Computer Science Engineering
              (CSE) is an academic programme which integrates the field of
              Computer Engineering and Computer Science. The programme, which
              emphasises the basics of computer programming and networking,
              comprises a plethora of tf Computer Engineering and Computer
              Science. The programme, which emphasises the basics of computer
              programming and networking, comprises a plethora of topics. The
              said topics are related to computation, a,{' '}
            </p>
          </div>
          <div className='profileContainer__rightAbout'>
            <h3>Qualifications</h3>
            <div className='profileContainer__rightQualifications'>
              <p>
                Ph.D in Computer Science and Engineering (Web Mining) from
                Acharya Nagarjuna University, Guntur, 2014.
              </p>
              <p>
                Ph.D in Computer Science and Engineering (Web Mining) from
                Acharya Nagarjuna University, Guntur, 2014.
              </p>
              <p>
                Ph.D in Computer Science and Engineering (Web Mining) from
                Acharya Nagarjuna University, Guntur, 2014.
              </p>
            </div>
          </div>
          <div className='profileContainer__rightAbout'>
            <h3>Experience</h3>
            <div className='profileContainer__rightQualifications'>
              <p>Post Ph.D having 6+ years of teaching experience.</p>
              <p>
                20 years of teaching experience in engineering subjects for UG
                (B.Tech), PG (M.Tech) Courses.
              </p>
            </div>
          </div>
          <div className='profileContainer__rightAbout'>
            <h3>Research Activities</h3>
            <div className='profileContainer__rightQualifications'>
              <p>International / National Publications Published : 25</p>
              <p>International / National Publications Published : 25</p>
              <p>
                Google Scholar: Citations – 32 ; H Index – 3 ; i10 Index – 1{' '}
              </p>
            </div>
          </div>
          <div className='profileContainer__rightAbout'>
            <h3>Achievements</h3>
            <div className='profileContainer__rightQualifications'>
              <p>Excellent People Management Skills.</p>
              <p>Having more than 17years experience as Administrator.</p>
              <p>
                GProficient at guiding IEEE projects for UG and PG Students.{' '}
              </p>
              <p>Experienced in establishing well-equipped Laboratories.</p>
              <p>
                Reviewer for International Journal of Engineering Research &
                Technology (IJERT).
              </p>
              <p>Reviewer for FLAT Textbook in Pearson Education.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
