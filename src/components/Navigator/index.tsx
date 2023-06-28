import styles from "./styles.module.scss";

const Navigator = () => {
  return (
    <div
      className={styles.container}
    >
      <p className={styles.container__tab}>Home</p>
      <p className={styles.container__tab}>Register</p>
    </div>
  );
};

export default Navigator;
