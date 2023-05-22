export function Stories() {
  return (
    <div className="flex flex-col gap-10 p-8">
      <div className="space-y-4">
        <small className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          1 de Janeiro de 2021
        </small>
        <h1 className="w-full text-left text-gray-100 md:text-[2rem] text-[1.5rem] font-medium">Entrega do TCC</h1>
        <div className="relative w-full h-280 rounded-8 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-[1.01]">
          <img 
            className="w-full h-full object-cover aspect-video rounded-xl" 
            src="projectsIMG/parquevivo.png"
            alt="Imagem da memória" />
        </div>
        <p className="text-lg leading-relaxed text-gray-100">
          
        </p>
      </div>

      <div className="space-y-4 memory">
        <small className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          17 de Março de 2021
        </small>
        <h1 className="w-full text-left text-gray-100 md:text-[2rem] text-[1.5rem] font-medium">Inicio na FI Sistemas</h1>
        <div className="relative w-full h-280 rounded-8 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-[1.01]">
          <img 
            className="w-full h-full object-cover aspect-video rounded-xl" 
            src="projectsIMG/newWork.png"
            alt="Imagem da memória" />
        </div>
      </div>
    </div>
  )
}
