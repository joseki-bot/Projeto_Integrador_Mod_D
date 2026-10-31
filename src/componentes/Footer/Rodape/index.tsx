import { Copyright } from "lucide-react";
import { style } from "./style";

export function Rodape() {
  return (
    <div className={style.pe}>
      <footer>
        <div className={style.texto}>
        <h3>TODOS OS DIREITOS RESERVADOS</h3>
        <h3>
          José <Copyright />
        </h3>
        </div>
      </footer>
    </div>
  );
}
