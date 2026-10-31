import "./padrao/global.css";
import "./padrao/theme.css";

import { Logo } from "./componentes/Heading/Logo";
import { Nave } from "./componentes/Heading/Nave";
import { Rodape } from "./componentes/Footer/Rodape";
import NotFound from "./paginas/NotFound";


export default function App() {
  return (
    <>
      <Logo />
      <Nave /> 

      <main>
        <NotFound />
      </main>

      <Rodape />
    </>
  );
}

