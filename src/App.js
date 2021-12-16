import "./App.css";
import Button from "./Components/Button/Button";
import Label from "./Components/Label/Label";
import Sidebar from "./Components/Sidebar/Sidebar";
import Text from "./Components/Textbox/Text";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      {/* <Sidebar /> */}
      <div className="inputContainer">
        <Label />
        <Text />
      </div>
      <Button />
    </div>
  );
}

export default App;
