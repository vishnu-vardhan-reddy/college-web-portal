import React from 'react';
import './ClassSchedule.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { classSchedule } from '../data';

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
function ClassSchedule() {
  const classes = useStyles();
  return (
    <div className='classSchedule'>
      <h1>Class Schedule</h1>
      <div className='classScheduleContainer'>
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
              {classSchedule.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>
                    <a href={row.schedule}>{row.examInfo}</a>
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

export default ClassSchedule;
