import Searchbar from "./Components/Searchbar/Searchbar";
import CustomDesign from "./Screen/CustomDesign";
import DefaultDesign from "./Screen/DefaultDesign";
import Button from './Components/Button/Button'

function App() {
  return (
    <div style={{ display: "flex" }}>
      <DefaultDesign />     
      <CustomDesign />
    </div>
  );
}

export default App;
