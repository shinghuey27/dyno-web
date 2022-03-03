import Checkbox from "./Components/Checkbox/Checkbox";
import MUIList from "./Components/List/MUIList/MUIList";
import MUITable from "./Components/Table/MUITable/MUITable";
import MUITable2 from "./Components/Table/MUITable/MUITable2";
import MUITable3 from "./Components/Table/MUITable/MUITable3";
import MUITable4 from "./Components/Table/MUITable/MUITable4";
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

function App(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
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
        <>
          <h1 style={{ display: "flex", justifyContent: "center" }}>List</h1>
          <MUIList />
        </>
      </fieldset>

      <fieldset className={styles.field}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Table 1</h1>
        <MUITable />
        <h1 style={{ display: "flex", justifyContent: "center" }}>Table 2</h1>

        <MUITable2 />
        <h1 style={{ display: "flex", justifyContent: "center" }}>Table 3</h1>

        <MUITable3 />
      </fieldset>
    </div>
  );
}

export default App;
