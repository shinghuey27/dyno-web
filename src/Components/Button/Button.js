import './Button.css';
import '../../index.css';
import PropTypes from "prop-types";

const Button = (props) => {

  const {
    disabled,
    label
  } = props;

  const className = disabled ? 'button-disabled' : 'button';

  return <button className={className} disabled={disabled} {...props}>{label}</button>;

};

Button.defaultProps = {
  label: 'Next',
  disabled: false
}


Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
