import "./Label.css";

const Description = (props) => {
  return <label className="description" {...props} >{props.value}</label>;
};

export default Description;
