import { Button, Textbox } from "../Components";
import styles from "./PopupAuth.module.scss";
import "../App.css";
const PopupAuth = () => {
  return (
    <div className={styles.container}>
      <div style={{marginBottom:"27px"}}>
        <h3>Authorise Transaction</h3>
        <div className={styles.description}>
          Enter the 6-digit code sent to 013XXXX595.
        </div>
      </div>
      <Textbox
        id="input"
        item={{
          label: "Transaction Authorisation Code",
          placeholder: "Enter TAC"
        }}
        textboxStyle={{
          style: { width: "100%", boxSizing: "border-box" },
          className: "text placeholder"
        }}
        
      />
      <div className={styles.container2}>
        <label className={styles.time}>Resend 01:59</label>
        <div className={styles.button}>
          <Button
            item={{ label: "Cancel" }}
            style={{
              fontWeight: "bold",
              backgroundColor: "#B0BAD7",
              border: "#B0BAD7",
              color: "#FFFFFF",
              fontWeight: 500,
              marginRight: "6px"
            }}
            disabled
          />
          <Button
            item={{ label: "Submit" }}
            style={{ fontWeight: "bold" }}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default PopupAuth;
