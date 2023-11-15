import backgroundImg2 from '../assets/img/banner-1.avif'
import { useState, useEffect } from 'react'

const Home = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true)
    }, 200)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      <section
        id="Inicio"
        className="relative w-full h-screen pt-28 text-white"
        style={{
          backgroundImage: `url(${backgroundImg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: 'calc(100vh - 76px)'
        }}
      >
        <div
          className={
            'absolute inset-0 bg-[#224b8d] opacity-70 z-10 transition-all ease-in-out duration-500'
          }
        ></div>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
          <div
            className={`flex gap-4 flex-col items-center justify-center z-20 w-full text-left transition-all ease-in-out duration-1000 ${
              showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            <h1 className="text-center text-4xl w-full font-bold md:mb-4 md:text-5xl uppercase relative">
              Reviva su dispositivo móvil
            </h1>
            <div className="items-center">
              <p className="text-white text-lg text-center relative">
                Servicio experto en reparación de móviles que le devuelve la vida a tu dispositivo.
              </p>
              <p className="text-white text-lg/7 text-center relative">
                Soluciones rápidas, confiables y asequibles.
              </p>
            </div>
            <a href="#Contacto">
              <button className="group font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-solid bg-gray-300 text-gray-900 rounded-8 border-gray-300 cursor-pointer mx-auto duration-150 hover:bg-[#bdbcbc] relative">
                Solicitar Presupuesto
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
