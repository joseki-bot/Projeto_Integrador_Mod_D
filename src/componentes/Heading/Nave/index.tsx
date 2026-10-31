import { style } from "./style";

export function Nave() {
  return (
    <div className={style.nave}>
      <nav>
        <div className={style.links}>
          <a className={style.link} href="">Inicio</a>
          <a className={style.link} href="">Conversor</a>
          <a className={style.link} href="">Úteis</a>
        </div>
      </nav>
    </div>
  );
}
