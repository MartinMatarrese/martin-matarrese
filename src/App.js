import {Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import { Footer } from "./components/Footer/Footer";
import { Perfil } from "./components/Perfil/Perfil";
import { Certificaciones } from "./components/Certificaciones/Certificaciones";
import { Proyectos } from "./components/Proyectos/Proyectos";
import { Experiencia } from "./components/Experiencia/Experiencia";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Perfil/>}/>
            <Route path="/certificaciones" element={<Certificaciones/>}/>
            <Route path="proyectos" element={<Proyectos/>}/>
            <Route path="/experiencia" element={<Experiencia/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
