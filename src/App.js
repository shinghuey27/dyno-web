import Searchbar from "./Components/Searchbar/Searchbar";
import CustomDesign from "./Screen/CustomDesign";
import DefaultDesign from "./Screen/DefaultDesign";
import Button from './Components/Button/Button'
import { DatePicker, Textbox } from "./Components";
import { error } from "./SampleData/SampleErrorForm";
import { sampleItem_Props_ForSelect } from "./SampleData/SamplePropsIntegration";
import { CalendarContainer } from "react-datepicker";



function App(props) {
  return (
    <div style={{ display: "flex" }}>
      {/* <DefaultDesign />     
      <CustomDesign /> */}
      <div>

        <DatePicker />
        <DatePicker
          // container={{ style: {backgroundColor:'yellow'} }}
          label={"Calendar"}
          datePicker={{
            // showYearDropdown: true,
            // style: {},
            // calendarClassName: 'datepick2',
            // calendarContainer: ({ className, children }) =>
            //   renderCalendar({ className, children })
          }}
        />

        <Button style={{ marginTop: 40 }} label='Pay Now' managedCallback={() => { console.log('button click') }} />

      </div>
    </div>
  );
}

export default App;
