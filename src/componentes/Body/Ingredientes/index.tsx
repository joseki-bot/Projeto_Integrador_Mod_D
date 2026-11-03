import { style } from "./style";

type Ingrediente = {
    titulo: string;
    subtitulo?: string;
    ingredientes: string[];
};

type Props = {
    Partes: Ingrediente[];
};

export default function Ingredientes({ Partes }: Props) {
    return (
        <section>
            
            <div className= {style.caixa}>

                <div className= {style.Titulo}>
                    <h1 className= {style.T}>INGREDIENTES:</h1>
                </div>
                
            <div className= {style.AreaIngredientes}>
                {Partes.map((parte, index) => (
                    
                    <div key={index}>
                      <h2>{parte.titulo}</h2>
                        {parte.subtitulo && <p>{parte.subtitulo}</p>}
                        <ul>
                            {parte.ingredientes.map((ingrediente, i) => (
                                <li key={i}>{ingrediente}</li>
                            ))}
                        </ul>
                    </div>

                ))}
            </div>
            </div>

    </section>
  );
}