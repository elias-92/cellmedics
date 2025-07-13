import Home from '../components/Home'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import logo from '../assets/img/logo.png'
import { useEffect, useState } from 'react'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Location from '../components/Location'
import Services from '../components/Services'
import WspButton from '../components/WspButton'
import GoogleReviews from '../components/GoogleReviews'

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 bg-[#224b8d] flex flex-col items-center justify-center z-50"
      >
        <img
          src={logo}
          alt="CellMedics"
          className="w-48 h-auto animate-pulse mb-4"
        />
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-white animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </motion.div>
    )
  }
  return (
    <>
      <Home />
      <AboutMe />
      <Services />
      <GoogleReviews />
      <Location />
      <Contact />
      <WspButton />
      <Footer />
    </>
  )
}

export default HomeScreen
