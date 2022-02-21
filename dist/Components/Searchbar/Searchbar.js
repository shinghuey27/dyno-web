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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Searchbar = function Searchbar(props) {
  var id = props.id,
      name = props.name,
      field = props.field,
      error = props.error,
      item = props.item,
      text = props.text,
      listBox = props.listBox,
      listItem = props.listItem,
      icon = props.icon,
      iconStyle = props.iconStyle,
      listboxStyle = props.listboxStyle;

  var _ref = item || {
    label: ""
  },
      label = _ref.label,
      options = _ref.options,
      placeholder = _ref.placeholder,
      description = _ref.description;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      toggleShowList = _useState2[0],
      setToggleShowList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    value: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1]; // const { child, error, name, item, field } = props; <- props for integration


  var _ref2 = field || {
    onChange: function onChange() {}
  },
      value = _ref2.value,
      onChange = _ref2.onChange;

  ;
  var defaultData = options && options.length ? options : _List2.sampleItem;

  var toggle = function toggle() {
    return setToggleShowList(!toggleShowList);
  };

  var update = function update(e) {
    setSelected(e);
    onChange(e);
    toggle();
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    id: id // <-- need to check id and name molecules interaction
    ,
    name: name
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement(_Textbox.default, {
    text: text,
    description: description,
    error: error,
    field: {
      // onBlur: () => toggle(), // <-- could try resolve this using redux, or hooks, listen to onChange if active , then process onChange first , check in next iteration
      onFocus: function onFocus() {
        return toggle();
      },
      value: selected['value']
    },
    item: {
      label: label,
      placeholder: placeholder
    } // <-- since we resuse textbox, textbox still accepts item props

  }), /*#__PURE__*/_react.default.createElement("div", null, icon && /*#__PURE__*/_react.default.createElement(_KeyboardArrowDown.default, _extends({
    style: _objectSpread({}, iconStyle)
  }, icon)))), /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({}, listboxStyle)
  }, toggleShowList && /*#__PURE__*/_react.default.createElement(_List.default, {
    data: defaultData,
    listBox: listBox,
    item: listItem,
    onChange: update
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