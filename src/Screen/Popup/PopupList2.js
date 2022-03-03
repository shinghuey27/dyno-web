import { Button } from "../../Components";
import styles from "./PopupList2.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "../../App.css";

function createData(title, description, style) {
  return { title, description, style };
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Rubik"
        }
      }
    }
  }
});
const rows = [
  createData(
    "Unpaid",
    "These are cheques that have not been deposited for processing yet."
  ),
  createData(
    "Processing",
    "A cheque that you issued which has been deposited and is being processed."
  ),
  createData(
    "Stopped",
    "A cheque that you successfully requested to stop from being processed.",
    { title: { color: "#FF6167", fontWeight: 500 }, description: {} }
  ),
  createData(
    "Paid",
    "An issued cheque that was deposited and successfully cleared.",
    { title: { color: "#00CA90" }, description: {} }
  )
];

const PopupList2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div>
          <h3 className={styles.title}>Cheque Statuses</h3>
        </div>
        <div>
          <List>
            {rows.map((row, index) => (
              <ListItem
                key={index}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <div className={styles.listItem}>
                  <ListItemText theme={theme}
                    primary={row?.title}
                    style={row?.style?.title}
                    className={styles.listItemTitle}
                  />
                  <ListItemText theme={theme}
                    primary={row?.description}
                    style={row?.style?.description}
                    className={styles.desc}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div className={styles.button}>
        <Button item={{ label: "Done" }} style={{ fontWeight: "bold" }} />
      </div>
    </div>
  );
};

export default PopupList2;
