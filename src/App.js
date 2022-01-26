import styles from "./App.css";
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

  return (
    <fieldset className="field" style={{ padding: "2rem" }}>
      {/* Default */}
      <Textbox />

      {/* Only edit for label  */}
      <Textbox label={{ label: "Testing" }} />
      {/* ------------------------------------------------- */}

      {/* 2 Method of custom styling  */}

      {/* 1. inline styling */}
      <Textbox
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
        description={{ style: { display: "none" } }}
        error={{
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

      {/* 2. className styling */}
      <Textbox
        label={{
          label: "ID Number 2",
          className: "labelClass"
        }}
        tooltip={{ label: "abc" }}
        text={{
          className: "textClass"
        }}
        description={{
          label: "description 2"
        }}
        error={{
          label: "*Please enter valid ID number",
          className: "errorClass"
        }}
      />
    </fieldset>
  );
}

export default App;
