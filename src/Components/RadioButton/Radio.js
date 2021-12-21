import styles from "./Radio.module.scss";

const Radio = () => {
  return (
    <div>
      <label className={styles.container}>
        Instant Transfer
        <input type="radio" checked="checked" name="radio" />
        <span className={styles.checkmark}></span>
      </label>
      <label className={styles.container}>
        IBG Transfer
        <input type="radio"  name="radio" />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};

export default Radio;
