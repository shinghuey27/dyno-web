import "../App.css";

import Textbox from "../Components/Textbox/Textbox";
import DatePicker from "../Components/DatePicker/DatePicker";
import Stepper from "../Components/ProgressBar/Stepper";
import Checkbox from "../Components/Checkbox/Checkbox";
import RadioButton from "../Components/RadioButton/RadioButton";
import Switch from "../Components/Switch/Switch";
import { Select } from "../Components";
import { error } from "../SampleData/SampleErrorForm";
import styles from "../Field.module.scss"

const DefaultDesign = () => {
  const options = [
    {
      label: "IBFT",
      value: "IBFT"
    },
    {
      label: "GIRO",
      value: "GIRO"
    }
  ];

  return (
    <fieldset className={styles.field}>
      {/* <Button  /> */}
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Default Design
      </h2>

      {/* 7 Molecules  */}
      {/* 1. Stepper */}
      <Stepper
        container={{
          style: { justifyContent: "center" }
        }}
        stepOne
        stepTwo
        label={{ label: "Step 2/2" }}
      />
      <br />
      {/* ------------------------------------------------- */}

      {/* 2. Textbox */}

      <Textbox
        name="account"
        item={{
          label: "Account Number",
          description: "Account Number"
        }}
        text
        error={error}
      />
      <br />

      <Textbox
        name="amount"
        item={{ label: "Transfer Amount", description: "Amount in MYR" }}
        text
        error={error}
        tootltipStyle={{
          label: "You can adjust your limit via settings"
        }}
      />
      <br />
      {/* ------------------------------------------------- */}
      {/* 3. Searchbar */}
      <br />
      <Select
        name="select"
        item={{
          label: "Select Recipent bank",
          placeholder: "Please select recipent bank ",
          description: "Recipent Bank",
          options: [
            {
              label: "IBFT",
              value: "IBFT"
            },
            {
              label: "GIRO",
              value: "GIRO"
            }
          ]
        }}
        error={error}
        selectStyle={{
          styles: {
            control: (base, state) => ({
              ...base,
              width:"18rem"
            }),
            menu: (provided, state) => ({
              ...provided,
              width:"18rem"
            }),
          }
        }}
      />

      <div style={{ marginTop: "1rem" }}></div>
      <br />

      {/* ------------------------------------------------- */}
      {/* 4. Datepicker */}
      <DatePicker
        name="calendar"
        item={{ label: "Effective Date" }}
        error={error}
      />
      <br />

      {/* ------------------------------------------------- */}
      {/* 5. Radiobutton */}
      <RadioButton name="instant" item={{ label: "Instant Transfer" }} />
      <RadioButton name="ibg" item={{ label: "IBG Transfer" }} />

      <br />

      {/* ------------------------------------------------- */}

      {/* 6. Switch */}
      <Switch item={{ label: "Set Recurring" }} />
      <br />

      {/* ------------------------------------------------- */}
      {/* 7. Checkbox */}
      <Checkbox item={{ label: "Add to favorite" }} />
    </fieldset>
  );
};

export default DefaultDesign;
