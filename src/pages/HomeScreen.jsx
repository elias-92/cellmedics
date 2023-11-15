import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import GoogleReviews from '../components/GoogleReviews'
import Home from '../components/Home'
import Location from '../components/Location'
import Services from '../components/Services'
import WspButton from '../components/WspButton'

const HomeScreen = () => {
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
