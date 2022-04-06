import { Button } from "../../UIComponents";
import styles from "./PopupError.module.scss";
import Error from "../../Asset/Logo/Error.svg";
export default function PopupError() {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
      <img src={Error} alt="React Logo"  className={styles.icon}/>
        <div>
          <h3 className={styles.title}>Service Unavailable</h3>
          <label className={styles.description}>
            FD placement and upliftment are only available from 6.00am to
            10.00pm.
          </label>
        </div>
      </div>
      <div className={styles.button}>
        <Button item={{ label: "Got It" }} style={{color:"#0E1B42",fontWeight:500}}/>
      </div>
    </div>
  );
}
