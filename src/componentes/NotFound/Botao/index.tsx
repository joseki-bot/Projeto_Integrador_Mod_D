import type { ReactNode } from "react";
import { style } from "./style";


type BotProps = {
  Texto: string;
  Icone?: ReactNode;
}

export default function Botao({Icone, Texto}: BotProps) {
  return (
    <>
        <div className={style.caixa}>

          <button className={style.botao}>
            <h3 className={style.texto}>
                {Icone} {Texto} 
            </h3>
          </button>

        </div>
    </>
  );
}
