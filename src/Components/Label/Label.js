import "./Label.css";
import PropTypes from "prop-types";

const Label = (props) => {
  return (
    <label className="label" {...props}>
      {props.value}
    </label>
  );
};

Label.propTypes = {
  value: PropTypes.string.isRequired
};

export default Label;
