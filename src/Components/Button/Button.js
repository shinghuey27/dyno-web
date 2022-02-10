import './Button.css';
import '../../index.css';
const Button = (props) => {

  const { disabled = false, label='Next' } = props;

  return (

    <button className={disabled ? 'button-disabled' : 'button'} disabled={disabled} {...props}>{label}</button>

  );
};

Button.defaultProps={
  
}

export default Button;
