import { FaBars, FaTimes } from 'react-icons/fa'
import { BsInstagram, BsFacebook, BsTiktok } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import logo from '../assets/img/logo.png'

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { id: 1, link: 'Inicio', title: 'Inicio' },
    { id: 2, link: 'SobreMi', title: 'Sobre Nosotros' },
    { id: 3, link: 'Servicios', title: 'Servicios' },
    { id: 4, link: 'Ubicacion', title: 'Ubicación' },
    { id: 5, link: 'Contacto', title: 'Contacto' }
  ]

  return (
    <motion.header
      className={`flex justify-between items-center text-white fixed top-0 w-full z-[100] px-4 md:px-6 lg:px-12 transition-colors duration-500 ${
        scrolled ? 'bg-gray-900 shadow' : 'bg-transparent'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <a
        href="#Inicio"
        className=" w-[180px] h-[80px] flex items-center justify-center"
      >
        <img
          src={logo}
          alt="Logo"
          className="w-[90%] h-auto"
        />
      </a>
      <ul className="hidden lg:flex">
        {links.map(({ link, id, title }) => (
          <li
            key={id}
            className="cursor-pointer hover:text-gray-500 p-4 text-[1.1rem] lg:text-[1.3rem]"
          >
            <Link
              to={link}
              smooth={true}
              duration={1000}
              offset={-70}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setIsShowMenu(!isShowMenu)}
        className="cursor-pointer pr-4 z-10 text-gray-100 lg:hidden"
      >
        {isShowMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {isShowMenu && (
        <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-[#0B1131]/90 animate-slide-in-down lg:hidden">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="cursor-pointer hover:text-gray-500 px-4 py-6 text-4xl"
            >
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsShowMenu(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="hidden lg:flex gap-x-4 text-center">
        <a
          href="https://www.instagram.com/cellmedics.em"
          target="_blank"
          rel="noreferrer"
          className="text-3xl hover:text-gray-500"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61553171596419&mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
          className="text-3xl hover:text-gray-500"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.tiktok.com/@repcell2023em"
          target="_blank"
          rel="noreferrer"
          className="text-3xl hover:text-gray-500"
        >
          <BsTiktok />
        </a>
      </div>
    </motion.header>
  )
}

export default Navbar
