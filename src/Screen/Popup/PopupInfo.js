import { Button } from "../../Components";
import styles from "./PopupInfo.module.scss";
const PopupInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div>
          <h3 className={styles.title}>Home Branch</h3>
          <label className={styles.description}>
          An account’s home branch is the Maybank branch where it was registered and set up.
          </label>
        </div>
      </div>
      <div className={styles.button}>
        <Button item={{ label: "Done" }} style={{ fontWeight: "bold" }} />
      </div>
    </div>
  );
};

export default PopupInfo;
