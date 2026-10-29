import { Copyright } from "lucide-react";
import styles from "./styles.module.css";

export function Rodape() {
  return (
    <div className={styles.pe}>
      <footer>
        <h3>TODOS OS DIREITOS RESERVADOS</h3>
        <h3>
          José <Copyright />
        </h3>
      </footer>
    </div>
  );
}
