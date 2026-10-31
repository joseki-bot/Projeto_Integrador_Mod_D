import { style } from "./style";


type CategoriaProps = {
  titulo: string;
  children: React.ReactNode;
};

export function Details({ titulo, children }: CategoriaProps) {
  return (
    <div className={style.Deta}>

        <div className={style.D2}>
            <details>

                <summary className={style.su}>{titulo}</summary>

            <div className={style.Conteudo}>
                {children}
            </div>

            </details>
        </div>

    </div>
  );
}
