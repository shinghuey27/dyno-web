function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import './Button.css';
import '../../index.css';
import PropTypes from "prop-types";

const Button = props => {
  const {
    disabled,
    label
  } = props;
  const className = disabled ? 'button-disabled' : 'button';
  return /*#__PURE__*/React.createElement("button", _extends({
    className: className,
    disabled: disabled
  }, props), label);
};

Button.defaultProps = {
  label: 'Next',
  disabled: false
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  disabled: PropTypes.bool
};
export default Button;