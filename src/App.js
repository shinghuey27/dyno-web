import "./App.css";
// import Button from "./Components/Button/Button";
// import Label from "./Components/Label/Label";
// import Description from "./Components/Label/Description";
// import Sidebar from "./Components/Sidebar/Sidebar";
// import Text from "./Components/Textbox/Text";
// import Password from "./Components/Textbox/Password";
// import Currency from "./Components/Textbox/Currency";
// import Checkbox from "./Components/Checkbox/Checkbox";
// import Switch from "./Components/Switch/Switch";
// import Radio from "./Components/RadioButton/Radio";
// import DatePick from "./Components/Date/DatePick";
// import Dropdown from "./Components/Select/Dropdown";
// import Progress from "./Components/ProgressBar/Progress";
// import Tooltips from "./Components/Tooltips/Tooltips";
// import ErrorMessage from "./Components/Label/ErrorMessage";
// import HelpOutline from "./Components/Icon/HelpOutline";
// import HyperLink from "./Components/Link/HyperLink";
// import {
//   arrayOfStrings,
//   options,
//   optionsSample,
//   topAccount,
//   topBanks
// } from "./SampleData/List";
// import DropdownSearch from "./Components/Select/DropdownSearch/DropdownSearch";
// import TextboxDyno from "./Components/Textbox/TextboxDyno";
// import { color } from "@mui/system";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// import { Icon } from "@mui/material";
// import TextboxDyno_0 from "./Components/Textbox/TextboxDyno_0";

import { useState } from "react";
import Textbox from "./Components/Textbox/Textbox";

function App() {
  const [demo, setDemo] = useState(true);
  const [inputError, setInputError] = useState(false);
  // 2 methods for custom styling
  return (
    <fieldset className="field" style={{ padding: "2rem" }}>
      {/* inline styling */}
      <Textbox
        label={{
          text: "ID Number",
          style: {
            color: "#1e2225",
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Lato"
          }
        }}
        tooltip={{ text: "abc" }}
        text={{
          style: {
            border: "1px solid #ddd",
            borderRadius: "4px",
            height: 40,
            width: "100%",
            margin: 0,
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Lato",
            boxSizing: "border-box"
          }
        }}
        description={{
          text: "hello"
        }}
        error={{
          text: "*Please enter valid passport number",
          style: {
            textAlign: "right",
            width: "100%",
            color: "#c00",
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Lato"
          }
        }}
      />
      {/* className styling */}
      <Textbox
        label={{
          text: "ID Number 2",
          className: "labelClass"
        }}
        tooltip={{ text: "abc" }}
        text={{
          className: "textClass"
        }}
        description={{
          text: "description 2"
        }}
        error={{
          text: "*Please enter valid ID number",
          className: "errorClass"
        }}
      />
    </fieldset>
  );
}

export default App;
