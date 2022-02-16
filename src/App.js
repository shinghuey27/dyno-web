import Searchbar from "./Components/Searchbar/Searchbar";
import CustomDesign from "./Screen/CustomDesign";
import DefaultDesign from "./Screen/DefaultDesign";
import Button from './Components/Button/Button'
import { Textbox } from "./Components";
import { error } from "./SampleData/SampleErrorForm";

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
          // error
          error={{}}
          // error={error}
          name='ref1'
           />

        <Button style={{ marginTop: 40 }}  label='Pay Now' managedCallback={()=>{console.log('button click')}}/>
        
      </div>
    </div>
  );
}

export default App;
