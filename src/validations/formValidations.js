const validateName = (name) => {
  if (!name.trim()) {
    return 'El nombre es requerido'
  }
  if (name.length < 3 || name.length > 20) {
    return 'El nombre debe tener entre 3 y 20 caracteres'
  }
  return null
}

const validateLastName = (lastName) => {
  if (!lastName.trim()) {
    return 'El apellido es requerido'
  }
  if (lastName.length < 3 || lastName.length > 20) {
    return 'El apellido debe tener entre 3 y 20 caracteres'
  }
  return null
}

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.trim() || !emailRegex.test(email)) {
    return 'Ingresa un correo electrónico válido'
  }
  return null
}

const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/
  if (!phone.trim() || !phoneRegex.test(phone) || phone.length !== 10) {
    return 'Ingresa un número de teléfono válido'
  }
  return null
}

const validateSelect = (select) => {
  if (!select) {
    return 'Selecciona una opción'
  }
  return null
}

const validateTextarea = (textarea) => {
  if (!textarea.trim()) {
    return 'Este campo no puede estar vacío'
  }
  return null
}

export {
  validateName,
  validateLastName,
  validateEmail,
  validatePhone,
  validateSelect,
  validateTextarea
}
