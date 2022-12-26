import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import AddService from './Components/AddService/AddService'
import Bannar from './Components/Bannar/Bannar'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home'
import Navigation from './Components/Navigation/Navigation'
import Services from './Components/Services/Services'
import UpdateService from './Components/UpdateService/UpdateService'

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/bannar" element={<Bannar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/addService" element={<AddService />} />
        <Route path="/updateService/:serviceId" element={<UpdateService />} />
      </Routes>
    </div>
  )
}

export default App
