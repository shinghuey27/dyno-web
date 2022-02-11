"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Calendar;

var _react = _interopRequireDefault(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Calendar(_ref) {
  var datePicker = _ref.datePicker;
  return /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, _extends({
    className: "datepick" // calendarContainer={({ className, children }) => renderCalendar({ className, children })}
    // formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
    // dateFormat="d MMMM yyyy"
    // selected={startDate}
    // onChange={(date) => setStartDate(date)}
    // showYearDropdown
    // yearDropdownItemNumber={10}
    // scrollableYearDropdown  

  }, datePicker));
}