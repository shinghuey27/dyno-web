import "../App.css";
import Textbox from "../Components/Textbox/Textbox";
import Searchbar from "../Components/Searchbar/Searchbar";
import DatePicker from "../Components/DatePicker/DatePicker";
import Stepper from "../Components/ProgressBar/Stepper";
import { CalendarContainer } from "react-datepicker";
import Checkbox from "../Components/Checkbox/Checkbox";
import RadioButton from "../Components/RadioButton/RadioButton";
import { optionsSample, sampleItem } from "../SampleData/List";
import Switch from "../Components/Switch/Switch";
import { Button } from "../Components";

const renderCalendar = ({
  className,
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      background: "#216ba5",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(CalendarContainer, {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#f0f0f0"
    }
  }, "What is your favorite day?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children)));
};

const CustomDesign = () => {
  return /*#__PURE__*/React.createElement("fieldset", {
    className: "field",
    style: {
      padding: "2rem"
    }
  }, /*#__PURE__*/React.createElement(Textbox, {
    label: true,
    text: true,
    description: true,
    error: true,
    label: {
      label: "ID Number 2",
      className: "labelClass"
    },
    tooltip: {
      label: "abc"
    },
    text: {
      className: "textClass"
    },
    description: {
      label: "description 2"
    },
    error: {
      label: "*Please enter valid ID number",
      className: "errorClass"
    }
  }), /*#__PURE__*/React.createElement(Searchbar, {
    label: true,
    text: true,
    label: {
      label: "Search"
    },
    description: {
      label: "this is search bar"
    },
    data: optionsSample,
    text: {
      style: {
        border: "1px solid #ddd",
        borderRadius: "4px",
        height: 40,
        width: 278,
        margin: 0,
        fontSize: "14px",
        fontWeight: 400,
        fontFamily: "Lato",
        boxSizing: "border-box"
      }
    },
    listBox: {
      style: {
        backgroundColor: "#44444F",
        margin: 0,
        zIndex: 200,
        position: "absolute",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        borderRadius: 8,
        boxShadow: "0.5px 1px 1px 1px rgba(0, 0, 0, 0.05)",
        padding: 10,
        width: 260,
        top: -40,
        overflow: "scroll",
        height: 50,
        overflowX: "hidden"
      },
      className: "listBox"
    },
    item: {
      style: {
        backgroundColor: "#44444F"
      },
      className: "itemList"
    },
    icon: {
      style: {
        marginTop: 50
      }
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 60
    }
  }), /*#__PURE__*/React.createElement(Stepper, {
    stepOne: true,
    stepTwo: true // stepThree
    // label
    ,
    stepper: {
      style: {
        display: "flex",
        flex: 1
      }
    },
    stepOne: {
      style: {
        backgroundColor: "white",
        flex: 1,
        fontSize: 14,
        height: 20
      },
      text: "Select your goal"
    },
    stepTwo: {
      style: {
        backgroundColor: "white",
        flex: 1,
        fontSize: 14,
        height: 20,
        marginLeft: 20
      },
      text: "Define your goal"
    },
    hr: true // label={{ label: 'Step 2/3' }}
    ,
    hr: {
      style: {
        border: "1px solid black",
        flex: 1,
        height: 0.1,
        marginTop: 22
      }
    }
  }), /*#__PURE__*/React.createElement(DatePicker // container={{ style: {backgroundColor:'yellow'} }}
  , {
    label: "Calendar",
    datePicker: {
      showYearDropdown: true,
      // style: {},
      // calendarClassName: 'datepick2',
      calendarContainer: ({
        className,
        children
      }) => renderCalendar({
        className,
        children
      })
    }
  }), /*#__PURE__*/React.createElement(RadioButton, {
    label: "new label"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "new label"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: true,
    checkMark: {
      style: {
        backgroundColor: "red"
      }
    },
    container: {
      style: {
        color: "green",
        "&::after": {}
      }
    }
  }));
};

export default CustomDesign;