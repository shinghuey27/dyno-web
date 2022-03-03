import { Textbox } from "./Components";
import Modals from "./Components/Modal/Modals";
import CustomDesign from "./Screen/CustomDesign";
import DefaultDesign from "./Screen/DefaultDesign";
import PopupAuth from "./Screen/Popup/PopupAuth";
import PopupError from "./Screen/Popup/PopupError";
import PopupInfo from "./Screen/Popup/PopupInfo";
import PopupWarning from "./Screen/Popup/PopupWarning";
import PopupSetting from "./Screen/Popup/PopupSetting";
import styles from "./Field.module.scss";
import PopupList from "./Screen/Popup/PopupList";
import PopupList2 from "./Screen/Popup/PopupList2";

// const renderCalendar = ({ className, children }) => {
//   return (
//     <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
//       <CalendarContainer className={className}>
//         <div style={{ background: "#f0f0f0" }}>What is your favorite day?</div>
//         <div style={{ position: "relative" }}>{children}</div>
//       </CalendarContainer>
//     </div>
//   );
// };

// const customStyles = {
//   control: (base, state) => ({
//     ...base,
//     marginTop: 10,
//     '&:hover': { borderColor: '#74e3e4' },
//     border: '1px solid red',
//     boxShadow: 'none',
//     borderRadius: 20,
//   })
// }

function App(props) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <fieldset className={styles.field}>
        {/* <DefaultDesign />
      <CustomDesign /> */}
        <h1 style={{ display: "flex", justifyContent: "center" }}>Modal</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Modals item={{ label: "Error" }}>{<PopupError />}</Modals>
          <Modals item={{ label: "Warning" }}>{<PopupWarning />}</Modals>
          <Modals item={{ label: "Information" }}>{<PopupInfo />}</Modals>
          <Modals item={{ label: "Auth" }}>{<PopupAuth />}</Modals>
          <Modals item={{ label: "Setting" }}>{<PopupSetting />}</Modals>
          <Modals item={{ label: "List" }}>{<PopupList />}</Modals>
          <Modals item={{ label: "List2" }}>{<PopupList2 />}</Modals>
        </div>
      </fieldset>
      {/* <div> */}
      {/* <Checkbox       
          item={{ label: 'check box 1' }}       
          // containerStyle={{ style: { color: "red", "&::after": {} } }}
        /> */}
      {/* 
        <Textbox
          item={{ label: 'Pay Now', description: 'pay before 1st March' }}
          tootltipStyle={{ label: 'tool' }}
          error
          
        /> */}

      {/* <Select
          item={{ placeholder: 'Select payment now', options: sampleItem }}
          selectStyle={{
            styles: {
              control: (base, state) => ({
                ...base,
                marginTop: 10, width: 300,
                '&:hover': { borderColor: '#74e3e4' },
                border: '1px solid red',
                boxShadow: 'none',
                borderRadius: 20,
              })
            }
          }}
        /> */}

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
      {/* <RadioButton item={{ label: 'my radio' }} checkMarkStyle={{ style: { backgroundColor: 'red' } }} /> */}

      {/* </div> */}
    </div>
  );
}

export default App;
