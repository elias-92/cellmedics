import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import backgroundImage from '../assets/img/banner-1.avif'
import backgroundVideo from '../assets/video/videoLoop.webm'

const Home = () => {
  return (
    <section
      id="Inicio"
      className="relative w-full h-screen pt-28 text-white overflow-hidden"
      style={{ minHeight: 'calc(100vh - 76px)' }}
    >
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt="CellMedics fondo"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            objectPosition: '75% center'
          }}
        >
          <source
            src={backgroundVideo}
            type="video/mp4"
          />
        </motion.video>
      </div>
      <div className="absolute inset-0 bg-[#224b8d] opacity-30 z-10"></div>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="flex gap-4 flex-col items-center justify-center z-20 w-full text-left"
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
          <Link
            to="Contacto"
            smooth={true}
            duration={1000}
            offset={-70}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="group font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-solid bg-gray-300 text-gray-900 border-gray-300 cursor-pointer mx-auto duration-150 hover:bg-[#bdbcbc] relative"
            >
              Solicitar Presupuesto
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
