"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("../List/List"));

var _Textbox = _interopRequireDefault(require("../Textbox/Textbox"));

var _KeyboardArrowDown = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowDown"));

var _List2 = require("../../SampleData/List");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Searchbar = function Searchbar(props) {
  var data = props.data,
      label = props.label,
      text = props.text,
      description = props.description,
      error = props.error,
      listBox = props.listBox,
      item = props.item,
      icon = props.icon,
      iconStyle = props.iconStyle,
      listboxStyle = props.listboxStyle;
  var defaultData = data && data.length ? data : _List2.sampleItem;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex" // backgroundColor: 'red'

    }
  }, /*#__PURE__*/_react.default.createElement(_Textbox.default, {
    label: label,
    text: text,
    description: description,
    error: error
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_KeyboardArrowDown.default, _extends({
    style: _objectSpread({}, iconStyle)
  }, icon)))), /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({}, listboxStyle)
  }, data && /*#__PURE__*/_react.default.createElement(_List.default, {
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
  data: _propTypes.default.array.isRequired
};
var _default = Searchbar;
exports.default = _default;