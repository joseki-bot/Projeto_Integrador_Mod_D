import { Copyright } from "lucide-react";
import styles from "./styles.module.css";

export function Rodape() {
  return (
    <div className={styles.pe}>
      <footer>
        <div className={styles.texto}>
        <h3>TODOS OS DIREITOS RESERVADOS</h3>
        <h3>
          José <Copyright />
        </h3>
        </div>
      </footer>
    </div>
  );
}
