import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(item, value) {
    return { item, value };
}

const rows = [
    createData('Available Balance', 'Derek Goh'),
    createData('Available Credit Limit', 'RM 50,000.00'),
    createData('Due Date', '25 January 2021'),
    createData('Minimum Payment', 'RM 750.00'),
    createData('Last Payment Amount', 'RM 10,810.00'),
    createData('Last Payment Date', '22 December 2020'),
    createData('Last Statement Date', '22 December 2020'),
    createData('No. of Transaction Accumulated to Date', 'RM 0.00')
];

const cellTableStyle = {
    paddingLeft: 0,
    paddingTop: 12,
    paddingBottom: 12,
    border: 0,
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    color:'#6F7FAF'

}


const cellTableStyleHeader = {
    padding: 0,
    borderBottom:0,    
    borderTop:'1px solid #C7C7C7'

    
}


export default function MUITable() {
    return (
        <TableContainer component={Paper} style={{ padding: 20 , borderRadius:10}} >
            <Typography fontFamily='Rubik' fontSize={'20px'} color={'#171725'}  style={{marginBottom:32}}>Account Details</Typography>
            <Table sx={{}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={cellTableStyleHeader}></TableCell>
                        <TableCell style={cellTableStyleHeader} align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell
                                component="th"
                                style={cellTableStyle}
                                scope="row">
                                {row?.item}
                            </TableCell>
                            <TableCell style={{ ...cellTableStyle, color: 'black' }} align="left">{row?.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}