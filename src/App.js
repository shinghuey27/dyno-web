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


        <Textbox
          item={{ label: 'My Account', description: 'desc', }}
          labelStyle={{style:{color:'black'}}}
          textboxStyle={{
            // className: "textClass"
            style:{backgroundColor:'green'}
          }}          
          errorStyle={{ style: { color: 'blue' } }}  
          descriptionStyle={{style:{color:'yellow'}}}      
          error  
        />

        {/* <Button style={{ marginTop: 40 }} label='Pay Now' managedCallback={() => { console.log('button click') }} error={error} /> */}


        {/* <Checkbox
          name='checkbox2'
          // error={error}
          item={{ label: 'my label' }}
          checkMark={{ style: { backgroundColor: "red" } }}
          container={{ style: { color: "green", "&::after": { color: 'yellow' } } }}
        /> */}

        {/* <DatePicker 
          // item={{ label: 'my calendar' }}
          // datePicker={{
          //   showYearDropdown: true
          // }}
          // showYearDropdown={true}
        /> */}

        {/* <Checkbox
          // label
          item={{label:'check box 1'}}
          // checkMarkStyle={{ style: { backgroundColor: "red",} }}
          // containerStyle={{ style: { color: "green", "&::after": {} } }}
        /> */}

        {/* <Select
          item={{ options: sampleItem, label: 'calendar', description:'des' }}
          selectStyle={{}}
          descriptionStyle={{style:{color:'green'}}}
        /> */}

        {/* <Textbox
          item={{ label: 'Text' }}
          labelStyle={{
            // style: { color: 'red', backgroundColor: 'green', }
          }}
          description

        /> */}
        <Button style={{backgroundColor:'blue'}}/>
      </div>
    </div>
  );
}

export default App;
