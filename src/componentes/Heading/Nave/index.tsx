import styles from "./styles.module.css";

export function Nave() {
  return (
    <div className={styles.nave}>
      <nav>
        <div className={styles.links}>
          <a href="">Inicio</a>
          <a href="">Conversor</a>
          <a href="">Úteis</a>
        </div>
      </nav>
    </div>
  );
}
