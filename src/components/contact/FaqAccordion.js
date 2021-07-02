import React from 'react'
// import './FaqAccordion.css'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
// import span from '@material-ui/core/span'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

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
}))

export default function FaqAccordion() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <FiberManualRecordIcon />
          <h3 className={classes.heading}>What is the Admission Procedure</h3>
        </AccordionSummary>
        <AccordionDetails>
          <span className={classes.span}>
            first u need to know on which day u need to bring all your original
            certificates like tc,inter marks list ,eamcet rank card first u need
            to know on which day u need to bring all your or iginal certificates
            like tc,inter marks list ,eamcet rank card
          </span>
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
          <FiberManualRecordIcon />
          <h3 className={classes.heading}>What is the Admission Procedure</h3>
        </AccordionSummary>
        <AccordionDetails>
          <span className={classes.span}>
            first u need to know on which day u need to bring all your original
            certificates like tc,inter marks list ,eamcet rank card first u need
            to know on which day u need to bring all your or iginal certificates
            like tc,inter marks list ,eamcet rank card
          </span>
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
          <FiberManualRecordIcon />
          <h3 className={classes.heading}>What is the Admission Procedure</h3>
        </AccordionSummary>
        <AccordionDetails>
          <span className={classes.span}>
            first u need to know on which day u need to bring all your original
            certificates like tc,inter marks list ,eamcet rank card first u need
            to know on which day u need to bring all your or iginal certificates
            like tc,inter marks list ,eamcet rank card
          </span>
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
          <FiberManualRecordIcon />
          <h3 className={classes.heading}>What is the Admission Procedure</h3>
        </AccordionSummary>
        <AccordionDetails>
          <span className={classes.span}>
            first u need to know on which day u need to bring all your original
            certificates like tc,inter marks list ,eamcet rank card first u need
            to know on which day u need to bring all your or iginal certificates
            like tc,inter marks list ,eamcet rank card
          </span>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
