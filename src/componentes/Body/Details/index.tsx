import styles from "./styles.module.css";


type CategoriaProps = {
  titulo: string;
  children: React.ReactNode;
};

export function Details({ titulo, children }: CategoriaProps) {
  return (
    <div className={styles.Deta}>

        <div className={styles.D2}>
            <details>

                <summary className={styles.su}>{titulo}</summary>

            <div className={styles.Conteudo}>
                {children}
            </div>

            </details>
        </div>

    </div>
  );
}
