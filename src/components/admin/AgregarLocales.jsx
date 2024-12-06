import React from "react";

const InputDiv = ({ name, placeholder, label }) => {
  return (
    <>
      <div className=" grid grid-cols-3 gap-2 mb-2 items-center">
        <label className="col-span-1 text-end" htmlFor={name}>
          {label}
        </label>
        <input
          className="col-span-2 px-2 py-1 outline-none"
          type="text"
          name={name}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
export const AgregarLocales = () => {
  return (
    <form className="p-2 w-fit m-auto border bg-gradient-to-t to-green-100 from-white rounded">
      <InputDiv name="nombre" placeholder="Nombre del local" label="Nombre" />
      <InputDiv name="direccion" placeholder="Dirección" label="Dirección" />
      <InputDiv name="localidad" placeholder="Localidad" label="Localidad" />
      <div className="flex justify-end">
        <button className="px-4 py-2 border border-green-200 rounded shadow bg-green-100 " type="submit">
          Agregar Local
        </button>
      </div>
    </form>
  );
};
