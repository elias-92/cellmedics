import React from 'react'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:w-4/5">
        <div className="text-center mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold">Cellmedics</h3>
          <p className="text-md">Tu solución en reparación de móviles</p>
        </div>
        <div className="flex items-center space-x-8 pb-4">
          <a
            href="https://instagram.com/repcell_e.m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552207730823&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552207730823&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-500"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
      <div className="bg-gray-800 py-2 mx-auto md:mt-8 rounded-md">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cellmedics. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
