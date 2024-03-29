import React, { useEffect, useState } from 'react';
import './Department.css';
import About from './About/About';
import Faculty from './Faculty/Faculty';
import Laboratory from './Laboratory/Laboratory';
import Acheivements from './Achievements/Acheivements';
import { useHistory, useParams } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import Syllabus from './syllabus/Syllabus';
import { departmentResponse } from './../utils/api';
import PhotoGallery from './photo_gallery/PhotoGallery';
import MoonLoader from './../utils/Loader';

function Department() {
  const [faculty, setFaculty] = useState([]);
  const [hodContent, setHodContent] = useState({});
  const [laboratories, setLaboratories] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [syllabus, setSyllabus] = useState([]);
  const [images, setImages] = useState([]);
  const [about, setAbout] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  let { departmentId } = useParams();

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const response = await departmentResponse(departmentId);
        if (response) {
          const faculty = response.faculty_set.filter(
            (faculty) => faculty.position !== 'Head of the Department'
          );
          const hod = response.faculty_set.filter(
            (faculty) => faculty.position === 'Head of the Department'
          );
          console.log(response);
          setFaculty(faculty);
          setHodContent(hod[0]);
          setTitle(response.department_name);
          setImages(response.gallery_set);
          setAbout(response.about);
          setLaboratories(response.laboratory_set);
          setAchievements(response.acheivement_set);
          setSyllabus(response.syllabus);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    })();
    return ac.abort();
  }, [departmentId]);

  useEffect(() => {
    smoothscroll.polyfill();
    window.__forceSmoothScrollPolyfill__ = true;
  });

  return (
    <div className='department'>
      {loading ? (
        <MoonLoader loading={loading} />
      ) : (
        <>
          <h1>{title}</h1>
          <div className='departmentContainer'>
            <div id='about-us'>
              <About about={about} />
            </div>
            <div id='faculty'>
              <Faculty hod={hodContent} faculty={faculty} />
            </div>
            <div id='syllabus'>
              <Syllabus syllabus={syllabus} />
            </div>
            <div id='laboratories'>
              <Laboratory laboratories={laboratories} />
            </div>
            <div id='achievements'>
              <Acheivements achievements={achievements} />
            </div>
            <div id='achievements'>
              <PhotoGallery images={images} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Department;
