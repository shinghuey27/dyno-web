import Searchbar from "./Components/Searchbar/Searchbar";
import CustomDesign from "./Screen/CustomDesign";
import DefaultDesign from "./Screen/DefaultDesign";
import Button from './Components/Button/Button'
import { Checkbox, DatePicker, Textbox, Switch } from "./Components";
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

const customStyles = {
  control: (base, state) => ({
    ...base,
    marginTop: 10,
    '&:hover': { borderColor: '#74e3e4' },
    border: '1px solid red',
    boxShadow: 'none',
    borderRadius: 20,
  })
}


function App(props) {
  return (
    <div style={{ display: "flex" }}>
      {/* <DefaultDesign />     
      <CustomDesign /> */}
      <div>
        {/* <Checkbox       
          item={{ label: 'check box 1' }}       
          // containerStyle={{ style: { color: "red", "&::after": {} } }}
        /> */}

        <Textbox
          item={{ label: 'Pay Now', description: 'pay before 1st March' }}
          tootltipStyle={{ label: 'tool' }}
          error
          descriptionStyle={{ style: { textAlign: 'right', } }}
        />

        <Select
          item={{ placeholder: 'Select payment now', options: sampleItem }}
          selectStyle={{
            styles: {
              control: (base, state) => ({
                ...base,
                marginTop: 10, width:300,
                '&:hover': { borderColor: '#74e3e4' },
                border: '1px solid red',
                boxShadow: 'none',
                borderRadius: 20,
              })
            }
          }}
        />

        {/* <DatePicker
          // containerStyle={{ style: {backgroundColor:'yellow'} }}
          label={"Calendar"}
          calendarStyle={{
            showYearDropdown: true,
            // style: {},
            // calendarClassName: 'datepick2',
            // calendarContainer: ({ className, children }) =>
            // renderCalendar({ className, children })
          }}
        /> */}

        {/* <Switch item={{ label: 'my switch' }} error /> */}
        {/* <Button /> */}

      </div>
    </div>
  );
}

export default App;
