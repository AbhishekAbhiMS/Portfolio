import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { Button, Divider, FormControlLabel, Grid } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
const columns = [
  { id: 'BranchList', label: 'Branch List' ,maxWidth:'270px' },
  { id: 'View', label: 'View',maxWidth:'270px' },
];

const initialRows = [
  { BranchList: 'CND', View: false },
  { BranchList: 'YPR', View: false },
  { BranchList: 'SMG', View: false },
  { BranchList: 'M4', View: false },
];

export default function Branchview() {
  const [rows, setRows] = React.useState(initialRows);

  const handleCheckboxChange = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].View = !updatedRows[index].View;
    setRows(updatedRows);
    console.log(rows.filter(e=>e.View==true).map(e=>e.BranchList))
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden',border:'1px solid rgba(34, 43, 69, 0.1)',padding:'22px' }}>
        <Grid container >
            <Grid item xs={6} sx={{fontSize:'20px',fontWeight:'600'}}>View Branches</Grid>
            <Grid  item xs={6} sx={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                 <div style={{marginLeft:'20px'}}><Button variant='outlined' style={{textTransform:'none'}}> Cancel <CloseIcon style={{margin:'0 5px'}} fontSize='small'></CloseIcon></Button></div>
                  <div  style={{marginLeft:'20px'}}><Button variant='outlined' style={{textTransform:'none'}}> Save <SaveIcon style={{margin:'0 5px'}} fontSize='small'></SaveIcon></Button></div></Grid>
            <Grid item xs={12} padding={'22px 0'}><Divider></Divider></Grid>
        </Grid>
      <TableContainer sx={{ maxHeight: 440 ,border:'1px solid #ccc'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                sx={{ borderRight: '1px solid #ccc',width:'270px' }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth ,backgroundColor:'#f7f7f9'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => {
              return (
                <TableRow  hover role="checkbox" tabIndex={-1} key={row.BranchList} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{ borderRight: '1px solid #ccc',width:'270px' }} >
                        {column.id === 'View' ? (
                         <>
                          <FormControlLabel control={
                          <Checkbox  checked={value}   onChange={() => handleCheckboxChange(rowIndex)}/>
                          } label="View" /> 
                           </>
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
