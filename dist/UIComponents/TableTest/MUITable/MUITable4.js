"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MUITable4;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@mui/material/styles");

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Table = _interopRequireDefault(require("@mui/material/Table"));

var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));

var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));

var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));

var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));

var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));

var _TableSortLabel = _interopRequireDefault(require("@mui/material/TableSortLabel"));

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));

var _Checkbox2 = _interopRequireDefault(require("../../Checkbox/Checkbox"));

var _material = require("@mui/material");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _faEllipsisH = require("@fortawesome/free-solid-svg-icons/faEllipsisH");

var _utils = require("@mui/utils");

require("./MUITable4.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function createData(index, receipient, transType, date, amount) {
  return {
    index: index,
    receipient: receipient,
    transType: transType,
    date: date,
    amount: amount
  };
}

var rows = [createData("1", "Tenaga Nasional Bhd", "Payment", "23 Jan 2020", "-100.00"), createData("2", "Eunice Khoo", "Transfer", "23 Jan 2020", "-2,000.00"), createData("3", "Indah Water", "JomPAY", "23 Jan 2020", "-20,000.00")];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc" ? function (a, b) {
    return descendingComparator(a, b, orderBy);
  } : function (a, b) {
    return -descendingComparator(a, b, orderBy);
  };
} // This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly


function stableSort(array, comparator) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = comparator(a[0], b[0]);

    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

var headCells = [{
  id: "Receipient",
  numeric: false,
  disablePadding: true,
  label: "RECEIPIENT"
}, {
  id: "TransactionType",
  numeric: false,
  disablePadding: false,
  label: "TRANSACTION TYPE"
}, {
  id: "Date",
  numeric: false,
  disablePadding: false,
  label: "EFFECTIVE DATE"
}, {
  id: "Amount",
  numeric: true,
  disablePadding: false,
  label: "Amount"
}, {
  id: "action",
  numeric: false,
  disablePadding: false,
  label: ""
}];

function EnhancedTableHead(props) {
  var onSelectAllClick = props.onSelectAllClick,
      numSelected = props.numSelected,
      rowCount = props.rowCount,
      onRequestSort = props.onRequestSort;
  return /*#__PURE__*/React.createElement(_TableHead.default, {
    style: {
      backgroundColor: "#E2E2ED"
    }
  }, /*#__PURE__*/React.createElement(_TableRow.default, null, /*#__PURE__*/React.createElement(_TableCell.default, null, /*#__PURE__*/React.createElement(_Checkbox2.default, {
    containerStyle: {
      className: "checkbox-table-container"
    },
    checkMarkStyle: {
      className: "checkbox-table-checkmark"
    }
  })), headCells.map(function (headCell) {
    return /*#__PURE__*/React.createElement(_TableCell.default, {
      key: headCell.id,
      align: "left",
      padding: headCell.disablePadding ? "none" : "normal"
    }, headCell.label);
  })));
}

EnhancedTableHead.propTypes = {
  numSelected: _propTypes.default.number.isRequired,
  onRequestSort: _propTypes.default.func.isRequired,
  onSelectAllClick: _propTypes.default.func.isRequired,
  order: _propTypes.default.oneOf(["asc", "desc"]).isRequired,
  orderBy: _propTypes.default.string.isRequired,
  rowCount: _propTypes.default.number.isRequired
};

function MUITable4() {
  var _React$useState = React.useState("asc"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      order = _React$useState2[0],
      setOrder = _React$useState2[1];

  var _React$useState3 = React.useState("calories"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      orderBy = _React$useState4[0],
      setOrderBy = _React$useState4[1];

  var _React$useState5 = React.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selected = _React$useState6[0],
      setSelected = _React$useState6[1];

  var _React$useState7 = React.useState(0),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      page = _React$useState8[0],
      setPage = _React$useState8[1];

  var _React$useState9 = React.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      dense = _React$useState10[0],
      setDense = _React$useState10[1];

  var _React$useState11 = React.useState(5),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      rowsPerPage = _React$useState12[0],
      setRowsPerPage = _React$useState12[1];

  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = rows.map(function (n) {
        return n.name;
      });
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  var handleClick = function handleClick(event, name) {
    var selectedIndex = selected.indexOf(name);
    var newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  var isSelected = function isSelected(name) {
    return selected.indexOf(name) !== -1;
  }; // Avoid a layout jump when reaching the last page with empty rows.


  var emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  return /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(_Paper.default, {
    sx: {
      width: "100%",
      mb: 2
    }
  }, /*#__PURE__*/React.createElement(_TableContainer.default, null, /*#__PURE__*/React.createElement(_Table.default, {
    sx: {
      minWidth: 750
    },
    "aria-labelledby": "tableTitle",
    size: dense ? "small" : "medium"
  }, /*#__PURE__*/React.createElement(EnhancedTableHead, {
    numSelected: selected.length,
    onSelectAllClick: handleSelectAllClick,
    rowCount: rows.length
  }), /*#__PURE__*/React.createElement(_TableBody.default, null, stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
    var isItemSelected = isSelected(row === null || row === void 0 ? void 0 : row.index);
    var labelId = "enhanced-table-checkbox-".concat(index);
    return /*#__PURE__*/React.createElement(_TableRow.default, {
      hover: true // onClick={(event) => handleClick(event, row?.index)}
      ,
      role: "checkbox",
      "aria-checked": isItemSelected,
      tabIndex: -1,
      key: row === null || row === void 0 ? void 0 : row.index,
      selected: isItemSelected
    }, /*#__PURE__*/React.createElement(_TableCell.default, null, /*#__PURE__*/React.createElement(_Checkbox2.default, {
      containerStyle: {
        className: "checkbox-table-container"
      },
      checkMarkStyle: {
        className: "checkbox-table-checkmark"
      }
    })), /*#__PURE__*/React.createElement(_TableCell.default, {
      component: "th",
      id: labelId,
      scope: "row",
      padding: "none"
    }, row.receipient), /*#__PURE__*/React.createElement(_TableCell.default, {
      align: "left"
    }, row === null || row === void 0 ? void 0 : row.transType), /*#__PURE__*/React.createElement(_TableCell.default, {
      align: "Left"
    }, row === null || row === void 0 ? void 0 : row.date), /*#__PURE__*/React.createElement(_TableCell.default, {
      align: "left"
    }, row === null || row === void 0 ? void 0 : row.amount), /*#__PURE__*/React.createElement(_TableCell.default, {
      align: "left"
    }, /*#__PURE__*/React.createElement(_material.IconButton, {
      "aria-label": "Example",
      style: {
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _faEllipsisH.faEllipsisH
    }))));
  }), emptyRows > 0 && /*#__PURE__*/React.createElement(_TableRow.default, {
    style: {
      height: (dense ? 33 : 53) * emptyRows
    }
  }, /*#__PURE__*/React.createElement(_TableCell.default, {
    colSpan: 6
  })))))));
}