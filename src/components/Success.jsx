import { useNavigate } from 'react-router-dom'

const Success = ({ setShowSuccess }) => {
  const navigate = useNavigate()

  const redirectToHome = () => {
    setShowSuccess(false)
    navigate('#Inicio')
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-[200]">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-green-500">¡Éxito!</h2>
        <p className="text-gray-700 mb-4">El formulario se ha enviado correctamente.</p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
          onClick={redirectToHome}
        >
          Ir a Inicio
        </button>
      </div>
    </div>
  )
}

export default Success
