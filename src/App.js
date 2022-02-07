import styles from "./App.css";

import { useState } from "react";
import Textbox from "./Components/Textbox/Textbox";

function App() {
  const [demo, setDemo] = useState(true);
  const [inputError, setInputError] = useState(false);

  return (
    <fieldset className="field" style={{ padding: "2rem" }}>
      {/* Default */}
      <Textbox label text description error tooltip />

      {/* Hide tooltip  */}
      <Textbox label text description error />
      {/* ------------------------------------------------- */}

      {/* 2 Method of custom styling  */}

      {/* 1. inline styling */}
      <Textbox
      // label with default value
        label
        tooltip={{ label: "abc" }}
        text={{
          style: {
            border: "1px solid #ddd",
            borderRadius: "4px",
            height: 40,
            width: "100%",
            margin: 0,
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Lato",
            boxSizing: "border-box",
          }
        }}
        description={{
          label: "hello"
        }}
        error={{
          label: "*Please enter valid passport number",
          style: {
            textAlign: "right",
            width: "100%",
            color: "#c00",
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Lato"
          }
        }}
      />

      {/* 2. className styling */}
      <Textbox
        label={{
          label: "ID Number 2",
          className: "labelClass"
        }}
        tooltip={{ label: "abc" }}
        text={{
          className: "textClass",
        }}

        description={{
          label: "description 2"
        }}
        error={{
          label: "*Please enter valid ID number",
          className: "errorClass"
        }}
      />
    </fieldset>
  );
}

export default App;
