import Botao from "../../componentes/NotFound/Botao";
import Imgagem_Centro from "../../componentes/NotFound/Imagem/Imagem_Centro";
import Paragrafo from "../../componentes/NotFound/Texto/Paragrafo";
import R_404 from "../../componentes/NotFound/Texto/R_404";
import { House } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <R_404 Titulo= "404" />
        
      <Imgagem_Centro Caminho = "./pato/pato_1.png" />

      <Paragrafo Texto ="Receita não encontrada, Por Favor volta ao Inicio" />

      <Botao Texto= "Inicio" Icone={<House />} />

    </>
  );
}