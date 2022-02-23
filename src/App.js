import Searchbar from "./Components/Searchbar/Searchbar";
import CustomDesign from "./Screen/CustomDesign";
import DefaultDesign from "./Screen/DefaultDesign";
import Button from './Components/Button/Button'
import { Checkbox, DatePicker, Textbox } from "./Components";
import { error } from "./SampleData/SampleErrorForm";
import { sampleItem_Props_ForSelect } from "./SampleData/SamplePropsIntegration";
import { CalendarContainer } from "react-datepicker";
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

        {/* <DatePicker /> */}
        <DatePicker
          // container={{ style: {backgroundColor:'yellow'} }}
          label={"Calendar"}
          datePicker={{
            showYearDropdown: false,
            // style: {},
            // calendarClassName: 'datepick2',
            // calendarContainer: ({ className, children }) =>
            //   renderCalendar({ className, children })
          }}
        />

        {/* <Button style={{ marginTop: 40 }} label='Pay Now' managedCallback={() => { console.log('button click') }} /> */}


        <Textbox
          label
          text
          name='amount'

          description
          error={error}
          label={{
            label: "ID Number 2",
            className: "labelClass"
          }}
          tooltip={{ label: "abc" }}
          text={{
            className: "textClass"
          }}
          description={{
            label: "description 2"
          }}
          error={{
            label: "*Please enter valid ID number",
            className: "errorClass"
          }}
        />

        {/* <Checkbox
          // label='asd'
          item={{label:'my label'}}
          checkMark={{ style: { backgroundColor: "red" } }}
          container={{ style: { color: "green", "&::after": {} } }}
        /> */}
      </div>
    </div>
  );
}

export default App;
