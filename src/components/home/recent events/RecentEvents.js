import React from 'react';
import './RecentEvents.css';
import event1 from './events1.jpg';
import event2 from './event2.jpg';
import event3 from './event3.svg';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function RecentEvents() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className='blogContainer'>
      <div className='blogsContainer__header'>
        <h1>Recent Events</h1>
        <div className='carousal__button'>
          <Button
            variant='outlined'
            endIcon={<SendIcon />}
            color='secondary'
            className='see__more'
          >
            See More
          </Button>
        </div>
      </div>
      <div className='blogContainer__container'>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          containerClass='carousel-container'
        >
          <div className='blogsContainer__post'>
            <img src={event1} alt='event 1' />
            <div className='blogsContainer__postContent'>
              <h3>Teachers day</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </div>
          </div>
          <div className='blogsContainer__post'>
            <img src={event2} alt='event 2' />
            <div className='blogsContainer__postContent'>
              <h3>Republic day</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </div>
          </div>
          <div className='blogsContainer__post'>
            <img src={event3} alt='event 3' />
            <div className='blogsContainer__postContent'>
              <h3>Job Mela</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </div>
          </div>
          <div className='blogsContainer__post'>
            <img src={event1} alt='event 4' />
            <div className='blogsContainer__postContent'>
              <h3>Teachers day</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </div>
          </div>
          <div className='blogsContainer__post'>
            <img src={event2} alt='event 6' />
            <div className='blogsContainer__postContent'>
              <h3>Republic day</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </div>
          </div>
          <div className='blogsContainer__post'>
            <img src={event3} alt='event 3' />
            <div className='blogsContainer__postContent'>
              <h3>Job Mela</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default RecentEvents;
