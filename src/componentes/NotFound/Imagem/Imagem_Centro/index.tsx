import { style } from "./style";

type ImgProps = {
  Caminho: string;
}

export default function Imgagem_Centro({Caminho}: ImgProps) {
  return (
    <>
        <div className={style.caixa}>

          <img className={style.imagem} src={Caminho} alt="" />

        </div>
    </>
  );
}
