import React from "react";
import Proptypes from "prop-types";
import './List.css'
import ListItem from "./ListItem";


const List = (props) => {

  const {
    data,
    listBox,
    item,
    containerStyle,
    onChange,
    classNameContainer } = props;

  return (
    <ul className={classNameContainer} style={{ ...containerStyle }} {...listBox}>
      {data && <ListItem data={data} onChange={onChange} {...item} />}
    </ul>
  );
};

List.defaultProps = {
  // <-- this is the default inline styling for listbox
  classNameContainer: 'containerlistbox',
  containerStyle: {
    backgroundColor: "white",
    margin: 0,
    zIndex: 200,
    position: "absolute",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    borderRadius: 8,
    boxShadow: "0.5px 1px 1px 1px rgba(0, 0, 0, 0.05)",
    padding: 10,
    width: 260,
    top: -40,
    overflow: "scroll",
    height: 50,
    overflowX: "hidden",
    cursor: "pointer",

  },  
};


List.propTypes = {
  data: Proptypes.array.isRequired,
};

export default List;
