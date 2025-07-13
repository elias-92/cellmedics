import { motion } from 'framer-motion'
import changeBatery from '../assets/img/bateryChange.avif'
import changePin from '../assets/img/changePin.avif'
import changePhone from '../assets/img/changePhone.avif'
import repairScreen from '../assets/img/screenRepair.avif'
import waterDamage from '../assets/img/waterDamage.avif'
import changeCamera from '../assets/img/changeCamera.avif'
import { Link } from 'react-scroll'
const serviceData = [
  {
    id: 1,
    title: 'Cambio de batería',
    image: changeBatery
  },
  {
    id: 2,
    title: 'Reparación pin carga',
    image: changePin
  },
  {
    id: 3,
    title: 'Reparación de pantalla',
    image: changePhone
  },
  {
    id: 4,
    title: 'Reparación de daños por agua',
    image: waterDamage
  },
  {
    id: 5,
    title: 'Reparación de cámara',
    image: changeCamera
  },
  {
    id: 6,
    title: 'Presupuestos sin cargo',
    image: repairScreen
  }
]

const Services = () => {
  return (
    <section
      id="Servicios"
      className="bg-[#E9F3F3] pt-[40px]"
    >
      <div className="container mx-auto text-center pb-8">
        <motion.h2
          className="text-4xl font-semibold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white w-[335px] rounded-lg shadow p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            </motion.div>
          ))}
        </div>
        <div className="my-8">
          <Link
            to="Contacto"
            smooth={true}
            duration={1000}
            offset={-70}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="group font-medium w-fit px-10 py-2 my-2 flex items-center rounded-md border-2 border-solid bg-[#224B8D] text-white cursor-pointer mx-auto duration-150 hover:bg-[#224b8de7]"
            >
              Contáctanos
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
