import React from 'react'
import './List.css'
const ListItem = (props) => {

    const { data, styleItem } = props;

    return (data.map((el) => (
        <li style={{ ...styleItem }} {...props}>
            {el?.label}
        </li>)
    ))
}

ListItem.defaultProps = {
    styleItem: {
        listStyleType: "none",
        padding: 5,
        fontSize: 15,
        backgroundColor: "white",
    }
}


export default ListItem;