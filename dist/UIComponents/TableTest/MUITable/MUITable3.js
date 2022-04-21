"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MUITable3;

var React = _interopRequireWildcard(require("react"));

var _Table = _interopRequireDefault(require("@mui/material/Table"));

var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));

var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));

var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));

var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));

var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

var _material = require("@mui/material");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _faEllipsisH = require("@fortawesome/free-solid-svg-icons/faEllipsisH");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createData(account, date, amount) {
  return {
    account: account,
    date: date,
    amount: amount
  };
}

var rows = [createData("Duitnow QR Bizbox Cafe Sdn Bhd", "23 Jan 2020", "10,000.00"), createData("SME First Account", "23 Jan 2020", "-2,000.00"), createData("Timothy and Brothers Fresh", "23 Jan 2020", "-99,120.00"), createData("Genting Comodities Trading", "23 Jan 2020", "-20,000.00")];
var cellTableStyle = {
  border: 0,
  flex: 1,
  fontFamily: "Rubik",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  color: "black"
};

var renderAmount = function renderAmount(val) {
  if (val < 0) return /*#__PURE__*/React.createElement("span", {
    style: {
      color: "red"
    }
  }, "RM ", val);else return /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#00CA90"
    }
  }, "RM ", val);
};

function MUITable3() {
  return /*#__PURE__*/React.createElement(_TableContainer.default, {
    component: _Paper.default,
    style: {
      padding: 20,
      width: "auto"
    }
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    fontFamily: "Rubik",
    fontSize: "20px",
    color: "#171725",
    style: {
      marginBottom: 32
    }
  }, "Users"), /*#__PURE__*/React.createElement(_Table.default, {
    sx: {},
    "aria-label": "simple table"
  }, /*#__PURE__*/React.createElement(_TableHead.default, {
    style: {
      backgroundColor: "#FFDD00"
    }
  }, /*#__PURE__*/React.createElement(_TableRow.default, null, /*#__PURE__*/React.createElement(_TableCell.default, {
    style: {
      borderBottom: 0
    },
    width: "50%"
  }, "DESCRIPTION"), /*#__PURE__*/React.createElement(_TableCell.default, {
    style: {
      borderBottom: 0
    },
    width: "15%"
  }, "DATE"), /*#__PURE__*/React.createElement(_TableCell.default, {
    style: {
      borderBottom: 0
    },
    align: "center"
  }, "AMOUNT"), /*#__PURE__*/React.createElement(_TableCell.default, {
    style: {
      borderBottom: 0
    },
    align: "center"
  }))), /*#__PURE__*/React.createElement(_TableBody.default, null, rows.map(function (row, index) {
    return /*#__PURE__*/React.createElement(_TableRow.default, {
      key: index,
      sx: {
        "&:last-child td, &:last-child th": {
          border: 0
        }
      }
    }, /*#__PURE__*/React.createElement(_TableCell.default, {
      style: _objectSpread(_objectSpread({}, cellTableStyle), {}, {
        display: "flex",
        flexDirection: "row"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 40,
        width: 40,
        backgroundColor: "#01CCCE",
        borderRadius: 15,
        alignItems: "center",
        color: "white",
        display: "flex",
        justifyContent: "center"
      }
    }, row === null || row === void 0 ? void 0 : row.account.slice(0, 2)), /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: "center",
        marginLeft: 13
      }
    }, row === null || row === void 0 ? void 0 : row.account)), /*#__PURE__*/React.createElement(_TableCell.default, {
      component: "th",
      style: cellTableStyle,
      scope: "row"
    }, row === null || row === void 0 ? void 0 : row.date), /*#__PURE__*/React.createElement(_TableCell.default, {
      style: cellTableStyle,
      align: "center"
    }, renderAmount(parseFloat(row === null || row === void 0 ? void 0 : row.amount))), /*#__PURE__*/React.createElement(_TableCell.default, {
      style: cellTableStyle,
      align: "center"
    }, /*#__PURE__*/React.createElement(_material.IconButton, {
      "aria-label": "Example",
      style: {
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _faEllipsisH.faEllipsisH
    }))));
  }))));
}