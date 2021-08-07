import React, { useEffect, useState } from 'react';
import './EventSection.css';
import arrow from './arrow.svg';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { useHistory } from 'react-router-dom';
import { impLinksResponse, upcomingEventsResponse } from '../../utils/api';

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
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const result = await impLinksResponse();
        if (result) {
          setThreeLinks(result.reverse().slice(0, 3));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const result = await upcomingEventsResponse();
        if (result) {
          setUpcomingEvents(result.reverse().slice(0, 3));
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
            onClick={() => history.push('/about-college')}
          >
            Read More
          </Button>
          <div className='eventSectionContainer__LeftBottom'>
            <h2>Important Links</h2>
            {threeLinks.map(({ link, id, description }) => (
              <div className='important__links' key={id}>
                <img src={arrow} alt='arrrow' />
                <a href={link} target='_blank' rel='noreferrer'>
                  {description ? description : link}
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
            {upcomingEvents?.map((event, id) => (
              <div className='eventContainer'>
                <span>
                  {event.date
                    ? new Date(event.date).toDateString()
                    : 'Loading.....'}
                </span>
                <p>{event.event_name ? event.event_name : 'Loading.....'}</p>
                <span>{event.time ? event.time : 'Loading.....'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSection;
