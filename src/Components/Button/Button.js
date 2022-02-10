import './Button.css';
import '../../index.css';
const Button = (props) => {

  const { disabled = false, label='Next' } = props;
  const buttonClassName = disabled ? 'button-disabled' : 'button'
  return (

    <button className={buttonClassName} disabled={disabled} {...props}>{label}</button>

  );
};

Button.defaultProps={
  
}

export default Button;
