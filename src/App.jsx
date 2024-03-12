import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NavbarComponent } from "./components/NavbarComponent"
import { About } from "./pages/About"
import { AppRoutes } from "./routes/AppRoutes"
import { Footer } from "./components/Footer/Footer"
import './index.css';

function App() {

  return (
    <>
    
    <NavbarComponent />
    <AppRoutes />
    <Footer/>
    </>
  )
}

export default App
