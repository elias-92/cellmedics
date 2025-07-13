import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WspButton = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.div
      whileHover={{ scale: 1.09 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 p-4 z-[100] bg-green-500 text-white rounded-full cursor-pointer"
      onClick={() =>
        window.open(
          `https://api.whatsapp.com/send?phone=${process.env.REACT_APP_PHONE_NUMBER}`,
          '_blank'
        )
      }
    >
      <FaWhatsapp className="text-2xl" />
    </motion.div>
  )
}

export default WspButton
