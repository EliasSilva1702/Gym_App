import React from "react";

export const Facilities = () => {
  const facilities = [
    {
      id: 1,
      name: "Punta Carretas",
      direction: "21 de Septiembre 2884",
      city: "Montevideo",
      image: "/facilities-img/PuntaCarretas-perfilGym.jpg",
      rating: 4.5,
      price: 100,
      href: "#",
    },
    {
      id: 2,
      name: "Punta del Este",
      direction: "Pedragosa Sierra esq. Bvr. Artigas",
      city: "Parada 5, Punta del Este",
      image: "/facilities-img/PtaDelEste-perfilGym.jpg",
      rating: 4.5,
      price: 100,
      href: "#",
    },
    {
      id: 3,
      name: "Parque Rodó",
      direction: "Maldonado 1779",
      city: "Montevideo",
      image: "/facilities-img/ParqueRodo-perfilGym.jpg",
      rating: 4.5,
      price: 100,
      href: "#",
    },
    {
      id: 4,
      name: "Pocitos",
      direction: "Club Trouville, Chucarro 1031",
      city: "Montevideo",
      image: "/facilities-img/Pocitos-perfilGym.jpeg",
      rating: 4.5,
      price: 100,
      href: "#",
    },
    {
      id: 5,
      name: "Cordón Soho",
      direction: "Maldonado 1898 esq. Eduardo Acevedo",
      city: "Montevideo",
      image: "/facilities-img/Cordon-perfilGym.jpg",
      rating: 4.5,
      price: 100,
      href: "#",
    },
    {
      id: 6,
      name: "Nuevo Pocitos",
      direction: "Rivera y Bustamante",
      city: "Montevideo",
      image: "/facilities-img/NuevoPocitos-perfilGym.jpeg",
      rating: 4.5,
      price: 100,
      href: "#",
    },
    {
      id: 7,
      name: "Ciudad de la Costa",
      direction: "Avda. Gral. Alvear 3825, Bajada 12",
      city: "Ciudad de la Costa",
      image: "/facilities-img/CdeLaCosta-perfilGym.jpg",
      rating: 4.5,
      price: 100,
      href: "#",
    },
    {
      id: 8,
      name: "Carrasco",
      direction: "Cannes 1799 esq. Avda. Italia",
      city: "Montevideo",
      image: "/facilities-img/Carrasco-perfilGym.jpg",
      rating: 4.5,
      price: 100,
      href: "#",
    },
    {
      id: 9,
      name: "Buceo",
      direction: "Blvr. Batlle y Ordóñez 1410 esq. Rivera",
      city: "Montevideo",
      image: "/facilities-img/Buceo-perfilGym.jpg",
      rating: 4.5,
      price: 100,
      href: "#",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-12 my-12 w-fit mx-auto p-8 md:p-4">
      {facilities.map((facility) => (
        <div
          key={facility.id}
          className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg w-full h-full"
        >
          <img
            src={facility.image}
            alt={facility.name}
            className="w-80 h-fit object-cover rounded-lg"
          />
          <div className="mt-4 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">{facility.name}</h3>
            <div className="flex flex-col items-center justify-center gap-4 mt-4 mb-2">
            <p className="text-gray-700 text-sm">{facility.direction}</p>
            <p className="text-gray-700 text-sm font-semibold">{facility.city}</p>
            </div>
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-700 text-sm">
                {facility.rating} ⭐️
              </span>
              <span className="text-gray-700 text-sm ml-2">
                {facility.price}$
              </span>
            </div>
            <a
              href={facility.href}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg transition hover:bg-green-600"
            >
              Visitar
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
