import { Button, Textbox } from "../../Components";
import styles from "./PopupSetting.module.scss";
import hill from "../../Asset/image/hill.png";
import Icon from "../../Asset/Icon/Icon.svg";

import "../../App.css";
const PopupSetting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.yellowContainer}>
        <div
          style={{
            position: "relative",
            top: "31px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img src={hill} alt="React Logo" className={styles.icon} />
          <img src={Icon} alt="React Logo" className={styles.iconImg} />
        </div>
      </div>
      <div className={styles.labelContainer}>
        <h3 className={styles.title}> Security Image</h3>
        <label className={styles.description}>
          Select your preferred security image for verification.
        </label>
      </div>
      <div className={styles.button}>
        <Button
          item={{ label: "Cancel" }}
          style={{
            fontWeight: "bold",
            backgroundColor: "#B0BAD7",
            border: "#B0BAD7",
            color: "#FFFFFF",
            fontWeight: 500,
            marginRight: "10px"
          }}
        />
        <Button item={{ label: "Confirm" }} style={{ fontWeight: "bold" }} />
      </div>
    </div>
  );
};

export default PopupSetting;
