import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Dropdown.css";

const Dropdown = (props) => {
  const { options, formStyle } = props;

  return (
    <Form.Select aria-label="Default select example" style={{ ...formStyle }}>
      {/* <option >Open this select menu</option> */}
      {options.map((option) => (
        <option
          key={option?.value}
          className="option"
          value={option?.value}
          style={{ display: "flex" }}
        >
          {option?.label}
        </option>
      ))}
    </Form.Select>
  );
};

Dropdown.defaultProps = {
  options: [{ label: "", value: "" }],
  child: false
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  child: PropTypes.bool
};

export default Dropdown;
