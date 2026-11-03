import "./padrao/global.css";
import "./padrao/theme.css";

import { Logo } from "./componentes/Heading/Logo";
import { Nave } from "./componentes/Heading/Nave";
import { Rodape } from "./componentes/Footer/Rodape";
import Laranja  from "./paginas/Receitas/Bolos/Laranja";



export default function App() {
  return (
    <>
      <Logo />
      <Nave /> 

      <main>
        <Laranja />
      </main>

      <Rodape />
    </>
  );
}

