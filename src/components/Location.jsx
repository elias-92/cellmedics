import React from 'react'

const Location = () => {
  return (
    <section
      id="Ubicacion"
      className="bg-[#E9F3F3] py-[90px]"
    >
      <div className="container mx-auto text-center md:flex md:flex-row md:items-center">
        <div className="flex flex-col gap-4 mx-4 md:gap-[5rem] md:w-[40%]">
          <div className="border-2 border-solid rounded-md py-5 border-[#375C98]">
            <p className="">
              <strong>
                ¿Dónde nos encontras? <br />
              </strong>
              Pellegrini 377, Cap. Bermudez
            </p>
          </div>
          <div className="border-2 border-solid rounded-md py-5 border-[#375C98]">
            <p>
              <strong>
                Horarios de Atención
                <br />
              </strong>
              Lunes a Viernes de 10 a 18hs <br />
              Sábados de 9 a 13 hs
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden md:w-[60%]">
          <div className="rounded-md border-2 border-solid m-3 p-3 md:flex md:justify-between">
            <iframe
              title="Ubicación de cellmedics"
              src={process.env.REACT_APP_URL_GOOGLE_MAP}
              className='w-full h-[200px] md:h-[350px]'
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
