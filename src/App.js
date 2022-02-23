import Searchbar from "./Components/Searchbar/Searchbar";
import CustomDesign from "./Screen/CustomDesign";
import DefaultDesign from "./Screen/DefaultDesign";
import Button from './Components/Button/Button'
import { Checkbox, DatePicker, Textbox } from "./Components";
import { error } from "./SampleData/SampleErrorForm";
import { sampleItem_Props_ForSelect } from "./SampleData/SamplePropsIntegration";
import { CalendarContainer } from "react-datepicker";
import Select from "./Components/Select/Select";
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
        {/* <DatePicker
          // container={{ style: {backgroundColor:'yellow'} }}
          label={"Calendar"}
          datePicker={{
            showYearDropdown: false,
            // style: {},
            // calendarClassName: 'datepick2',
            // calendarContainer: ({ className, children }) =>
            //   renderCalendar({ className, children })
          }}
        /> */}

        <Searchbar
          name='paymentType'
          label
          text
          // error={error}
          label={{ label: "Search" }}
          description={{
            label: "this is search bar"
          }}
          // data={optionsSample}
          text={{
            style: {
              border: "1px solid #ddd",
              borderRadius: "4px",
              height: 40,
              width: 278,
              margin: 0,
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "Lato",
              boxSizing: "border-box"
            }
          }}
        // listBox={{
        //   style: {
        //     backgroundColor: "#44444F",
        //     margin: 0,
        //     zIndex: 200,
        //     position: "absolute",
        //     border: "1px solid rgba(0, 0, 0, 0.05)",
        //     borderRadius: 8,
        //     boxShadow: "0.5px 1px 1px 1px rgba(0, 0, 0, 0.05)",
        //     padding: 10,
        //     width: 260,
        //     top: -40,
        //     overflow: "scroll",
        //     height: 50,
        //     overflowX: "hidden"
        //   },
        //   className: "listBox"
        // }}
        // item={{
        //   style: {
        //     backgroundColor: "#44444F"
        //   },
        //   className: "itemList"
        // }}
        // listboxStyle={{
        //   position: "relative",
        //   top: 20,
        // }}
        // icon={{ style: { marginTop: 30 } }}
        />

        {/* <Button style={{ marginTop: 40 }} label='Pay Now' managedCallback={() => { console.log('button click') }} /> */}


        {/* <Textbox
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
        /> */}

        <Checkbox
          name='checkbox2'
          // error={error}
          item={{ label: 'my label' }}
        // checkMark={{ style: { backgroundColor: "red" } }}
        // container={{ style: { color: "green", "&::after": {} } }}
        />

        <Select />
      </div>
    </div>
  );
}

export default App;
