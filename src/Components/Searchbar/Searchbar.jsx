import React from 'react';
import Label from '../Label/Label';
import List from '../List/List';
import Textbox from '../Textbox/Textbox';

const data = [1, 2, 3, 4]
const dataobj = [
    {
        title: 'I am legend',
        artist: 'Will Smith'
    }, {
        title: 'The Dark Knight',
        artist: 'Bale'
    }, {
        title: 'Edge of Tomorrow',
        artist: 'Cruise'
    }, {}]

export default function Searchbar() {
    return (
        <div style={{}}>
            <Textbox
                label
                text={{ style: { width: 100, margin: 0 } }}
                description
            />
            <div style={{ position: 'relative' }}>
                <List data={dataobj}  />
            </div>


        </div>);
}
