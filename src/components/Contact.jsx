import Success from './Success'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useForm } from '../hooks/useForm'
import {
  validateName,
  validateLastName,
  validateEmail,
  validatePhone,
  validateSelect,
  validateTextarea
} from '../validations/formValidations'

const Contact = () => {
  const form = useRef()
  const initialForm = {
    user_name: '',
    user_lastname: '',
    user_email: '',
    user_telephone: '',
    user_select: '',
    message: ''
  }
  const { formState, onInputChange, resetForm } = useForm(initialForm)
  const { user_name, user_lastname, user_email, user_telephone, user_select, message } = formState
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  // Función para validar todo el formulario
  const validateForm = () => {
    // Llama a cada función de validación y almacena los mensajes de error en el estado de errores
    const newErrors = {
      user_name: validateName(formState.user_name),
      user_lastname: validateLastName(formState.user_lastname),
      user_email: validateEmail(formState.user_email),
      user_telephone: validatePhone(formState.user_telephone),
      user_select: validateSelect(formState.user_select),
      message: validateTextarea(formState.message)
    }
    setErrors(newErrors)
    // Devuelve true si no hay mensajes de error (formulario válido), de lo contrario, devuelve false
    return !Object.values(newErrors).some((error) => error !== null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(() => {
          resetForm()
          setShowSuccess(true)
        })
        .catch((error) => {
          console.error('Error al enviar el formulario:', error)
        })
    } else {
      console.error('Formulario con errores:', errors)
    }
  }
  return (
    <section
      id="Contacto"
      className="relative pt-[40px]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#e9f3f3] to-gray-900 opacity-50"></div>

      <div className="container relative z-10 mx-auto text-center md:pb-8">
        <div className="px-2 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl text-black font-bold mb-6"
          >
            Contacto
          </motion.h2>
          <p className="text-lg text-black mb-8">
            ¿Tienes alguna pregunta o consulta? ¡No dudes en contactarnos!
          </p>
        </div>
        {!showSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-gradient-to-b from-[#e9f3f3] to-gray-900 p-8 relative z-10 md:rounded-lg"
          >
            <form
              onSubmit={handleSubmit}
              ref={form}
            >
              <div className="mb-4">
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className={`w-full py-2 px-3 border outline-none rounded-md focus:ring focus:ring-[#224B8D] ${
                    errors.user_name ? 'border-red-500' : ''
                  }`}
                  required
                  placeholder="Nombre"
                  onChange={onInputChange}
                  value={user_name}
                />
                {errors.user_name && <p className="text-red-500 text-sm">{errors.user_name}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="user_lastname"
                  name="user_lastname"
                  className={`w-full py-2 px-3 border outline-none rounded-md focus:ring focus:ring-[#224B8D] ${
                    errors.user_lastname ? 'border-red-500' : ''
                  }`}
                  required
                  placeholder="Apellido"
                  onChange={onInputChange}
                  value={user_lastname}
                />
                {errors.user_lastname && (
                  <p className="text-red-500 text-sm">{errors.user_lastname}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="user_email"
                  id="user_email"
                  name="user_email"
                  className={`w-full py-2 px-3 border outline-none rounded-md focus:ring focus:ring-[#224B8D] ${
                    errors.user_email ? 'border-red-500' : ''
                  }`}
                  required
                  placeholder="Email"
                  onChange={onInputChange}
                  value={user_email}
                />
                {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="user_telephone"
                  name="user_telephone"
                  className={`w-full py-2 px-3 border outline-none rounded-md focus:ring focus:ring-[#224B8D] ${
                    errors.user_telephone ? 'border-red-500' : ''
                  }`}
                  required
                  placeholder="Telefono"
                  onChange={onInputChange}
                  value={user_telephone}
                />
                {errors.user_telephone && (
                  <p className="text-red-500 text-sm">{errors.user_telephone}</p>
                )}
              </div>
              <div className="mb-4">
                <select
                  id="user_select"
                  name="user_select"
                  className={`w-full py-2 px-3 border outline-none rounded-md focus:ring focus:ring-[#224B8D] ${
                    errors.user_select ? 'border-red-500' : ''
                  }`}
                  onChange={onInputChange}
                  value={user_select}
                >
                  <option
                    value=""
                    disabled
                    defaultValue
                  >
                    Selecciona una Marca
                  </option>
                  <option value="motorola">Motorola</option>
                  <option value="samsung">Samsung</option>
                  <option value="huawei">Huawei</option>
                  <option value="xiaomi">Xiaomi</option>
                  <option value="lg">LG</option>
                  <option value="otros">Otros</option>
                </select>
                {errors.user_select && <p className="text-red-500 text-sm">{errors.user_select}</p>}
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Deje una descripción de su problema"
                  id="message"
                  name="message"
                  rows="4"
                  className={`w-full py-2 px-3 border outline-none rounded-md focus:ring focus:ring-[#224B8D] ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  onChange={onInputChange}
                  value={message}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  className="group font-medium w-fit px-10 py-2 my-2 flex items-center rounded-md border-2 border-solid bg-[#224B8D] text-white cursor-pointer mx-auto duration-150 hover:bg-[#224b8de7]"
                >
                  Enviar
                </motion.button>
              </div>
            </form>
          </motion.div>
        ) : (
          <Success setShowSuccess={setShowSuccess} />
        )}
      </div>
    </section>
  )
}

export default Contact
