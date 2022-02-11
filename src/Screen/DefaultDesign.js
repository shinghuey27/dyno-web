import "../App.css";

import Textbox from "../Components/Textbox/Textbox";
import Searchbar from "../Components/Searchbar/Searchbar";
import DatePicker from "../Components/DatePicker/DatePicker";
import Stepper from "../Components/ProgressBar/Stepper";
import Checkbox from "../Components/Checkbox/Checkbox";
import RadioButton from "../Components/RadioButton/RadioButton";
import Switch from "../Components/Switch/Switch";

const DefaultDesign = () => {
  return (
    <fieldset className="field" style={{ padding: "2rem" }}>
      {/* <Button  /> */}
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Default Design
      </h2>

      {/* 7 Molecules  */}
      {/* 1. Textbox */}

      <Textbox label text description error tooltip />

      {/* ------------------------------------------------- */}
      {/* 2. Searchbar */}
      <br />
      <Searchbar label text data listBox item />
      {/* ------------------------------------------------- */}
      {/* 3. Stepper */}
      <div style={{ marginTop: "5.3rem" }}></div>
      <Stepper stepOne stepTwo label />
      <br />

      {/* ------------------------------------------------- */}
      {/* 4. Datepicker */}
      <DatePicker
        // container={{ style: {backgroundColor:'yellow'} }}
        label={"Calendar"}
        datePicker={{
          showYearDropdown: true
        }}
      />
      <br />

      {/* ------------------------------------------------- */}
      {/* 5. Radiobutton */}
      <RadioButton label />
      <br />

      {/* ------------------------------------------------- */}

      {/* 6. Switch */}
      <Switch label />
      <br />

      {/* ------------------------------------------------- */}
      {/* 7. Checkbox */}
      <Checkbox label />
    </fieldset>
  );
};

export default DefaultDesign;
