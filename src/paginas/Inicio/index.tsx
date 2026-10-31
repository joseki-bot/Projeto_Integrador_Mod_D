/*=== PÁGINA INICIO === */

import { Details } from "../../componentes/Body/Details";
import { Receita } from "../../componentes/Body/Receita";
/*import styles from "./styles.module.css";*/

export function Inicio() {
  return (
    <div className="a">

      <Details titulo="Bolos">
        <Receita 
          nome="Bolo de Laranja"
          imagem="./receita/bolo/Laranja.png">
        </Receita>

        <Receita 
          nome="Bolo de Laranja"
          imagem="./receita/bolo/Laranja.png">
        </Receita>
                
      </Details> 


    </div>
  );
}
