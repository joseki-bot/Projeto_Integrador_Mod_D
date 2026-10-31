import { style } from "./style";

type ReceitaProps = {
  nome: string;
  imagem: string;
};

export function Receita({ nome, imagem }: ReceitaProps) {
  return (
    
    <div className={style.Receita}>
      
      <div className={style.Texto}>
        <h3>{nome}</h3>
      </div>

      <div className={style.image}>
        <img className={style.imagem} src={imagem} alt={nome} />
      </div>

    </div>
  );
}