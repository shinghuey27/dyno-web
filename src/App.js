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

import {
  arrayOfStrings,
  options,
  optionsSample,
  topAccount,
  topBanks
} from "./SampleData/List";
import DropdownSearch from "./Components/Select/DropdownSearch/DropdownSearch";
import { useState } from "react";
import TextboxDyno from "./Components/TextboxDyno/TextboxDyno";
import { color } from "@mui/system";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Icon } from "@mui/material";
import TextboxDyno_0 from "./Components/TextboxDyno/TextboxDyno_0";
import TextboxDynoSH from "./Components/TextboxDyno/TextboxDynoSH";

function App() {
  const [demo, setDemo] = useState(true);
  const [inputError, setInputError] = useState(false);

  return (
    <fieldset className="field" style={{ padding: "2rem" }}>
      <TextboxDynoSH
        labelText="Name"
        tooltipText="Here to write your biller code"
        descText="Biller code description"
        errorText="*Name must be at least 5 characters"
        // labelClassName="labelClass"
        // descClassName="descClass"
        // errorClassName="errorClass"

        labelStyle={{
          color: "#1e2225",
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Lato"
        }}
        textStyle={{
          border: "1px solid #ddd",
          borderRadius: "4px",
          height: 40,
          width: "100%",
          margin: 0,
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Lato"
        }}
        // descStyle={{ display: "inline-block", fontSize:"10px" }}
        errorStyle={{
          textAlign: "right",
          width: "100%",
          color: "#c00",
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Lato"
        }}
      />
    </fieldset>
  );
}

export default App;
