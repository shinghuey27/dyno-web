import { TextField } from "@mui/material";
import "./Text.css";

const Text = (props) => {
  const { id, name, placeholder } = props;
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      {...props}
    ></input>
  );
};

export default Text;
