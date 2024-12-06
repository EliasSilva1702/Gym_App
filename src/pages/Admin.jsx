import React from "react";

export const Admin = () => {
  return (
    <div className="flex">
      <aside className="border">
        <ul>
          <li>Locales</li>
          <li></li>
          <li></li>
        </ul>
      </aside>
      <main>
        <h1>Panel de Administración</h1>
        <p>
          Aquí podrás gestionar todos tus locales, incluyendo agregar, editar, y
          eliminar.
        </p>
        {/* Agregar componente de gestión de locales */}
        <form className="*:grid *:grid-cold-2 *:gap-2">
          <div>
            <label htmlFor="nombre">Nombre del local:</label>
            <input type="text" name="nombre" placeholder="Nombre del local" />
          </div>
          <input type="text" placeholder="Dirección" />
          <input type="text" placeholder="Localidad" />
          <button type="submit">Agregar Local</button>
        </form>
      </main>
    </div>
  );
};
