import React, { useEffect, useState } from 'react';
import './EventSection.css';
import arrow from './arrow.svg';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { useHistory } from 'react-router-dom';
import { impLinksResponse } from '../../utils/api';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f77a23',
    },
    secondary: {
      main: '#f77a23',
    },
  },
});

function EventSection() {
  const [threeLinks, setThreeLinks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const result = await impLinksResponse();
        if (result) {
          setThreeLinks(result.slice(0, 3));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className='eventSection' id='aboutus'>
      <div className='eventSectionTopBorder'></div>
      <div className='eventSectionContainer'>
        <div className='eventSectionContainer__Left'>
          <div className='eventSectionContainer__LeftTop'>
            <h3>About Us</h3>
            <h2>WELCOME TO YVU</h2>
            <p>
              we promise that you will do what you love YSR engineering college
              of yogivemana university is of the best universities in AP, with
              high qualified teachers.
            </p>
          </div>
          <Button
            variant='contained'
            color='secondary'
            className='readMore__button'
          >
            Read More
          </Button>
          <div className='eventSectionContainer__LeftBottom'>
            <h2>Important Links</h2>
            {threeLinks.map(({ link, id, description }) => (
              <div className='important__links' key={id}>
                <img src={arrow} alt='arrrow' />
                <a href={link} target='_blank' rel='noreferrer'>
                  {description}
                </a>
              </div>
            ))}
          </div>
          <ThemeProvider theme={theme}>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SendIcon />}
              className='more__links'
              onClick={() => history.push('/more-links')}
            >
              More Links
            </Button>
          </ThemeProvider>
        </div>
        <div className='eventSectionContainer__right'>
          <div className='eventSectionContainer__rightCotainer'>
            <h1>Upcoming Events</h1>
            <div className='eventContainer'>
              <span>21st dec 2022</span>
              <p>computer science workshop</p>
              <span>10:00am-01:00pm</span>
            </div>
            <div className='eventContainer'>
              <span>21st dec 2022</span>
              <p>computer science workshop</p>
              <span>10:00am-01:00pm</span>
            </div>
            <div className='eventContainer'>
              <span>21st dec 2022</span>
              <p>computer science workshop</p>
              <span>10:00am-01:00pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSection;
