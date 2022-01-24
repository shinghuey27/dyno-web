import "./App.css";
import Button from "./Components/Button/Button";
import Label from "./Components/Label/Label";
import Description from "./Components/Label/Description";

import Sidebar from "./Components/Sidebar/Sidebar";
import Text from "./Components/Textbox/Text";
import Password from "./Components/Textbox/Password";
import Currency from "./Components/Textbox/Currency";

import Checkbox from "./Components/Checkbox/Checkbox";
import Switch from "./Components/Switch/Switch";
import Radio from "./Components/RadioButton/Radio";
import DatePick from "./Components/Date/DatePick";
import Dropdown from "./Components/Select/Dropdown";
import Progress from "./Components/ProgressBar/Progress";
import Tooltips from "./Components/Tooltips/Tooltips";
import ErrorMessage from "./Components/Label/ErrorMessage";
import HelpOutline from "./Components/Icon/HelpOutline";
import HyperLink from "./Components/Link/HyperLink";

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
import Textbox from "./Components/TextboxDyno/TextboxDynoSH";

function App() {
  const [demo, setDemo] = useState(true);
  const [inputError, setInputError] = useState(false);

  return (
    <fieldset className="field" style={{ padding: "2rem" }}>
      
      
      <Textbox

        label={{
          label: 'Account Number 2',
          style: {
            color: 'green'
          }
        }}
        
        error={{
          label: 'Error Message',
          style: {
            color: 'red'
          }
        }}


      />

    </fieldset>
  );
}

export default App;
