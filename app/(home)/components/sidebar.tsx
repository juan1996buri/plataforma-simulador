"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlist = [
  {
    desciption: "Institucion",
    path: "/instituciones",
  },
  {
    desciption: "Simulador",
    path: "/simulador",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="p-3">
      <ul className="flex flex-col gap-y-3">
        {navlist.map((navItem, index) => {
          const isActive = pathname === navItem.path;

          return (
            <Link
              href={navItem.path}
              key={index}
              className={`${
                isActive
                  ? " bg-green-300 border-green-500  text-green-600 "
                  : "border-transparent hover:bg-gray-100"
              }  p-3 rounded-md font-semibold border-2`}
            >
              <h3>{navItem.desciption}</h3>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
