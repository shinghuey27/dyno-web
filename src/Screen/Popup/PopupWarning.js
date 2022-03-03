import { Button } from "../../Components";
import styles from "./PopupWarning.module.scss";
import Warning from "../../Asset/Logo/Warning.svg";
const PopupWarning = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <img src={Warning} alt="React Logo" className={styles.icon} />
        <div>
          <h3 className={styles.title}>Are you sure you want to cancel this upliftment?</h3>
        </div>
      </div>
      <div className={styles.button}>
        <Button
          item={{ label: "Not Now" }}
          style={{
            fontWeight: "bold",
            backgroundColor: "#B0BAD7",
            border: "#B0BAD7",
            color: "#FFFFFF",
            fontWeight: 500,
            marginRight: "6px"
          }}
        />
        <Button item={{ label: "Yes" }} style={{ fontWeight: "bold" }} />
      </div>
    </div>
  );
};

export default PopupWarning;
