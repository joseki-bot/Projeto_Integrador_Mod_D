import styles from "./styles.module.css";

type ReceitaProps = {
  nome: string;
  imagem: string;
};

export function Receita({ nome, imagem }: ReceitaProps) {
  return (
    <div className={styles.Receita}>

    <div className={styles.Texto}>
        <h3>{nome}</h3>
    </div>

    <div className={styles.image}>
        <img src={imagem} alt={nome} />
    </div>

    </div>
  );
}