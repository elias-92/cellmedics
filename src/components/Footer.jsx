import { motion } from 'framer-motion'
import logo from '../assets/img/logo.png'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white pb-3"
    >
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:w-4/5">
        <div
          className="flex flex-col justify-center items-center
         text-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[180px] h-auto"
          />
          <p className="text-md">Tu solución en reparación de móviles</p>
        </div>
        <div className="flex items-center space-x-8 py-4">
          <a
            href="https://www.instagram.com/cellmedics.em"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl hover:text-gray-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61553171596419&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl hover:text-gray-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@repcell2023em"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-500"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
      <div className="bg-gray-800 py-2 max-w-fit mx-auto md:mt-8 rounded-md px-11">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cellmedics. Todos los derechos reservados.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
