import styles from "./Radio.module.scss";

const Radio = () => {
  return (
    <>
      <label className={styles.container}>
        Instant Transfer
        <input type="radio" checked="checked" name="radio" />
        <span className={styles.checkmark}></span>
      </label>      
    </>
  );
};

export default Radio;
