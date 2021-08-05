import React from 'react';
import './Books.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { booksData } from './data';

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
  tableCell: {
    fontWeight: 'bold',
  },
});

export default function BooksTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className='tableContainer'>
      <Table className={classes.table} aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Department</TableCell>
            <TableCell align='right' className={classes.tableCell}>
              E Journals
            </TableCell>
            <TableCell align='right' className={classes.tableCell}>
              Total No of Books
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {booksData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.department}
              </TableCell>
              <TableCell align='right'>{row.totalBooks}</TableCell>
              <TableCell align='right'>{row.eJournals}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
