import "./Label.css";
import PropTypes from "prop-types";

const Description = (props) => {
  const { label, container } = props;
  return (
    <>
      <label {...container}>{label}</label>
    </>
  );
};

Description.defaultProps = {
  label: "Default Description",
  className: "description"
};

Description.propTypes = {
  value: PropTypes.string.isRequired
};
export default Description;
