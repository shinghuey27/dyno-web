import "./Label.css";

const Description = (props) => {
  return <label {...props}>{props.label}</label>;
};
Description.defaultProps = {
  className: "description"
};
export default Description;
