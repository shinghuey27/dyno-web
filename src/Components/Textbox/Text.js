import "./Text.css";

const Text = (props) => {
  return (
    <input
      type="text"
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      className={props.error === true ? "error" : "text"}
      {...props}
    ></input>
  );
};

export default Text;
