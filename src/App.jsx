import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header.jsx'
import QuickContactBar from './components/QuickContactBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Packages from './pages/Packages.jsx'

function App() {
  const location = useLocation()

  return (
    <>
      <Header />
      <QuickContactBar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/pakete" element={<Packages />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default App
