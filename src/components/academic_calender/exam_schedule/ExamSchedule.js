import React, { useEffect, useState } from 'react';
import './ExamSchedule.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { examSchedule } from '../data';
import { examScheduleResponse } from '../api';

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
  tableCell: {
    fontWeight: '500',
    fontSize: '1.2rem',
    color: '#fefefe',
  },
  tableHead: {
    backgroundColor: '#F96F26',
  },
});

export default function ExamSchedule() {
  const [examsSchedules, setexamsSchedules] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const result = await examScheduleResponse();
        if (result) {
          console.log(result);
          setexamsSchedules(result);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    return ac.abort();
  }, []);

  return (
    <div className='examSchedule'>
      <h1>Exam Schedule</h1>
      <div className='examScheduleContainer'>
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
              {examsSchedules?.map((row) => (
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
