import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WspButton = () => {
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > 200) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const hanldeWspClick = () => {
    const phoneNumber = process.env.REACT_APP_PHONE_NUMBER
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank')
  }
  return (
    <div
      id="whatsapp-button"
      className={`fixed bottom-4 right-4 p-4 z-[100] bg-green-500 text-white rounded-full cursor-pointer transition-opacity ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={hanldeWspClick}
    >
      <FaWhatsapp className="text-2xl" />
    </div>
  )
}

export default WspButton
