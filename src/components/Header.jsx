import React from "react";
import { Sidebar } from "./sideBar/Sidebar";
import { useLocation, Link } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  // Arreglo de rutas para el menú
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Unidades", path: "/unidades" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Compromiso", path: "/compromiso" },
    { name: "Recomendaciones", path: "/recomendaciones" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="bg-green-500 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-3xl font-bold">Perfil Gym</h1>

        {/* Menú de navegación */}
        <ul className="hidden lg:flex gap-12 text-white/90 items-center mx-auto md:text-xl">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`cursor-pointer ${
                  path === item.path ? "text-black" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul> AGUSSSSS LINDOOOO
        {/* Sidebar para pantallas pequeñas */}
        <div className="lg:hidden block">
          <Sidebar />
        </div>
      </div>
    </header>
  );
};
