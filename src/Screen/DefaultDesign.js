import "../App.css";

import Textbox from "../Components/Textbox/Textbox";
import Searchbar from "../Components/Searchbar/Searchbar";
import DatePicker from "../Components/DatePicker/DatePicker";
import Stepper from "../Components/ProgressBar/Stepper";
import Checkbox from "../Components/Checkbox/Checkbox";
import RadioButton from "../Components/RadioButton/RadioButton";
import Switch from "../Components/Switch/Switch";
import { sampleItem } from "../SampleData/List";

const DefaultDesign = () => {
  return (
    <fieldset className="field" style={{ padding: "2rem" }}>
      {/* <Button  /> */}
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Default Design
      </h2>

      {/* 7 Molecules  */}
      {/* 1. Stepper */}
      <Stepper stepOne stepTwo label={{ label: "Step 2/2" }} />
      <br />
      {/* ------------------------------------------------- */}

      {/* 2. Textbox */}

      <Textbox
        label={{ label: "Account Number" }}
        text
        description={{ label: "Account Number" }}
        error={{ label: "*Please do not leave field blank" }}
      />
      <br />

      <Textbox
        label={{ label: "Transfer Amount" }}
        text
        description={{ label: "Amount in MYR" }}
        error={{ label: "*Please do not leave field blank" }}
        tooltip={{
          label: "You can adjust your limit via settings"
        }}
      />
      <br />
      {/* ------------------------------------------------- */}
      {/* 3. Searchbar */}
      <br />
      <Searchbar
        label={{ label: "Select Recipent bank" }}
        text
        data={sampleItem}
        listBox
        item
      />

      <div style={{ marginTop: "5.3rem" }}></div>
      <br />

      {/* ------------------------------------------------- */}
      {/* 4. Datepicker */}
      <DatePicker
        // container={{ style: {backgroundColor:'yellow'} }}
        label={"Effective Date"}
        datePicker={{
          showYearDropdown: true
        }}
      />
      <br />

      {/* ------------------------------------------------- */}
      {/* 5. Radiobutton */}
      <RadioButton label="Instant Transfer" />
      <RadioButton label="IBG Transfer" />

      <br />

      {/* ------------------------------------------------- */}

      {/* 6. Switch */}
      <Switch label="Set Recurring" />
      <br />

      {/* ------------------------------------------------- */}
      {/* 7. Checkbox */}
      <Checkbox label="Add to favorite" />
    </fieldset>
  );
};

export default DefaultDesign;
