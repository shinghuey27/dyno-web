import "./Text.css";

const Text = (props) => {
  const { id, name, placeholder,container } = props;

  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      {...container}
    ></input>
  );
};

Text.defaultProps = {
  className: "text"
};

export default Text;
