import "./Label.css";
import PropTypes from "prop-types";

// previously , for label we only open props.label , we kinda limiting the functionality of the default <label div element itself.
// to open back the functionality, we append both props.label and props.children for now, so that 
// we dont have to refactor every molecules that uses label atom
// props: { label , children }
// will fix limitation in next iteration

const Label = (props) => {

  const {
    label,
    children
  } = props;

  return (
    <label
      {...props}
    >
      {label}
      {children}
    </label>);
};



Label.defaultProps = {
  label: "Default Label",
  className: "label"
};

Label.propTypes = {
  value: PropTypes.string.isRequired
  
};

export default Label;
