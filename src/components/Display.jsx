import styles from "./Display.module.css";

const Display = ({ displayVal }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayVal}
      placeholder="0"
      aria-label="Calculator display"
      readOnly
    />
  );
};

export default Display;
