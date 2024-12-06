import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Facilities } from "./components/facilities/Facilities";
import { Nosotros } from "./pages/Nosotros";
import { Unidades } from "./pages/Unidades";
import { Compromiso } from "./pages/Compromiso";
import { Recomendaciones } from "./pages/Recomendaciones";
import { Contacto } from "./pages/Contacto";
import { NotFound } from "./pages/NotFound";
import { Admin } from "./pages/Admin";
function App() {
  return (
    <div className="font-Outfit min-h-screen">
      <Header />
      <Routes>
        {/* Ruta principal */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Facilities />
            </>
          }
        />
        {/* Rutas secundarias */}
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/compromiso" element={<Compromiso />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Administrador" element={<Admin />} />
        {/* Ruta para 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
