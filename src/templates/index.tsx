import { Rodape } from "../componentes/Footer/Rodape";
import { Logo } from "../componentes/Heading/Logo";
import { Nave } from "../componentes/Heading/Nave";
import { Inicio } from "../paginas/Inicio";

export default function Templates() {
  return (
    <>
      <Logo />
      <Nave />

      <main>
        <Inicio />
      </main>

      <Rodape />
    </>
  );
}
