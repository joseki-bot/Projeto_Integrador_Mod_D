import { style } from "./style";

export function Logo() {
  return (
    <div className={style.logo}>
      <div className={style.imagem}>
        <img className="w-full h-full object-contain" src="./logo/Logo_B.png" alt="Logo Diário de Receitas" />
      </div>

      <div className={style.texto}>
        <h1>
          DIÁRIO DE <br /> RECEITAS
        </h1>
      </div>
    </div>
  );
}
