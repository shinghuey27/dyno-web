import Searchbar from "./Components/Searchbar/Searchbar";
import CustomDesign from "./Screen/CustomDesign";
import DefaultDesign from "./Screen/DefaultDesign";
import Button from './Components/Button/Button'
import { Textbox } from "./Components";

function App(props) {  
  return (
    <div style={{ display: "flex" }}>
      {/* <DefaultDesign />     
      <CustomDesign /> */}
      <div>
        <Textbox
          text
          label
          description
          error />

        <Button style={{ marginTop: 40 }}  label='Pay Now'/>
        
      </div>
    </div>
  );
}

export default App;
