import Ingredientes from "../../../../componentes/Body/Ingredientes";

export default function Laranja() {

  const Partes = [
    {
        titulo: "Massa",
        ingredientes: [
            "1 Laranja (Pera ou Bahia)",
            "3 Ovos",
            "1 Xícara de açúcar",
            "2½ xícaras de farinha de trigo",
            "1 xícara de óleo",
            "1 colher de sopa de fermento químico",
        ],
    },

    {
        titulo: "Geleia",
        ingredientes: [
            "Suco de 4 laranjas",
            "2 xícaras de açúcar",
            "3 colheres de sopa de amido de milho",
        ],
    },

    {
        titulo: "Caldo",
        ingredientes: [
            "300 ml de água",
            "2 colheres de sopa de açúcar",
            "1 pau de canela",
            "2 anis-estrelados",
        ],
    },

    {
        titulo: "Confic",
        subtitulo: "Calda 1",
        ingredientes: [
            "1 xícara de açúcar",
            "3 xícaras de água",
        ],

        subtitulo: "Calda 2",
        ingredientes: [
            "1 xícara de açúcar",
            "3 xícaras de água",
        ],

        subtitulo: "Calda Final",
        ingredientes: [
            "2 xícara de açúcar",
            "5½ xícaras de água",
            "Essência de Baunilha"
      ],
    },

  ];

  return (
    <>
      <Ingredientes Partes={Partes} />
    </>
  );
}