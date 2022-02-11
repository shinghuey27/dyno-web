import "../App.css";

import Textbox from "../Components/Textbox/Textbox";
import Searchbar from "../Components/Searchbar/Searchbar";
import DatePicker from "../Components/DatePicker/DatePicker";
import Stepper from "../Components/ProgressBar/Stepper";
import Checkbox from "../Components/Checkbox/Checkbox";
import RadioButton from "../Components/RadioButton/RadioButton";
import Switch from "../Components/Switch/Switch";



const DefaultDesign = () =>{
    return (
        <fieldset className="field" style={{ padding: "2rem" }}>

        {/* <Button  /> */}
  
        {/* 7 Molecules  */}
        {/* 1. Textbox */}
  
        <Textbox
          label
          text
          description
          error
        />
  
        {/* ------------------------------------------------- */}
        {/* 2. Searchbar */}
        <Searchbar
          label
          text
          data
          listBox
          item
          icon
        />
        {/* ------------------------------------------------- */}
        {/* 3. Stepper */}
        <div style={{ marginTop: 60 }}></div>
        <Stepper
          stepOne
          stepTwo
          label

        />
        {/* ------------------------------------------------- */}
        {/* 4. Datepicker */}
        <DatePicker
          // container={{ style: {backgroundColor:'yellow'} }}
          label={'Calendar'}
          datePicker={{
            showYearDropdown: true,
          }}
        />
        {/* ------------------------------------------------- */}
        {/* 5. Radiobutton */}
        <RadioButton
          label
        />
  
        {/* ------------------------------------------------- */}
  
        {/* 6. Switch */}
        <Switch
          label
        />
        {/* ------------------------------------------------- */}
        {/* 7. Checkbox */}
        <Checkbox
          label
        />
      </fieldset>
    )
}

export default DefaultDesign;