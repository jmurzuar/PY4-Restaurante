import { NavbarComponent } from "./components/NavbarApp/NavbarComponent"
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
