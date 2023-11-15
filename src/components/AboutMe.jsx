import React, { useEffect, useState } from 'react'
import { Element } from 'react-scroll'

import imgAbout from '../assets/img/imgAbout.avif'

const AboutMe = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.getElementById('SobreMi')
      const aboutPosition = aboutElement.getBoundingClientRect()
      if (aboutPosition.top < window.innerHeight / 2) {
        setShowContent(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Element id="SobreMi">
      <section className="relative pt-[50px] w-full h-full flex justify-center items-center bg-[#E2EEEE]">
        <div className="relative z-10 container px-4 py-8 lg:py-12">
          <div
            className={`flex w-full gap-10 flex-col items-center lg:flex-row transition-all ease-in-out duration-1000 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
            }`}
          >
            <div className="flex-1 flex flex-col max-w-2xl">
              <div className=" flex flex-col items-start gap-4">
                <h2 className="font-semibold text-4xl tracking-wide">Sobre Cellmedics</h2>
                <p className="text-base leading-6">
                  Cellmedics es un proveedor líder de servicios de reparación de móviles con sede en
                  Cap. Bermúdez, Santa Fe, Argentina. Altamente capacitados, nos dedicamos a brindar
                  servicios de reparación de primer nivel para todo tipo de dispositivos.
                </p>
                <p className="text-base leading-6">
                  En Cellmedics, entendemos la importancia de sus dispositivos móviles en su vida
                  diaria y nos esforzamos por ofrecer soluciones de reparación rápidas y confiables.
                  Ya sea que su dispositivo tenga la pantalla rota, problemas con la batería o
                  cualquier otro problema, estamos aquí para ayudarlo. Con nuestro compromiso con la
                  calidad y la satisfacción del cliente, puede confiar en nosotros para recuperar su
                  dispositivo móvil en óptimas condiciones.
                </p>
              </div>
            </div>
            <div className="flex-1 flex w-full h-full justify-center lg:justify-start">
              <div className="flex-shrink-0 relative w-full mx-auto">
                <img
                  alt="broken black smartphone"
                  src={imgAbout}
                  className="rounded-lg md:rounded-xl lg:rounded-2xl"
                  style={{
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default AboutMe
