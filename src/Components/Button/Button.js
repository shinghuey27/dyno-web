import './Button.css';
import '../../index.css';
import PropTypes from "prop-types";

const Button = (props) => {

  const { disabled, label } = props;

  const buttonType = () => disabled ?
    (<button className='button-disabled' {...props}>{label}</button>) :
    (<button className='button' {...props}>{label}</button>);

  return (
    <>
      {buttonType()}
    </>

  );
};

Button.defaultProps = {
  label: 'Next',
  disabled: false
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Button;
