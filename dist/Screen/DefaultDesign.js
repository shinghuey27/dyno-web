import "../App.css";
import Textbox from "../Components/Textbox/Textbox";
import Searchbar from "../Components/Searchbar/Searchbar";
import DatePicker from "../Components/DatePicker/DatePicker";
import Stepper from "../Components/ProgressBar/Stepper";
import Checkbox from "../Components/Checkbox/Checkbox";
import RadioButton from "../Components/RadioButton/RadioButton";
import Switch from "../Components/Switch/Switch";

const DefaultDesign = () => {
  return /*#__PURE__*/React.createElement("fieldset", {
    className: "field",
    style: {
      padding: "2rem"
    }
  }, /*#__PURE__*/React.createElement(Textbox, {
    label: true,
    text: true,
    description: true,
    error: true
  }), /*#__PURE__*/React.createElement(Searchbar, {
    label: true,
    text: true,
    data: true,
    listBox: true,
    item: true,
    icon: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 60
    }
  }), /*#__PURE__*/React.createElement(Stepper, {
    stepOne: true,
    stepTwo: true,
    label: true
  }), /*#__PURE__*/React.createElement(DatePicker // container={{ style: {backgroundColor:'yellow'} }}
  , {
    label: 'Calendar',
    datePicker: {
      showYearDropdown: true
    }
  }), /*#__PURE__*/React.createElement(RadioButton, {
    label: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: true
  }));
};

export default DefaultDesign;