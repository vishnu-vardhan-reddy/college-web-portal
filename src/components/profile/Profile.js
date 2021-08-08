import React, { useState, useEffect } from 'react';
import './Profile.css';
import profile from './profile.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import HomeIcon from '@material-ui/icons/Home';
import { useParams } from 'react-router-dom';
import { facultyResponse } from '../utils/api';
import MoonLoader from './../utils/Loader';
import { idTodepartment } from './../utils/idTodepartment';
import { destructureArray } from './../utils/destructureArray';

function Profile() {
  const [loading, setLoading] = useState(false);
  const [faculty, setFaculty] = useState({});
  const [profileSet, setProfileSet] = useState([]);
  const [qualifications, setQualifications] = useState({});

  const { facultyId } = useParams();
  console.log(facultyId);
  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const result = await facultyResponse(facultyId);
        if (result) {
          setFaculty(result);
          setProfileSet(destructureArray(result.facultyprofile_set));
          setQualifications(result.qualification_set);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    })();
    return ac.abort();
  }, [facultyId]);
  return (
    <div className='profile'>
      {loading ? (
        <MoonLoader loading={loading} />
      ) : (
        <div className='profileContainer'>
          <div className='profileContainer__left'>
            <img src={faculty.profileImg} alt='' />
            <h3>{faculty.name}</h3>
            <p>{idTodepartment(faculty.department)}</p>
            <p>{faculty.pro_experience} years of experience</p>
            <div className='profileContainer__leftSocial'>
              {faculty.fb_link && (
                <a
                  href={faculty.fb_link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FacebookIcon />
                </a>
              )}

              {faculty.youtube_link && (
                <a
                  href={faculty.youtube_link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <YouTubeIcon />
                </a>
              )}

              {faculty.insta_link && (
                <a
                  href={faculty.insta_link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <InstagramIcon />
                </a>
              )}

              {faculty.linkedin_link && (
                <a
                  href={faculty.linkedin_link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LinkedInIcon />
                </a>
              )}

              {faculty.twitter_link && (
                <a
                  href={faculty.twitter_link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <TwitterIcon />
                </a>
              )}
            </div>
          </div>
          <div className='profileContainer__right'>
            <div className='profileContainer__rightContact'>
              <h3>Contact Info</h3>
              <div className='profile__contact'>
                <CallOutlinedIcon />
                <p>{faculty.contact}</p>
              </div>
              <div className='profile__contact'>
                <MailOutlinedIcon />
                <p>{faculty.email}</p>
              </div>
              <div className='profile__contact'>
                {faculty.address && (
                  <>
                    <HomeIcon />
                    <p>{faculty.address}</p>
                  </>
                )}
              </div>
            </div>
            {faculty.about && (
              <div className='profileContainer__rightAbout'>
                <h3>About {faculty.name}</h3>
                <p>{faculty.about}</p>
              </div>
            )}
            {qualifications?.length > 0 && (
              <div className='profileContainer__rightAbout'>
                <h3>Qualifications</h3>
                <div className='profileContainer__rightQualifications'>
                  {qualifications?.map((qualification, index) => (
                    <p>
                      `${qualification.degree} in $
                      {qualification.specialization} from
                      {qualification.institute}, ${qualification.year}.`
                    </p>
                  ))}
                </div>
              </div>
            )}

            {profileSet.seminars?.length > 0 &&
              profileSet.seminars?.map((seminar, index) => (
                <div className='profileContainer__rightAbout'>
                  <h3>Seminars</h3>
                  <div className='profileContainer__rightQualifications'>
                    <p>{seminar.content}</p>
                  </div>
                </div>
              ))}

            {profileSet.scholar?.length > 0 &&
              profileSet.scholar?.map((seminar, index) => (
                <div className='profileContainer__rightAbout'>
                  <h3>Scholars</h3>
                  <div className='profileContainer__rightQualifications'>
                    <p>{seminar.scholar}</p>
                  </div>
                </div>
              ))}

            {profileSet.publishedBooks?.length > 0 &&
              profileSet.publishedBooks?.map((seminar, index) => (
                <div className='profileContainer__rightAbout'>
                  <h3>Published Books</h3>
                  <div className='profileContainer__rightQualifications'>
                    <p>{seminar.publishedBooks}</p>
                  </div>
                </div>
              ))}

            {profileSet.awards?.length > 0 &&
              profileSet.awards?.map((seminar, index) => (
                <div className='profileContainer__rightAbout'>
                  <h3>Awards</h3>
                  <div className='profileContainer__rightQualifications'>
                    <p>{seminar.awards}</p>
                  </div>
                </div>
              ))}

            {profileSet.journals?.length > 0 &&
              profileSet.journals?.map((seminar, index) => (
                <div className='profileContainer__rightAbout'>
                  <h3>Journals</h3>
                  <div className='profileContainer__rightQualifications'>
                    <p>{seminar.journals}</p>
                  </div>
                </div>
              ))}

            {profileSet.memberships?.length > 0 &&
              profileSet.memberships?.map((seminar, index) => (
                <div className='profileContainer__rightAbout'>
                  <h3>Memberships</h3>
                  <div className='profileContainer__rightQualifications'>
                    <p>{seminar.memberships}</p>
                  </div>
                </div>
              ))}

            {profileSet.fundProjects?.length > 0 &&
              profileSet.fundProjects?.map((seminar, index) => (
                <div className='profileContainer__rightAbout'>
                  <h3>FundProjects</h3>
                  <div className='profileContainer__rightQualifications'>
                    <p>{seminar.fundProjects}</p>
                  </div>
                </div>
              ))}

            {profileSet.researchPapers?.length > 0 &&
              profileSet.researchPapers?.map((seminar, index) => (
                <div className='profileContainer__rightAbout'>
                  <h3>ResearchPapers</h3>
                  <div className='profileContainer__rightQualifications'>
                    <p>{seminar.researchPapers}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
