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
  LocateIcon,
  MapPinHouse,
  Menu,
  PersonStanding,
  PhoneCall,
  Sprout,
} from "lucide-react";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-10 h-10" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex gap-4">
          <SheetTitle className="text-center mt-3 text-2xl">Menu</SheetTitle>
          <SheetDescription>Perfil Gym menu</SheetDescription>
          <ul className="flex flex-col gap-4 items-start text-xl">
            <li className="cursor-pointer mt-4  bg-green-200 w-full rounded-lg px-6 py-1.5 hover:bg-green-300 transition justify-start">
              <Link to="/" className="flex items-center gap-2">
              Home <Home />
              </Link>
            </li>
            <li className="cursor-pointer mt-4 flex items-center gap-2  bg-green-200 w-full rounded-lg px-6 py-1.5 hover:bg-green-300 transition justify-start">
              Unidades <MapPinHouse />
            </li>
            <li className="cursor-pointer mt-4 flex items-center gap-2  bg-green-200 w-full rounded-lg px-6 py-1.5 hover:bg-green-300 transition justify-start">
              Nosotros <PersonStanding />
            </li>
            <li className="cursor-pointer mt-4 flex items-center gap-2  bg-green-200 w-full rounded-lg px-6 py-1.5 hover:bg-green-300 transition justify-start">
              Compromiso <Sprout />
            </li>
            <li className="cursor-pointer mt-4 flex items-center gap-2  bg-green-200 w-full rounded-lg px-6 py-1.5 hover:bg-green-300 transition justify-start">
              Recomendaciones <HeartHandshake />
            </li>
            <li className="cursor-pointer mt-4 flex items-center gap-2  bg-green-200 w-full rounded-lg px-6 py-1.5 hover:bg-green-300 transition justify-start">
              Contacto <PhoneCall />
            </li>
            <hr />
            <li className="cursor-pointer mt-4 flex items-center gap-2  bg-green-200 w-full rounded-lg px-6 py-1.5 hover:bg-green-300 transition justify-start">
              <Link to="/Administrador" className="flex items-center gap-2">
                Administrador <PersonStanding />
              </Link>
            </li>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
