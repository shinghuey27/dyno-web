import React from "react";
import Proptypes from "prop-types";

const listItem = (data, { item, props }) =>
  data.map((el) => (
    <li style={{ ...props.styleItem }} {...item}>
      {el?.label}
    </li>
  ));

const List = (props) => {

  const {
    data,
    listBox,
    item,
    containerStyle } = props;

  return (
    <ul style={{ ...containerStyle }} {...listBox}>
      {/* this is the children of the list , call function listItem , pass 2 argument , first one is the data , second is the style of the item */}
      {data && listItem(data, { item, props })}
    </ul>
  );
};

List.defaultProps = {
  // <-- this is the default inline styling for listbox
  containerStyle: {
    backgroundColor: "white",
    margin: 0,
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
    cursor:"pointer"
  },
  // <-- this is default inline styling for the list item
  styleItem: {
    listStyleType: "none",
    padding: 5,
    fontSize: 15,
    backgroundColor: "white",
  }
};


List.propTypes = {
  data: Proptypes.array.isRequired,
};

export default List;
