import "./Label.css";

const Description = (props) => {
  return <label {...props}>{props.value}</label>;
};
Description.defaultProps = {
  className: "description"
};
export default Description;
