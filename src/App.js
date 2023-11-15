import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeScreen from './pages/HomeScreen'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomeScreen />}
        />
        <Route
          path="/*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </>
  )
}

export default App
