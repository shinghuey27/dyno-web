import Searchbar from "./Components/Searchbar/Searchbar";
import CustomDesign from "./Screen/CustomDesign";
import DefaultDesign from "./Screen/DefaultDesign";
import Button from './Components/Button/Button'
import { Checkbox, DatePicker, Textbox } from "./Components";
import { error } from "./SampleData/SampleErrorForm";
import { sampleItem_Props_ForSelect } from "./SampleData/SamplePropsIntegration";
import { CalendarContainer } from "react-datepicker";
import Select from "./Components/Select/Select";
import { sampleItem } from "./SampleData/List";
const renderCalendar = ({ className, children }) => {
  return (
    <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
      <CalendarContainer className={className}>
        <div style={{ background: "#f0f0f0" }}>What is your favorite day?</div>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};


function App(props) {
  return (
    <div style={{ display: "flex" }}>
      {/* <DefaultDesign />     
      <CustomDesign /> */}
      <div>

        <Button style={{ marginTop: 40 }} label='Pay Now' managedCallback={() => { console.log('button click') }} error={error}/>


        <Checkbox
          name='checkbox2'
          // error={error}
          item={{ label: 'my label' }}
        // checkMark={{ style: { backgroundColor: "red" } }}
        // container={{ style: { color: "green", "&::after": {} } }}
        />

        <Select
          item={{ options: sampleItem , label:'calendar'}} 
          selectStyle={{}}/>
      </div>
    </div>
  );
}

export default App;
