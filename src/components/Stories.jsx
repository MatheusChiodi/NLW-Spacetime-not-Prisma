export function Stories() {
  // criar uma array de objetos com as memórias
  const memories = [
    {
      id: '1',
      date: "1 de Janeiro de 2021",
      title: "Entrega do TCC",
      image: "projectsIMG/parquevivo.png",
      description: "Conclusão do TCC do curso de Técnico em Informática, realizado no Instituto Federal de Araraquara, em conjunto com o Ensino Médio.."
    },
    {
      id: '2',
      date: "17 de Março de 2021",
      title: "Inicio na FI Sistemas",
      image: "projectsIMG/newWork.png",
      description: "Inicio na FI Sistemas como desenvolvedor de sistemas."
    },
    {
      id: '3',
      date: "31 de Outubro de 2021",
      title: "Primeiro Projeto individual na FI Sistemas",
      image: "projectsIMG/lgpd.png",
      description: "Desenvolvimento do meu primeiro projeto individual na FI Sistemas: um sistema de gerenciamento em conformidade com a LGPD (Lei Geral de Proteção de Dados)."
    },
    {
      id: '4',
      date: "Junho de 2022",
      title: "Segundo Projeto individual na FI Sistemas",
      image: "projectsIMG/webcontrolpdf.png",
      description: "Desenvolvimento do meu segundo projeto individual na FI Sistemas: um sistema de gerenciamento de arquivos."
    }, 
    {
      id: '5',
      date: "Dezembro de 2022",
      title: "Entrega de sites",
      image: "projectsIMG/webs2022.png",
      description: "Conclusão de 7 projetos personalizados de websites para clientes da FI Sistemas. Garantindo soluções adaptadas às necessidades específicas de cada cliente."
    },
  ]


  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => (
        <div key={memory.id} className="space-y-4 memory">
          <small className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
            {memory.date}
          </small>
          <h1 className="w-full text-left text-gray-100 md:text-[2rem] text-[1.5rem] font-medium">{memory.title}</h1>
          <div className="relative w-full h-280 rounded-8 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-[1.01]">
            <img
              className="w-full h-full object-cover aspect-video rounded-xl"
              src={memory.image}
              alt="Imagem da memória" />
          </div>
          <p className="text-lg leading-relaxed text-gray-100">
            {memory.description}
          </p>
        </div>
      ))}
    </div>
  )
}
