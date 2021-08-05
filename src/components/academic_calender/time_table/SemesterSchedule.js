import React, { useEffect, useState } from 'react';
import './SemesterSchedule.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { semesterSchedule } from '../data';
import { semesterScheduleResponse } from '../api';

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
  tableCell: {
    fontWeight: '600',
    fontSize: '1.2rem',
    color: '#fff',
  },

  tableHead: {
    backgroundColor: '#F96F26',
  },
});

export default function SemesterSchedule() {
  const [semesterSchedules, setsemesterSchedules] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const result = await semesterScheduleResponse();
        if (result) {
          console.log(result);
          setsemesterSchedules(result);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    return ac.abort();
  }, []);

  return (
    <div className='semesterSchedule'>
      <h1>Semester Schedule</h1>
      <div className='semesterScheduleContainer'>
        <TableContainer component={Paper} className='tableContainer'>
          <Table className={classes.table} aria-label='a dense table'>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.tableCell} align='center'>
                  Schedules
                </TableCell>
                <TableCell className={classes.tableCell} align='center'>
                  Academic Year
                </TableCell>
                <TableCell align='right' className={classes.tableCell}>
                  Updated On
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {semesterSchedules?.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>
                    <a href={row.schedule} target='_blank' rel='noreferrer'>
                      {row.examInfo ? row.examInfo : 'some description'}
                    </a>
                  </TableCell>
                  <TableCell align='center'>{row.academic_year}</TableCell>
                  <TableCell align='right'>{row.posted_on}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
