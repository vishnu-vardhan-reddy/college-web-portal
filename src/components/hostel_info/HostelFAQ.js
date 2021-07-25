import React from 'react';
import './HostelFAQ.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { hostelFAQ } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    flexBasis: '100%',
    flexShrink: 0,
    marginLeft: '1rem',
    fontWeight: '600',
  },
  span: {
    marginLeft: '2rem',
    padding: '1rem',
    borderLeft: '3px solid #f96f26',
  },
}));

export default function HostelFAQ() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='hostelFAQ'>
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <div className='hostelFAQContainer'>
        <div className={classes.root}>
          {hostelFAQ.map((faq, idx) => (
            <Accordion
              key={idx}
              expanded={expanded === 'panel' + idx}
              onChange={handleChange('panel' + idx)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={'panel1bh-content' + idx}
                id={'panel1bh-header' + idx}
              >
                <AccordionHead expanded={expanded === 'panel' + idx} />
                <h3 className={classes.heading}>{faq.question}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <span className={classes.span}>{faq.answer}</span>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
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

// fa fa-question-circle-o mr-10
