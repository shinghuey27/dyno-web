import "./App.css";
import Button from "./Components/Button/Button";
import Label from "./Components/Label/Label";
// import Sidebar from "./Components/Sidebar/Sidebar";
import Text from "./Components/Textbox/Text";
import Checkbox from "./Components/Checkbox/Checkbox";
import Switch from "./Components/Switch/Switch";
import Radio from "./Components/RadioButton/Radio";
import DatePick from "./Components/Date/DatePick";
import Dropdown from "./Components/Select/Dropdown";
import Progress from "./Components/ProgressBar/Progress";
import Tooltips from "./Components/Tooltips/Tooltips";

import { arrayOfStrings, options, optionsSample, topAccount, topBanks } from "./SampleData/List";
import DropdownSearch from "./Components/Select/DropdownSearch/DropdownSearch";

function App(props) {
  return (

    <fieldset className="field" style={{ padding: "2rem" }}>
      <Switch />
      <div className="inputContainer">
        <Label />
        <Text />
      </div>
      <Checkbox />
      <Radio />
      <Button />
      <DatePick />
      <Dropdown options={options} />

      {/* <Tooltips label=''>
        <Progress />
      </Tooltips> */}

      <Progress />

      <DropdownSearch dropdownType='2' label={'Recepient Bank'} listOptions={topBanks} containerStyle={{ marginTop: 30 }} />

      <Button disabled style={{ marginTop: 30 }}></Button>

      <DropdownSearch dropdownType='3' label={'Account'} listOptions={topAccount} containerStyle={{ marginTop: 40 }} />




    </fieldset>

  );
}

export default App;
