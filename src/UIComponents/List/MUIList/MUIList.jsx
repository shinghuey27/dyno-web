import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Simpleicon from '../../../Asset/Icon/SampleIcon.png';
import Button from '../../Button/Button'
import { useEffect } from 'react';

const iconStyle = {
    width: 40,
    height: 40,
}

const buttonStyle = {
    backgroundColor: '#B0BAD7',
    color: 'white',
    border: 0
}

function createData(title, description, style) {
    return { title, description, style };
}

const rows = [
    createData('Password', 'Change your password', { title: {}, description: { color: '#B0BAD7', fontSize:10 } }),
    createData('Security Phrase', 'Change your security phrase', { title: {}, description: { color: '#B0BAD7', fontSize:10 } }),
    createData('Security Image', 'Change the security image for login verification', { title: {}, description: { color: '#B0BAD7', fontSize:10 } }),
    createData('Security Questions', 'Change your personal security questions', { title: {}, description: { color: '#B0BAD7', fontSize:10 } }),
    createData('Secure2u', 'A faster way to authorize transactions', { title: {}, description: { color: '#B0BAD7', fontSize:10 } }),
    createData('Quick Touch', 'On', { title: {}, description: { color: '#01CCCE' } }),

];

export default function MUIList() {

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 660,
                bgcolor: 'background.paper'
            }}
            style={{margin:"auto"}}
        >
            {rows.map((row, index) => (
                <ListItem key={index}>
                    <ListItemIcon>
                        <img src={Simpleicon} style={iconStyle} />
                    </ListItemIcon>
                    <div style={{ flex: 1 }}>
                        <ListItemText primary={row?.title} style={row?.style?.title} />
                        <ListItemText primary={row?.description} style={row?.style?.description} primaryTypographyProps={{fontSize: '13px'}} />
                    </div>
                    <Button style={buttonStyle} text={'Change'}></Button>
                </ListItem>
            ))}
        </List>
    );
}