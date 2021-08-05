import React, { useEffect, useState } from 'react';
import './MoreLinks.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { impLinksResponse } from '../utils/api';

const useStyles = makeStyles({
  table: {
    width: '100%',
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

function MoreLinks() {
  const [links, setLinks] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const result = await impLinksResponse();
        if (result) {
          setLinks(result);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className='moreLinks'>
      <h1>More Links</h1>
      <div className='moreLinksContainer'>
        <TableContainer component={Paper} className='tableContainer'>
          <Table className={classes.table} aria-label='a dense table'>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.tableCell} align='left'>
                  Links
                </TableCell>

                <TableCell align='right' className={classes.tableCell}>
                  Updated On
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {links.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    <a href={row.link} target='_blank' rel='noreferrer'>
                      {row.description}
                    </a>
                  </TableCell>
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

export default MoreLinks;
