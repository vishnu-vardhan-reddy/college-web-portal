import React from 'react';
import './Syllabus.css';
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
    paddingBottom: '2rem',
  },
  heading: {
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
  },
}));

export default function SyllabusAccordion({ syllabus }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let syllabusData = [];

  const Year1 = syllabus.filter((row) => row.academic_year === 'I year');
  const Year2 = syllabus.filter((row) => row.academic_year === 'II year');
  const Year3 = syllabus.filter((row) => row.academic_year === 'III year');
  const Year4 = syllabus.filter((row) => row.academic_year === 'IV year');

  syllabusData.push(Year1);
  syllabusData.push(Year2);
  syllabusData.push(Year3);
  syllabusData.push(Year4);

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
      {syllabusData?.map((syllabus, i) => (
        <Accordion
          key={i}
          expanded={expanded === 'panel' + i}
          onChange={handleChange('panel' + i)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
          >
            <AccordionHead expanded={expanded === 'panel' + i} />
            <h3 className={classes.heading}>
              {syllabus[0]?.academic_year
                ? syllabus[0].academic_year
                : '1st Year'}
            </h3>
            <span className={classes.secondaryHeading}>
              Click on semester to download
            </span>
          </AccordionSummary>
          {syllabus?.map((row, j) => (
            <AccordionDetails>
              <KeyboardArrowRightIcon />
              <a
                href={row.document && row.document}
                download
                rel='noreferrer'
                target='_blank'
              >
                {row.semester ? row.semester : 'Semester 1'}
              </a>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
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
