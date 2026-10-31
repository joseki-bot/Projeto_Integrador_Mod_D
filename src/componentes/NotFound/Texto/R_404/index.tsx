import { style } from "./style";

type ErroProps = {
  Titulo: string;
}

export default function R_404({Titulo}: ErroProps) {
  return (
    <>
        <div className={style.A}>

          <h2>{Titulo}</h2>

        </div>
    </>
  );
}
