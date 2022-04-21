"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UIComponents = require("../../UIComponents");

var _PopupListModule = _interopRequireDefault(require("./PopupList.module.scss"));

var _List = _interopRequireDefault(require("@mui/material/List"));

var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));

var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));

require("../../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createData(title, description) {
  return {
    title: title,
    description: description
  };
}

var rows = [createData("Principal Amount", "RM129,000.00"), createData("Maturity Date", "23 May 2022"), createData("Term", "6 Months"), createData("Profit Rate (p.a.)", "3.80%"), createData("Profit Payment Mode", "Add to Principal"), createData("Instruction on Maturity", "Auto Renewal")];

var PopupList = function PopupList() {
  return /*#__PURE__*/React.createElement("div", {
    className: _PopupListModule.default.container
  }, /*#__PURE__*/React.createElement("div", {
    className: _PopupListModule.default.container1
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: _PopupListModule.default.title
  }, "FD40MY0002"), /*#__PURE__*/React.createElement("label", {
    className: _PopupListModule.default.description
  }, "Michelle Tan Sri")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_List.default, {
    sx: {
      width: "100%",
      minWidth: "817px",
      bgcolor: "#F8F8F8",
      borderRadius: "10px",
      marginTop: "30px"
    }
  }, rows.map(function (row, index) {
    return /*#__PURE__*/React.createElement(_ListItem.default, {
      key: index,
      sx: {
        display: "flex",
        flexDirection: "row"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: _PopupListModule.default.listItem
    }, /*#__PURE__*/React.createElement(_ListItemText.default, {
      disableTypography: true,
      primary: row === null || row === void 0 ? void 0 : row.title,
      className: _PopupListModule.default.listItemTitle
    }), /*#__PURE__*/React.createElement(_ListItemText.default, {
      disableTypography: true,
      primary: row === null || row === void 0 ? void 0 : row.description,
      className: _PopupListModule.default.desc
    })));
  })))), /*#__PURE__*/React.createElement("div", {
    className: _PopupListModule.default.button
  }, /*#__PURE__*/React.createElement(_UIComponents.Button, {
    item: {
      label: "Done"
    },
    style: {
      fontWeight: "bold"
    }
  })));
};

var _default = PopupList;
exports.default = _default;