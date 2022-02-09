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
import Radio from "./Components/RadioButton/Radio";
import RadioButton from "./Components/RadioButton/RadioButton";
import { fontSize } from "@mui/system";
import Textbox from "./Components/Textbox/Textbox";
import Checkbox from "./Components/Checkbox/Checkbox";
const data = [
  { id: 1, label: "Instant transfer" },
  { id: 2, label: "Duitnow transfer" },
  { id: 3, label: "Grab Pay" }
];

function App() {
  return (
    <fieldset className="field" style={{ padding: "2rem" }}>

      <Textbox
        label={{
          label: "Account"
        }}
        text
        description
        error
        tooltip
      />
    </fieldset>
  );
}

export default App;
