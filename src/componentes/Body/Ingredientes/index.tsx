import { style } from "./style";

type Ingrediente = {
    titulo: string;
    ingredientes: (string | Subdivisao)[];
};

type Subdivisao = {
    subtitulo: string;
    ingredientes: string[];
}; 

type Props = {
    Partes: Ingrediente[];
};

export default function Ingredientes({ Partes }: Props) {
    return (
        <section>
            <div className={style.caixa}>

                <div className={style.Titulo}>
                    <h1 className={style.T}>INGREDIENTES:</h1>
                </div>

                <div className={style.AreaIngredientes}>
                    {Partes.map((parte, index) => (
                        <div key={index} className={`${style.Ingrediente} ${
                            parte.largo ? style.IngredienteLargo : "" }`} >

                            <h2>{parte.titulo}</h2>

                            <ul>
                                {parte.ingredientes.map((ingrediente, i) => (
                                    <li key={i}>
                                        {typeof ingrediente === "string" ? (
                                            ingrediente
                                        ) : (
                                            <>
                                                <h3>{ingrediente.subtitulo}</h3>

                                                <ul>
                                                    {ingrediente.ingredientes.map((item, j) => (
                                                        <li key={j}>{item}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}