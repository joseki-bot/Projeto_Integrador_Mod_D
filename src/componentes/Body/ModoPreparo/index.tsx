import { style } from "./style";

type ModoPreparoProps = {
    Texto: string[];
};

export function ModoPreparo({ Texto }: ModoPreparoProps) {
    return (
        <div className={style.caixa}>
            <ol>
                {Texto.map((passo, i) => (
                    <li key={i}>
                        <div className={style.CaixaTexto}>
                            {passo}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}