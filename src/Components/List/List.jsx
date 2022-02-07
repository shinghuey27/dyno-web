import { padding } from '@mui/system';
import React from 'react';


const listItem = (data, { item }) => data.map((el) => <li style={{ listStyleType: 'none', padding: 5, fontSize: 15 }} {...item}>{el?.title}</li>)

export default function List(props) {
    const { data, listBox, item } = props;

    return (
        <ul style={{
            backgroundColor: 'white', margin: 0, zIndex: 200, position: 'absolute',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            borderRadius: 8,
            boxShadow: "0.5px 1px 1px 1px rgba(0, 0, 0, 0.05)",
            padding: 10,
            top: -19
        }} {...listBox}>
            {listItem(data, { item })}
        </ul>
    );
}
