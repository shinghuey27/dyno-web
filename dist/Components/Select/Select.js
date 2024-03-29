"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _Label = _interopRequireDefault(require("../Label/Label"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Select.css");

var _ErrorMessage = _interopRequireDefault(require("../Label/ErrorMessage"));

var _Description = _interopRequireDefault(require("../Label/Description"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var customStyles = {
  control: function control(base, state) {
    return _objectSpread(_objectSpread({}, base), {}, {
      marginTop: 10,
      '&:hover': {
        borderColor: '#74e3e4'
      },
      border: '1px solid lightgray',
      boxShadow: 'none',
      borderRadius: 20
    });
  }
};

var Select = function Select(props) {
  var child = props.child,
      error = props.error,
      name = props.name,
      item = props.item,
      selectStyle = props.selectStyle,
      labelStyle = props.labelStyle,
      descriptionStyle = props.descriptionStyle,
      errorStyle = props.errorStyle,
      _props$field = props.field,
      field = _props$field === void 0 ? {
    onChange: function onChange() {}
  } : _props$field;

  var _ref = item || {
    label: ""
  },
      label = _ref.label,
      options = _ref.options,
      placeholder = _ref.placeholder,
      description = _ref.description;

  var onChange = field.onChange;

  var customOnChange = function customOnChange(e) {
    onChange(e);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    label: label
  }, labelStyle)), /*#__PURE__*/_react.default.createElement(_reactSelect.default, _extends({
    name: name,
    key: name,
    selec: true,
    id: name,
    placeholder: placeholder,
    styles: customStyles,
    options: options,
    onChange: customOnChange
  }, field, selectStyle)), /*#__PURE__*/_react.default.createElement("div", null, description && /*#__PURE__*/_react.default.createElement(_Description.default, _extends({
    label: description
  }, descriptionStyle))), /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, _extends({}, errorStyle, props)));
}; // Select.defaultProps = {
//     selectStyle: customStyles,
// };


Select.propTypes = {};
var _default = Select;
exports.default = _default;