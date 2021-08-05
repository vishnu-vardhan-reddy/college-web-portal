import React from 'react';
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
  const classes = useStyles();

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
              {examSchedule.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>
                    {row.examInfo}
                  </TableCell>
                  <TableCell align='center'>{row.academicYear}</TableCell>
                  <TableCell align='right'>{row.examDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
