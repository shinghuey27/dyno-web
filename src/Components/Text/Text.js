import sharedStyle from "./Text.css";

const Text = (props) => {
  return (
    <input
      type="text"      
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      {...props}
    ></input>
  );
};
Text.defaultProps = {
  className: "text"
};

export default Text;
