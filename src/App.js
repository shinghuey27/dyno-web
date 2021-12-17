import "./App.css";
import Button from "./Components/Button/Button";
import Label from "./Components/Label/Label";
import Sidebar from "./Components/Sidebar/Sidebar";
import Text from "./Components/Textbox/Text";
import Checkbox from "./Components/Checkbox/Checkbox";
import Switch from "./Components/Switch/Switch";
import Fieldset from "./Components/Fieldset/Fieldset";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      {/* <Sidebar /> */}
      <Switch />
      <div className="inputContainer">
        <Label />
        <Text />
      </div>
      {/* <div> */}
        <Checkbox />
      {/* </div> */}
      <Button />

      <div className="App">
      Select your pizza topping:
      <div className="topping">
        <input type="checkbox" id="topping" name="topping" value="Paneer" />
        Paneer
      </div>
    </div>

    {/* <div>
    <Fieldset />
    </div> */}
    </div>
  );
}

export default App;
