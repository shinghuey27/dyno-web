"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UIComponents = require("../../UIComponents");

var _PopupList2Module = _interopRequireDefault(require("./PopupList2.module.scss"));

var _List = _interopRequireDefault(require("@mui/material/List"));

var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));

var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));

require("../../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createData(title, description, style) {
  return {
    title: title,
    description: description,
    style: style
  };
}

var rows = [createData("Unpaid", "These are cheques that have not been deposited for processing yet."), createData("Processing", "A cheque that you issued which has been deposited and is being processed."), createData("Stopped", "A cheque that you successfully requested to stop from being processed.", {
  title: {
    color: "#FF6167",
    fontWeight: 500
  },
  description: {}
}), createData("Paid", "An issued cheque that was deposited and successfully cleared.", {
  title: {
    color: "#00CA90"
  },
  description: {}
})];

var PopupList2 = function PopupList2() {
  return /*#__PURE__*/React.createElement("div", {
    className: _PopupList2Module.default.container
  }, /*#__PURE__*/React.createElement("div", {
    className: _PopupList2Module.default.container1
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: _PopupList2Module.default.title
  }, "Cheque Statuses")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_List.default, null, rows.map(function (row, index) {
    var _row$style, _row$style2;

    return /*#__PURE__*/React.createElement(_ListItem.default, {
      key: index,
      sx: {
        display: "flex",
        flexDirection: "row"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: _PopupList2Module.default.listItem
    }, /*#__PURE__*/React.createElement(_ListItemText.default, {
      disableTypography: true,
      primary: row === null || row === void 0 ? void 0 : row.title,
      style: row === null || row === void 0 ? void 0 : (_row$style = row.style) === null || _row$style === void 0 ? void 0 : _row$style.title,
      className: _PopupList2Module.default.listItemTitle
    }), /*#__PURE__*/React.createElement(_ListItemText.default, {
      disableTypography: true,
      primary: row === null || row === void 0 ? void 0 : row.description,
      style: row === null || row === void 0 ? void 0 : (_row$style2 = row.style) === null || _row$style2 === void 0 ? void 0 : _row$style2.description,
      className: _PopupList2Module.default.desc
    })));
  })))), /*#__PURE__*/React.createElement("div", {
    className: _PopupList2Module.default.button
  }, /*#__PURE__*/React.createElement(_UIComponents.Button, {
    item: {
      label: "Done"
    },
    style: {
      fontWeight: "bold"
    }
  })));
};

var _default = PopupList2;
exports.default = _default;