import { FaBars, FaTimes } from 'react-icons/fa'
import { BsInstagram, BsFacebook, BsTiktok } from 'react-icons/bs'
import { useState } from 'react'

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const links = [
    {
      id: 1,
      link: 'Inicio'
    },
    {
      id: 3,
      link: 'Servicios'
    },
    {
      id: 4,
      link: 'Ubicacion'
    },
    {
      id: 5,
      link: 'Contacto'
    }
  ]
  return (
    <header className="fixed top-0 flex bg-gray-900 justify-between items-center px-4 md:px-6 text-white mx-auto lg:px-12 md:py-0 w-full z-[100] transition-colors duration-700">
      <a href="#Inicio">
        <h2 className="text-bold text-4xl p-4">CellMedics</h2>
      </a>
      <ul className="hidden lg:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="cursor-pointer hover:text-gray-500 p-4 text-[1.1rem] lg:text-[1.3rem]"
          >
            <a href={`#${link}`}>{link}</a>
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
              className="cursor-pointer hover:text-gray-500 px-4 py-6 text-4xl transition-all duration-300"
            >
              <a
                href={`#${link}`}
                onClick={() => setIsShowMenu(!isShowMenu)}
              >
                {link}
              </a>
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
    </header>
  )
}

export default Navbar
