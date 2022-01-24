import "./Label.css";

const Description = (props) => {
  return <label {...props}>{props.text}</label>;
};
Description.defaultProps = {
  className: "description"
};
export default Description;
