// import { useProjectStore } from '../../stores/projectStore';

import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import DashboardContent from "./contents/DashboardContent";
import EnseignantsContent from "./contents/EnseignantsContent";
import LaureatsContent from "./contents/LaureatsContent";
import EtudiantsContent from "./contents/EtudiantsContent";

import { FaSchool, FaUserGraduate, FaUserNurse } from "react-icons/fa";
import { NiveauEtudiants } from "../../types/enums/actors-types";
import CoursTheoriquesContent from "./contents/CoursTheoriqueContent";

const NAVIGATION: Navigation = [
  {
    segment: "dashboard",
    title: "Tableau de bord",
    icon: <DashboardIcon />,
    // content: <DashboardContent />,
  },

  // {
  //   segment: "organisation",
  //   title: "Organisation",
  //   icon: <FaUserGraduate />,
  //   children: [
  //     {
  //       segment: "historique",
  //       title: "Historique du cycle de formation",
  //       icon: <FaUserGraduate />,

  //       // content: <EnseignantsContent />,
  //     },
  //     {
  //       segment: "responsables",
  //       title: "responsables",
  //       icon: <FaUserGraduate />,

  //       // content: <EnseignantsContent />,
  //     },
  //     {
  //       segment: "conditionDentree",
  //       title: "Conditions d’entrée",
  //       icon: <FaUserGraduate />,

  //       // content: <EnseignantsContent />,
  //     },
  //     {
  //       segment: "contacts",
  //       title: "Contacts",
  //       icon: <FaUserGraduate />,

  //       // content: <EnseignantsContent />,
  //     },
  //   ]

  //   // content: <EnseignantsContent />,
  // },
  {
    segment: "enseignants",
    title: "Enseignants",
    icon: <FaUserGraduate />,

    // content: <EnseignantsContent />,
  },
  {
    segment: "etudiants",
    title: "Etudiants",
    icon: <FaUserNurse />,
    children: [
      {
        segment: "niveau1",
        title: "Niveau 1",
        icon: <FaSchool />,
      },
      {
        segment: "niveau2",
        title: "Niveau 2",
        icon: <FaSchool />,
      },
      {
        segment: "niveau3",
        title: "Niveau 3",
        icon: <FaSchool />,
      },
      {
        segment: "niveau4",
        title: "Niveau 4",
        icon: <FaSchool />,
      },
    ],
  },
  {
    segment: "laureats",
    title: "Laureats",
    icon: <FaUserGraduate />,
    // content: <LaureatsContent />,
  },
  {
    segment: "programmesDeCoursTheoriques",
    title: "Programmes De Cours",
    icon: <DashboardIcon />,
    children: [
      {
        segment: "coursTheoriques",
        title: "Cours Theoriques",
        icon: <DashboardIcon />,
        children: [
          {
            segment: "niveau1",
            title: "Niveau 1",
            icon: <FaSchool />,
          },
          {
            segment: "niveau2",
            title: "Niveau 2",
            icon: <FaSchool />,
          },
          {
            segment: "niveau3",
            title: "Niveau 3",
            icon: <FaSchool />,
          },
          {
            segment: "niveau4",
            title: "Niveau 4",
            icon: <FaSchool />,
          },
        ],
      },
      {
        segment: "seminaire",
        title: "Seminaires",
        icon: <DashboardIcon />,
        children: [
          {
            segment: "niveau1",
            title: "Niveau 1",
            icon: <FaSchool />,
          },
          {
            segment: "niveau2",
            title: "Niveau 2",
            icon: <FaSchool />,
          },
          {
            segment: "niveau3",
            title: "Niveau 3",
            icon: <FaSchool />,
          },
          {
            segment: "niveau4",
            title: "Niveau 4",
            icon: <FaSchool />,
          },
        ],
        // content: <FicheDeCoursContent />,
      },
    ],
  },
  {
    segment: "travauxDiriges",
    title: "Travaux Dirigés",
    icon: <DashboardIcon />,
    children: [
      {
        segment: "travauxDirigesProgrammation",
        title: "Programmation",
        icon: <DashboardIcon />,
        // content: <TravauxDirigesProgrammationContent />,
      },
      {
        segment: "travauxDirigesSuivi",
        title: "Suivi",
        icon: <DashboardIcon />,
        // content: <TravauxDirigesSuiviContent />,
      },
    ],
  },
  {
    segment: "stageCliniques",
    title: "Stage Cliniques",
    icon: <DashboardIcon />,
    children: [
      {
        segment: "stageCliniquesProgrammation",
        title: "Programmation",
        icon: <DashboardIcon />,
        // content: <StageCliniquesProgrammationContent />,
      },
      {
        segment: "stageCliniquesSuivi",
        title: "Suivi",
        icon: <DashboardIcon />,
        // content: <StageCliniquesSuiviContent />,
      },
    ],
  },
  {
    segment: "espaceCollaboratif",
    title: "Espace Collaboratif",
    icon: <DashboardIcon />,
    // content: <EspaceCollaboratifContent />,
  },
  {
    segment: "documentation",
    title: "Documentation",
    icon: <DashboardIcon />,
    children: [
      {
        segment: "listeDeTheses",
        title: "Liste De Thèses",
        icon: <DashboardIcon />,
        // content: <ListeDeThesesContent />,
      },
      {
        segment: "listeDeMemoires",
        title: "Liste De Mémoires",
        icon: <DashboardIcon />,
        // content: <ListeDeMemoiresContent />,
      },
      {
        segment: "rapportsAdministratifsFinancier",
        title: "Rapports Administratifs et Financier",
        icon: <DashboardIcon />,
        // content: <rapportsAdministratifsFinancierThesesContent />,
      },
    ],
  },
];

type I3SBrandType = {
  title?: string;
  logo?: React.ReactNode;
  homeUrl?: string;
};
const I3SBrand: I3SBrandType = {
  title: "SPCARDIO.",
  homeUrl: "/home",
  logo: (
    <img src="/images/uniYaounde1Logo.png" alt={""} className="rounded-full " />
  ),
};

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#eefff4",
          paper: "#c7ebd3",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#2A4364",
          paper: "#112E4D",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  var content: React.ReactNode;
  var title: string;

  switch (pathname) {
    case "/enseignants":
      content = <EnseignantsContent />;

      title = "Liste des Enseignants";
      break;
    case "espaceCollaboratif":
      // content = <EspaceCollaboratifContent />;

      title = "Espace Collaboratif";

      break;
    case "stageCliniquesSuivi":
      // content = <StageCliniquesSuiviContent />;

      title = "Suive De Stage Cliniques";

      break;
    case "stageCliniquesProgrammation":
      // content = <StageCliniquesProgrammationContent />;

      title = "Programmation De Stage Cliniques";
      break;
    case "travauxDirigesSuivi":
      // content = <TravauxDirigesSuiviContent />;

      title = "Suivi De Travaux Dirigés";
      break;
    case "travauxDirigesProgrammation":
      // content = <TravauxDirigesProgrammationContent />;
      title = "Programmation De Travaux Dirigés";

      break;
    case "/programmesDeCoursTheoriques/coursTheoriques/niveau2":
      content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU2} />;
      title = "Programme de cours niveau 2";
      break;
    case "/programmesDeCoursTheoriques/coursTheoriques/niveau3":
      content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU3} />;
      title = "Programme de cours niveau 3";
      break;
    case "/programmesDeCoursTheoriques/coursTheoriques/niveau1":
      content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU1} />;
      title = "Programme de cours niveau 1";
      break;
    case "/programmesDeCoursTheoriques/coursTheoriques/niveau4":
      content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU4} />;
      title = "Programme de cours niveau 4";
      break;
    case "/laureats":
      content = <LaureatsContent />;
      title = "Liste des Laureats";
      break;
    case "/etudiants/niveau1":
      content = <EtudiantsContent niveau={NiveauEtudiants.NiVEAU1} />;
      title = "Liste des etudiants du Niveau 1";
      break;
    case "/etudiants/niveau2":
      content = <EtudiantsContent niveau={NiveauEtudiants.NiVEAU2} />;
      title = "Liste des etudiants du Niveau 2";
      break;
    case "/etudiants/niveau3":
      content = <EtudiantsContent niveau={NiveauEtudiants.NiVEAU3} />;
      title = "Liste des etudiants du Niveau 3";
      break;
    case "/etudiants/niveau4":
      content = <EtudiantsContent niveau={NiveauEtudiants.NiVEAU4} />;
      title = "Liste des etudiants du Niveau 4";
      break;

    case "listeDeMemoires":
      // content = <ListeDeMemoiresContent />;

      title = "Liste De Mémoires";
      break;
    case "listeDeTheses":
      // content = <ListeDeThesesContent />;

      title = "Liste De Thèses";
      break;

    default:
      content = <DashboardContent />;
      title = "Tableau de bord";
  }

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <span className="text-2xl text-blue-700 font-bold">
        {title.toUpperCase()}
      </span>
      {content}
    </Box>
  );
}

export default function TableauDeBord() {
  const router = useDemoRouter("/dashboard");

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={I3SBrand}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
