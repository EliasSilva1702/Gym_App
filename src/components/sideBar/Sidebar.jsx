import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  HeartHandshake,
  Home,
  LocateFixedIcon,
  MapPinHouse,
  Menu,
  PersonStanding,
  PhoneCall,
  Sprout,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  const menuItems = [
    { name: "Inicio", path: "/", icon: <Home className="w-6 h-6 mr-2" /> },
    {
      name: "Unidades",
      path: "/unidades",
      icon: <LocateFixedIcon className="w-6 h-6 mr-2" />,
    },
    {
      name: "Nosotros",
      path: "/nosotros",
      icon: <PersonStanding className="w-6 h-6 mr-2" />,
    },
    {
      name: "Compromiso",
      path: "/compromiso",
      icon: <HeartHandshake className="w-6 h-6 mr-2" />,
    },
    {
      name: "Recomendaciones",
      path: "/recomendaciones",
      icon: <Sprout className="w-6 h-6 mr-2" />,
    },
    {
      name: "Contacto",
      path: "/contacto",
      icon: <PhoneCall className="w-6 h-6 mr-2" />,
    },
    {
      name: "Administrador",
      path: "/Administrador",
      icon: <PhoneCall className="w-6 h-6 mr-2" />,
    },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-10 h-10" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center mt-3 text-2xl">Menú</SheetTitle>
          <SheetDescription className="text-center">
            Perfil Gym
          </SheetDescription>
        </SheetHeader>



        {/* Menú de navegación */}
        <ul className="flex flex-col gap-4 mt-6 text-lg text-gray-700">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={`flex items-center p-2 rounded-md w-full ${
                path === item.path
                  ? "bg-green-200 text-green-800 font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.icon}
              <Link
                to={item.path}
                className={`cursor-pointer flex-1 ${
                  path === item.path ? "text-green-800" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
