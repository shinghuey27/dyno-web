function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import Proptypes from "prop-types";
import './List.css';

const listItem = (data, {
  item,
  props
}) => data.map(el => /*#__PURE__*/React.createElement("li", _extends({
  style: { ...props.styleItem
  }
}, item), el?.label));

const List = props => {
  const {
    data,
    listBox,
    item,
    containerStyle,
    classNameContainer
  } = props;
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classNameContainer,
    style: { ...containerStyle
    }
  }, listBox));
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
    cursor: "pointer"
  },
  // <-- this is default inline styling for the list item
  styleItem: {
    listStyleType: "none",
    padding: 5,
    fontSize: 15,
    backgroundColor: "white"
  }
};
List.propTypes = {
  data: Proptypes.array.isRequired
};
export default List;