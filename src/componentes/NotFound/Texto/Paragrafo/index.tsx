import { style } from "./style";

type ParaProps = {
  Texto: string;
}

export default function Paragrafo({Texto}: ParaProps) {
  return (
    <>
        <div className={style.caixa}>

            <p className={style.t}>{Texto}</p>

        </div>
    </>
  );
}
