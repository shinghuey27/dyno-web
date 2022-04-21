"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MUITable;

var React = _interopRequireWildcard(require("react"));

var _Table = _interopRequireDefault(require("@mui/material/Table"));

var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));

var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));

var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));

var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));

var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createData(item, value) {
  return {
    item: item,
    value: value
  };
}

var rows = [createData("Available Balance", "Derek Goh"), createData("Available Credit Limit", "RM 50,000.00"), createData("Due Date", "25 January 2021"), createData("Minimum Payment", "RM 750.00"), createData("Last Payment Amount", "RM 10,810.00"), createData("Last Payment Date", "22 December 2020"), createData("Last Statement Date", "22 December 2020"), createData("No. of Transaction Accumulated to Date", "RM 0.00")];
var cellTableStyle = {
  paddingLeft: 0,
  paddingTop: 12,
  paddingBottom: 12,
  border: 0,
  fontFamily: "Rubik",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  color: "#6F7FAF"
};
var cellTableStyleHeader = {
  padding: 0,
  borderBottom: 0,
  borderTop: "1px solid #C7C7C7"
};

function MUITable() {
  return /*#__PURE__*/React.createElement(_TableContainer.default, {
    component: _Paper.default,
    style: {
      padding: 20,
      borderRadius: 10,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    fontFamily: "Rubik",
    fontSize: "20px",
    color: "#171725",
    style: {
      marginBottom: 32
    }
  }, "Account Details"), /*#__PURE__*/React.createElement(_Table.default, {
    sx: {},
    "aria-label": "simple table"
  }, /*#__PURE__*/React.createElement(_TableHead.default, null, /*#__PURE__*/React.createElement(_TableRow.default, null, /*#__PURE__*/React.createElement(_TableCell.default, {
    style: cellTableStyleHeader
  }), /*#__PURE__*/React.createElement(_TableCell.default, {
    style: cellTableStyleHeader,
    align: "left"
  }))), /*#__PURE__*/React.createElement(_TableBody.default, null, rows.map(function (row, index) {
    return /*#__PURE__*/React.createElement(_TableRow.default, {
      key: index,
      sx: {
        "&:last-child td, &:last-child th": {
          border: 0
        }
      }
    }, /*#__PURE__*/React.createElement(_TableCell.default, {
      component: "th",
      style: cellTableStyle,
      scope: "row"
    }, row === null || row === void 0 ? void 0 : row.item), /*#__PURE__*/React.createElement(_TableCell.default, {
      style: _objectSpread(_objectSpread({}, cellTableStyle), {}, {
        color: "black"
      }),
      align: "left"
    }, row === null || row === void 0 ? void 0 : row.value));
  }))));
}