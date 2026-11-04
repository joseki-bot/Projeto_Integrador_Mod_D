export const style = {
  caixa: `
    flex
    justify-center 
    gap-6 
    flex-wrap
    mt-5
    text-[var(--Cor-Fonte)]
  `,

  Titulo:`
    flex
    w-full
    items-center
    justify-center
    text-3xl
    font-bold
  `,

  T:`
    border-4
    border-[var(--Cor-Fonte)]
    rounded-2xl
    px-3
    py-2
    bg-[var(--Cor-Lilas)]
    text-[var(--Cor-Roxo-Escuro)]
  `,

  AreaIngredientes: `
    grid
    grid-cols-2
    mx-5
    gap-5
    
`,

Ingrediente: `
  flex
  flex-col
  
  bg-[var(--Cor-Ciano-2)]
  
  border-3
  rounded-3xl
  px-4
  py-3
  text-[1.1rem]
`,

IngredienteLargo: `
    col-span-2
`,

Ti_Ingrediente: `
  flex
  w-full
  items-center
  justify-center  

  font-bold
  text-2xl
`,

Lista: `
    mt-2
    list-disc
    pl-5
    space-y-2
    text-1xl
    leading-5
`,

subtitulo:`
  font-bold
  pt-2
`,

};