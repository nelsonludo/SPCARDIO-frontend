import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CalendarDaysIcon,
  UserGroupIcon,
  ChartBarSquareIcon,
  FolderPlusIcon,
  UserIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { useAuthStore } from "../../stores/authStore";
import { Switch } from "../../components/ui/switch";
import { MenuItem } from "../../stores";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { user } = useAuthStore();
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    {
      name: "Tableau de bord",
      path: "/admin/tableauDeBord",
      icon: (
        <ChartBarSquareIcon
          className={`w-5 h-5 mr-2 ${
            location.pathname === "/admin/tableauDeBord"
              ? "text-rajapiBlue"
              : "text-rajapiGray"
          }`}
        />
      ),
    },
    {
      name: "Personnel De l'institut",
      path: "/admin/personel",
      paths: [
        "/admin/personel/ficheEmploye",
        "/admin/personel/dossierDuPersonnel",
        "/admin/personel/cotisationCNPS",
        "/admin/personel/critereDeNotationDuPersonnel",
        "/admin/personel/impots",
        "/admin/personel/rapports",
        "/admin/personel/avancements",
      ],
      icon: (
        <CalendarDaysIcon
          className={`w-5 h-5 mr-2 ${
            location.pathname === "/admin/personel"
              ? "text-rajapiBlue"
              : "text-rajapiGray"
          }`}
        />
      ),
    },
    {
      name: "Enseignants",
      path: "/admin/enseignants",
      icon: (
        <UserGroupIcon
          className={`w-5 h-5 mr-2 ${
            location.pathname === "/admin/enseignants"
              ? "text-rajapiBlue"
              : "text-rajapiGray"
          }`}
        />
      ),
    },
    {
      name: "ETUDIANTS + LAUREATS",
      path: "/admin/etudiantsLaureats",
      paths: [
        "/admin/etudiantsLaureats/etudiants",
        "/admin/etudiantsLaureats/laureats",
      ],
      icon: (
        <CalendarDaysIcon
          className={`w-5 h-5 mr-2 ${
            location.pathname === "/admin/etudiantsLaureats"
              ? "text-rajapiBlue"
              : "text-rajapiGray"
          }`}
        />
      ),
    },
    {
      name: "Filiers",
      path: "/admin/filiers",
      paths: ["/admin/minsante", "/admin/minesup"],
      icon: (
        <CalendarDaysIcon
          className={`w-5 h-5 mr-2 ${
            location.pathname === "/admin/filiers"
              ? "text-rajapiBlue"
              : "text-rajapiGray"
          }`}
        />
      ),
    },
    {
      name: "PROGRAMMES DES COURS THEORIQUES PAR FILIERES ET PAR ANNEE ACADEMIQUE",
      path: "/admin/programmesDeCoursTheoriques",
      paths: [
        "/admin/programmesDeCoursTheoriques/ficheDeCours",
        "/admin/programmesDeCoursTheoriques/programmation",
      ],
      icon: (
        <FolderPlusIcon
          className={`w-5 h-5 mr-2 ${
            location.pathname === "/admin/programmesDeCoursTheoriques"
              ? "text-rajapiBlue"
              : "text-rajapiGray"
          }`}
        />
      ),
    },
    {
      name: "STAGES CLINIQUES PAR FILIERE ET PAR ANNEE ACADEMIQUE",
      path: "/admin/stageCliniques",
      paths: [
        "/admin/stageCliniques/programmation",
        "/admin/stageCliniques/suivi",
      ],
      icon: (
        <UserIcon
          className={`w-5 h-5 mr-2 ${
            location.pathname === "/admin/stageCliniques"
              ? "text-rajapiBlue"
              : "text-rajapiGray"
          }`}
        />
      ),
    },
    {
      name: "TRAVAUX DIRIGES PAR FILIERE ET PAR ANNEE ACADEMIQUE",
      path: "/admin/travauxDiriges",
      paths: [
        "/admin/travauxDiriges/programmation",
        "/admin/travauxDiriges/suivi",
      ],
      icon: (
        <UserIcon
          className={`w-5 h-5 mr-2 ${
            location.pathname === "/admin/travauxDiriges"
              ? "text-rajapiBlue"
              : "text-rajapiGray"
          }`}
        />
      ),
    },
    {
      name: "ESPACE COLLABORATIF ET FORMATION EN LIGNE",
      path: "/admin/espaceCollaboratif",
      icon: (
        <QuestionMarkCircleIcon
          className={`w-5 h-5 mr-2 ${
            location.pathname === "/admin/espaceCollaboratif"
              ? "text-rajapiBlue"
              : "text-rajapiGray"
          }`}
        />
      ),
    },
    {
      name: "GESTION DE LA COMPTABILITE MATIERES",
      path: "/admin/gestionComptabiliteMatieres",
      paths: [
        "/admin/gestionComptabiliteMatieres/inventaire",
        "/admin/gestionComptabiliteMatieres/etatDuStock",
      ],
      icon: (
        <UserIcon
          className={`w-5 h-5 mr-2 ${
            location.pathname === "/admin/gestionComptabiliteMatieres"
              ? "text-rajapiBlue"
              : "text-rajapiGray"
          }`}
        />
      ),
    },
    {
      name: "DOCUMENTATION",
      path: "/admin/documentation",
      paths: [
        "/admin/documentation/listeTheses",
        "/admin/documentation/listeMemoires",
        "/admin/documentation/listeRapportsAdministratifs",
      ],
      icon: (
        <UserIcon
          className={`w-5 h-5 mr-2 ${
            location.pathname === "/admin/documentation"
              ? "text-rajapiBlue"
              : "text-rajapiGray"
          }`}
        />
      ),
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Toggle button for mobile */}
      <button
        className="p-2 text-gray-500 lg:hidden"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`flex flex-col fixed inset-y-0 left-0 bg-white shadow-lg w-64 border-r transform h-full ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:static lg:inset-0 min-h-screen`}
      >
        <div className="flex p-5 text-center items-center">
          <img
            src="/images/RAJAPI_logo.png"
            alt="I3S"
            className="mx-0.5 size-16"
          />
          <span className="text-2xl font-serif text-rajapiBlue font-bold">
            I3S
          </span>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-4">
                <Link
                  to={item.paths ? item.paths[0] : item.path}
                  className={`flex py-2 px-4 rounded-lg items-center ${
                    (item.paths && item.paths.includes(location.pathname)) ||
                    location.pathname === item.path
                      ? "bg-gray-100 text-rajapiBlue border-2 border-gray-200 font-medium"
                      : "hover:bg-gray-100 text-gray-400"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={`${
                  user?.profilePictureUrl
                    ? user.profilePictureUrl
                    : "/images/user.png"
                }`}
                alt="Profile"
                className="h-10 w-10 rounded-full"
              />
              <span className="ml-2 text-gray-800">{user && user.name}</span>
            </div>
            <button className="text-gray-500 hover:text-gray-800">...</button>
          </div>
          <div className="mt-4 border-t">
            <label className="flex items-center space-x-2 p-5">
              <span className="text-sm text-gray-600">Dark Mode</span>
              <Switch />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
