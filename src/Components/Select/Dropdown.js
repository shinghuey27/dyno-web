import {Form} from 'react-bootstrap';
import "./Dropdown.css"
const options = [
  {
    value: "0",
    label: "2 Months"
  },
  {
    value: "1",
    label: "3 Months"
  },
  {
    value: "2",
    label: "4 Months"
  },
  {
    value: "3",
    label: "5 Months"
  },
  {
    value: "4",
    label: "6 Months"
  },
  {
    value: "5",
    label: "7 Months"
  },
  {
    value: "6",
    label: "8 Months"
  },
  {
    value: "7",
    label: "9 Months"
  },
];

const Dropdown = () => {
  return (
    <Form.Select aria-label="Default select example">
      {/* <option >Open this select menu</option> */}
      {
        options.map ((option)=>
          <option key ={option.value} className="option" value ={option.value}>
            {option.label}
          </option>
        )
      }

    </Form.Select>
  );
};

export default Dropdown;
