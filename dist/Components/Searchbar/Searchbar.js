"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List/List"));

var _Textbox = _interopRequireDefault(require("../Textbox/Textbox"));

var _KeyboardArrowDown = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowDown"));

var _List2 = require("../../SampleData/List");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Searchbar = function Searchbar(props) {
  var id = props.id,
      name = props.name,
      field = props.field,
      error = props.error,
      data = props.data,
      label = props.label,
      text = props.text,
      description = props.description,
      listBox = props.listBox,
      item = props.item,
      icon = props.icon,
      iconStyle = props.iconStyle,
      listboxStyle = props.listboxStyle; // const { child, error, name, item, field } = props; <- props for integration

  var _ref = field || {
    onChange: function onChange() {}
  },
      onChange = _ref.onChange;

  ;
  var defaultData = data && data.length ? data : _List2.sampleItem;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement(_Textbox.default, {
    label: label,
    text: text,
    description: description,
    error: error
  }), /*#__PURE__*/_react.default.createElement("div", null, icon && /*#__PURE__*/_react.default.createElement(_KeyboardArrowDown.default, _extends({
    style: _objectSpread({}, iconStyle)
  }, icon)))), /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({}, listboxStyle)
  }, data && /*#__PURE__*/_react.default.createElement(_List.default, {
    data: defaultData,
    listBox: listBox,
    item: item,
    onChange: onChange
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