import React from "react";
import { AgregarLocales } from "../components/admin/AgregarLocales";
export const Admin = () => {
  return (
    <div className="grid grid-cols-4 gap-1 sm:gap-2">
      <aside className="col-span-1 border ">
        <ul className="p-2">
          <li className="  px-2 py-1 bg-gradient-to-r from-green-100 via-green-100 to-white">
            Locales
          </li>
        </ul>
      </aside>
      <main className="col-span-3 border p-4">
        <h1 className="text-xl text-center p-2">Panel de Administración</h1>
        <p className="opacity-75 text-center p-2 ">
          Aquí podrás gestionar todos tus locales, incluyendo agregar, editar, y
          eliminar.
        </p>
        {/* Agregar componente de gestión de locales */}
        <AgregarLocales />
      </main>
    </div>
  );
};
