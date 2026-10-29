import styles from "./styles.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.imagem}>
        <img src="./Logo.png" alt="" />
      </div>

      <div className={styles.texto}>
        <h1>
          DIÁRIO DE <br /> RECEITAS
        </h1>
      </div>
    </div>
  );
}
