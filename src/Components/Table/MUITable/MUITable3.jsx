import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';


function createData(account, date, amount) {
    return {
        account,
        date,
        amount
    };
}

const rows = [
    createData('Duitnow QR Bizbox Cafe Sdn Bhd', '23 Jan 2020', '10,000.00'),
    createData('SME First Account', '23 Jan 2020', '-2,000.00'),
    createData('Timothy and Brothers Fresh', '23 Jan 2020', '-99,120.00'),
    createData('Genting Comodities Trading', '23 Jan 2020', '-20,000.00'),

];

const cellTableStyle = {
    border: 0,
    flex: 1,
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    color: 'black'

}

const renderAmount =(val)=>{
    if (val<0) return <span style={{color:'red'}}>RM {val}</span>
    else return <span style={{color:'#00CA90'}}>RM {val}</span>
}


export default function MUITable3() {
    return (
        <TableContainer component={Paper} style={{ padding: 20 }} >
            <Typography fontFamily='Rubik' fontSize={'20px'} color={'#171725'} style={{ marginBottom: 32 }}>Users</Typography>
            <Table sx={{}} aria-label="simple table" >
                <TableHead style={{ backgroundColor: '#FFDD00' }}>
                    <TableRow >
                        <TableCell style={{ borderBottom: 0, }} width={'50%'}>DESCRIPTION</TableCell>
                        <TableCell style={{ borderBottom: 0, }} width={'15%'}>DATE</TableCell>

                        <TableCell style={{ borderBottom: 0 }} align='center'>AMOUNT</TableCell>
                        <TableCell style={{ borderBottom: 0 }} align='center'></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell style={{ ...cellTableStyle, display: 'flex', flexDirection: 'row' }} >
                                <div style={{ height: 40, width: 40, backgroundColor: '#01CCCE', borderRadius:15, alignItems:'center', color:'white', display:'flex', justifyContent:'center' }}>{row?.account.slice(0,2)}</div>
                                <span style={{alignSelf:'center', marginLeft:13}}>{row?.account}</span>
                            </TableCell>
                            <TableCell
                                component="th"
                                style={cellTableStyle}
                                scope="row"
                            >
                                {row?.date}
                            </TableCell>

                            <TableCell style={cellTableStyle} align="center">{renderAmount(parseFloat(row?.amount))}</TableCell>
                            <TableCell style={cellTableStyle} align="center">
                                <IconButton aria-label="Example" style={{fontSize:16}}>
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}