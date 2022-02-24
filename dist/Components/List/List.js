"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./List.css");

var _ListItem = _interopRequireDefault(require("./ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var List = function List(props) {
  var data = props.data,
      listBox = props.listBox,
      item = props.item,
      containerStyle = props.containerStyle,
      onChange = props.onChange,
      classNameContainer = props.classNameContainer;
  return /*#__PURE__*/_react.default.createElement("ul", _extends({
    className: classNameContainer,
    style: _objectSpread({}, containerStyle)
  }, listBox), data && /*#__PURE__*/_react.default.createElement(_ListItem.default, _extends({
    data: data,
    onChange: onChange
  }, item)));
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
  }
};
List.propTypes = {
  data: _propTypes.default.array.isRequired
};
var _default = List;
exports.default = _default;