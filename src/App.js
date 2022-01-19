import "./App.css";
import Button from "./Components/Button/Button";
import Label from "./Components/Label/Label";
import Sidebar from "./Components/Sidebar/Sidebar";
import Text from "./Components/Textbox/Text";
import Checkbox from "./Components/Checkbox/Checkbox";
import Switch from "./Components/Switch/Switch";
import Radio from "./Components/RadioButton/Radio";
import DatePick from "./Components/Date/DatePick";
import Dropdown from "./Components/Select/Dropdown";
import Progress from "./Components/ProgressBar/Progress";
import Tooltips from "./Components/Tooltips/Tooltips";
function App() {
  return (
    <div>
    <Sidebar />
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
      <Dropdown />
      <Progress />
      <Tooltips/>
    </fieldset>
    </div>
  );
}

export default App;
