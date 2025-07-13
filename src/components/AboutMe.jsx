import { motion } from 'framer-motion'
import imgAbout from '../assets/img/imgAbout.avif'

const AboutMe = () => (
  <section
    id="SobreMi"
    className="py-[50px] w-full h-full flex justify-center items-center bg-[#E2EEEE]"
  >
    <div className="container flex flex-col px-4 lg:flex-row gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-2xl"
      >
        <h2 className="font-semibold text-4xl mb-4">Sobre Cellmedics</h2>
        <p className="mb-2">
          Cellmedics es un proveedor líder de servicios de reparación de móviles con sede en Cap.
          Bermúdez, Santa Fe, Argentina. Altamente capacitados, nos dedicamos a brindar servicios de
          reparación de primer nivel para todo tipo de dispositivos.
        </p>
        <p>
          En Cellmedics, entendemos la importancia de sus dispositivos móviles en su vida diaria y
          nos esforzamos por ofrecer soluciones de reparación rápidas y confiables. Ya sea que su
          dispositivo tenga la pantalla rota, problemas con la batería o cualquier otro problema,
          estamos aquí para ayudarlo. Con nuestro compromiso con la calidad y la satisfacción del
          cliente, puede confiar en nosotros para recuperar su dispositivo móvil en óptimas
          condiciones.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <img
          src={imgAbout}
          alt="Sobre Cellmedics"
          className="rounded-2xl object-cover"
        />
      </motion.div>
    </div>
  </section>
)
export default AboutMe
