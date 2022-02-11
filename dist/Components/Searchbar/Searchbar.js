function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import List from "../List/List";
import Textbox from "../Textbox/Textbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { sampleItem } from "../../SampleData/List";
import Proptypes from "prop-types";

const Searchbar = props => {
  const {
    data,
    label,
    text,
    description,
    error,
    listBox,
    item,
    icon,
    iconStyle,
    listboxStyle
  } = props;
  const defaultData = data && data.length ? data : sampleItem;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex" // backgroundColor: 'red'

    }
  }, /*#__PURE__*/React.createElement(Textbox, {
    label: label,
    text: text,
    description: description,
    error: error
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KeyboardArrowDownIcon, _extends({
    style: { ...iconStyle
    }
  }, icon)))), /*#__PURE__*/React.createElement("div", {
    style: { ...listboxStyle
    }
  }, data && /*#__PURE__*/React.createElement(List, {
    data: defaultData,
    listBox: listBox,
    item: item
  })));
};

Searchbar.defaultProps = {
  iconStyle: {
    marginTop: 30
  },
  listboxStyle: {
    position: "relative",
    top: 40
  },
  descriptiontext: {
    label: ''
  }
};
Searchbar.propTypes = {
  data: Proptypes.array.isRequired
};
export default Searchbar;