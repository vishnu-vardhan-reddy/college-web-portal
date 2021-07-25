import React from 'react';
import './SyllabusAccordion.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
// import span from '@material-ui/core/span'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    [theme.breakpoints.up('sm')]: {
      width: '60vw',
    },
  },
  heading: {
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
  },
}));

export default function SyllabusAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          margin: '2rem 0',
          color: '#f96f26',
        }}
      >
        Syllabus
      </h1>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <AccordionHead expanded={expanded === 'panel1'} />
          <h3 className={classes.heading}>1st Year</h3>
          <span className={classes.secondaryHeading}>
            Click on semester to download
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <KeyboardArrowRightIcon />
          <a
            href='https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf'
            download
            rel='noreferrer'
            target='_blank'
          >
            Semester 1
          </a>
        </AccordionDetails>
        <AccordionDetails>
          <KeyboardArrowRightIcon />
          <a
            href='https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf'
            download
            rel='noreferrer'
            target='_blank'
          >
            Semester 2
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <AccordionHead expanded={expanded === 'panel2'} />

          <h3 className={classes.heading}>2nd Year</h3>
          <span className={classes.secondaryHeading}>
            Click on semester to download
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <KeyboardArrowRightIcon />
          <a
            href='https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf'
            download
            rel='noreferrer'
            target='_blank'
          >
            Semester 1
          </a>
        </AccordionDetails>
        <AccordionDetails>
          <KeyboardArrowRightIcon />
          <a
            href='https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf'
            download
            rel='noreferrer'
            target='_blank'
          >
            Semester 2
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'
        >
          <AccordionHead expanded={expanded === 'panel3'} />

          <h3 className={classes.heading}>3rd Year</h3>
          <span className={classes.secondaryHeading}>
            Click on semester to download
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <KeyboardArrowRightIcon />
          <a
            href='https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf'
            download
            rel='noreferrer'
            target='_blank'
          >
            Semester 1
          </a>
        </AccordionDetails>
        <AccordionDetails>
          <KeyboardArrowRightIcon />
          <a
            href='https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf'
            download
            rel='noreferrer'
            target='_blank'
          >
            Semester 2
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel4bh-content'
          id='panel4bh-header'
        >
          <AccordionHead expanded={expanded === 'panel4'} />
          <h3 className={classes.heading}>4th Year</h3>
          <span className={classes.secondaryHeading}>
            Click on semester to download
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <KeyboardArrowRightIcon />
          <a
            href='https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf'
            download
            rel='noreferrer'
            target='_blank'
          >
            Semester 1
          </a>
        </AccordionDetails>
        <AccordionDetails>
          <KeyboardArrowRightIcon />
          <a
            href='https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf'
            download
            rel='noreferrer'
            target='_blank'
          >
            Semester 2
          </a>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const accordionPStyles = {
  color: 'white',
  fontSize: '1.2rem',
};

export const AccordionHead = ({ expanded }) => (
  <div className='accordionHead'>
    <p style={accordionPStyles}> {expanded ? '-' : '+'} </p>
  </div>
);
