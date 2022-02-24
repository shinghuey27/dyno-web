import "../App.css";

import Textbox from "../Components/Textbox/Textbox";
import Searchbar from "../Components/Searchbar/Searchbar";
import DatePicker from "../Components/DatePicker/DatePicker";
import Stepper from "../Components/ProgressBar/Stepper";
import { CalendarContainer } from "react-datepicker";
import Checkbox from "../Components/Checkbox/Checkbox";
import RadioButton from "../Components/RadioButton/RadioButton";
import { sampleItem } from "../SampleData/List";
import Switch from "../Components/Switch/Switch";
import { error } from "../SampleData/SampleErrorForm";
import { Select } from "../Components";

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

const CustomDesign = () => {
  return (
    <fieldset className="field">
      {/* <Button  /> */}
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Custom Design
      </h2>
      {/* 7 Molecules  */}

      {/* 1. Stepper */}
      <div style={{ marginTop: "1.5rem" }}></div>
      <Stepper
        stepper={{
          style: { display: "flex", flex: 1 }
        }}
        stepOne={{
          style: {
            backgroundColor: "white",
            flex: 1,
            fontSize: 14,
            textAlign: "center",
            marginTop: "0rem"
          },
          text: "Step 1"
        }}
        // label={{ label: 'Step 2/3' }}
        hr={{
          style: {
            border: "1px solid black",
            flex: 1,
            height: 0.1
          }
        }}
        stepTwo={{
          style: {
            backgroundColor: "white",
            flex: 1,
            fontSize: 14,
            height: 20,
            textAlign: "center",
            marginTop: "0rem"
          },
          text: "Step 2"
        }}
        stepThree={{
          style: {
            backgroundColor: "white",
            flex: 1,
            fontSize: 14,
            height: 20,
            textAlign: "center",
            marginTop: "0rem"
          },
          text: "Step 3"
        }}
      />
      <br />
      {/* 2. Textbox */}
      <Textbox
        name="account"
        item={{
          label: "Account Number",
          description: "Account Number"
        }}
        error={error}
        // styling here
        errorStyle={{ className: "errorClass" }}
        labelStyle={{ className: "labelClass" }}
        textboxStyle={{
          className: "textClass"
        }}
      />

      <br />
      <Textbox
        name="amount"
        item={{
          label: "Transfer Amount",
          description: "Amount in MYR"
        }}
        error={error}
        tootltipStyle={{
          label: "You can adjust your limit via settings"
        }}
        errorStyle={{ className: "errorClass" }}
        labelStyle={{ className: "labelClass" }}
        textboxStyle={{
          className: "textClass"
        }}
      />

      <br />
      <br />

      {/* ------------------------------------------------- */}
      {/* 3. Searchbar */}
      <Select
        label={{ label: "Select Recipent Bank" }}
        description={{
          label: "this is search bar"
        }}
        data={sampleItem}
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
        listBox={{
          style: {
            backgroundColor: "#44444F",
            margin: 0,
            position: "absolute",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            borderRadius: 8,
            boxShadow: "0.5px 1px 1px 1px rgba(0, 0, 0, 0.05)",
            padding: 10,
            width: 260,
            top: -40,
            overflow: "scroll",
            height: 50,
            overflowX: "hidden"
          },
          className: "listBox"
        }}
        item={{
          style: {
            backgroundColor: "#44444F",
            marginBottom: ".5rem",
            cursor: "pointer"
          },
          className: "itemList"
        }}
      />
      {/* ------------------------------------------------- */}

      <div style={{ marginTop: "6rem" }}></div>

      {/* ------------------------------------------------- */}
      {/* 4. Datepicker */}
      <DatePicker
        // container={{ style: {backgroundColor:'yellow'} }}
        label={"Effective Date"}
        datePicker={{
          showYearDropdown: true,
          // style: {},
          // calendarClassName: 'datepick2',
          calendarContainer: ({ className, children }) =>
            renderCalendar({ className, children })
        }}
      />
      <br />

      {/* ------------------------------------------------- */}
      {/* 5. Radiobutton */}
      <RadioButton
        label="Instant Tranfer"
        checkMark={{ style: { backgroundColor: "green" } }}
      />
      <RadioButton
        label="IBG Transfer"
        checkMark={{ style: { backgroundColor: "green" } }}
      />
      <br />
      {/* ------------------------------------------------- */}

      {/* 6. Switch */}
      <Switch
        label="Set Recurring"
        slider={{ style: { backgroundColor: "green" } }}
      />
      <br />

      {/* ------------------------------------------------- */}
      {/* 7. Checkbox */}
      <Checkbox
        label="Add to favorite"
        checkMark={{ style: { backgroundColor: "green" } }}
      />
      <br />
    </fieldset>
  );
};

export default CustomDesign;
