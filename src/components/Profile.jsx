export function Profile() {

  return (
    <div className="flex flex-col w-100 text-center items-center justify-center mx-auto">
      <img src='public/logo.svg' alt="SpaceTime" />
      <img
        src='https://github.com/MatheusChiodi.png'
        width={40}
        height={40}
        alt="Profile"
        className="h-[160px] w-[160px] rounded-full mt-5 imgPerfil"
      />
      <p className="xl:text-[2rem] lg:text-[1.5rem] md:text-[20px] text-center">
        Cápsula do tempo de <br />
        <strong>Matheus Chiodi</strong>
      </p>
    </div>
  )
}
