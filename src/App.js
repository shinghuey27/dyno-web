import Checkbox from "./Components/Checkbox/Checkbox";
import MUIList from "./Components/List/MUIList/MUIList";
import MUITable from "./Components/TableTest/MUITable/MUITable";
import MUITable2 from "./Components/TableTest/MUITable/MUITable2";
import MUITable3 from "./Components/TableTest/MUITable/MUITable3";
import MUITable4 from "./Components/TableTest/MUITable/MUITable4";
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

import TableContainer from "./Components/TableContainer/TableContainer";
import Table from "./Components/Table/Table";
import TableRow from "./Components/TableRow/TableRow";
import TableHead from "./Components/TableHead/TableHead";
import TableCell from "./Components/TableCell/TableCell";
import TableBody from "./Components/TableBody/TableBody";
import "./App.css";
import ListMui from "./Components/ListMui/ListMui";
import ListItem from "./Components/ListItem/ListItem";
// import ListItemText from "./Components/ListItemText/ListItemText";
import { ListItemText } from "@mui/material";

function createData(index, name, value) {
  let src = require(`./Asset/Icon/Image${index}.png`);
  return {
    src,
    name,
    value
  };
}

const rows = [
  createData("1", "Yohan Narlis", "Checker"),
  createData("2", "Rani Veloo", "Checker"),
  createData("3", "David Yap", "Maker"),
  createData("4", "hr....my", "Viewer")
];

const cellTableStyle = {
  border: 0,
  flex: 1,
  fontFamily: "Rubik",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  color: "#6F7FAF"
};

function App(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      <div style={{ height: 20, margin: 20 }}></div>

      <TableContainer
        // style={{ padding: 20, backgroundColor: 'beige', width: 'auto' }}
        className={"table-container-dyno"}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={cellTableStyle}>
                  <img src={row?.src} style={{ height: 40 }}></img>
                </TableCell>
                <TableCell
                  // component="th"
                  scope="row"
                >
                  {row?.name}
                </TableCell>

                <TableCell
                  style={cellTableStyle}
                  // align="center" //<-MUI props
                >
                  {row?.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ height: 20, margin: 20 }}></div>

      {/* <MUITable2 /> */}
      <div style={{ height: 20, margin: 20 }}></div>
      <ListMui>
        <ListItem>
          {rows.map((row, index) => (
            <ListItemText children={row.name} />
          ))}
        </ListItem>
      </ListMui>
    </div>
  );
}

export default App;
