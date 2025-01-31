// import { useProjectStore } from '../../stores/projectStore';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { UserIcon } from "@heroicons/react/24/outline";
import DashboardContent from "./contents/DashboardContent";
import EnseignantsContent from "./contents/EnseignantsContent";
import FicheEmployeeContent from "./contents/FicheEmployeeContent";
import DossierDuPersonnelContent from "./contents/DossierDuPersonnelContent";
import CotisationCNPSContent from "./contents/CotisationCNPSContent";
import CritereDeNotationDuPersonnelContent from "./contents/CritereDeNotationDuPersonnelContent";
import ImpotsContent from "./contents/ImpotsContent";
import RapportsContent from "./contents/RapportsContent";
import AvancementsContent from "./contents/AvancementsContent";
import LaureatsContent from "./contents/LaureatsContent";
import EtudiantsContent from "./contents/etudiantsContent";

[
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

const NAVIGATION: Navigation = [
  {
    segment: "dashboard",
    title: "Tableau de bord",
    icon: <DashboardIcon />,
    // content: <DashboardContent />,
  },
  {
    segment: "personel",
    title: "Personnel De l'institut",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "ficheEmploye",
        title: "Fiche de l'employé",
        icon: <DashboardIcon />,
        // content: <FicheEmployeeContent />,
      },
      {
        segment: "dossierDuPersonnel",
        title: "Dossiers du personnel",
        icon: <DashboardIcon />,
        // content: <DossierDuPersonnelContent />,
      },
      {
        segment: "cotisationCNPS",
        title: "Cotisation CNPS",
        icon: <DashboardIcon />,
        // content: <CotisationCNPSContent />,
      },
      {
        segment: "critereDeNotationDuPersonnel",
        title: "Critère de notation du personnel",
        icon: <DashboardIcon />,
        // content: <CritereDeNotationDuPersonnelContent />,
      },
      {
        segment: "impots",
        title: "Impôts",
        icon: <DashboardIcon />,
        // content: <ImpotsContent />,
      },
      {
        segment: "rapports",
        title: "Rapports",
        icon: <DashboardIcon />,
        // content: <RapportsContent />,
      },
      {
        segment: "avancements",
        title: "Avancements",
        icon: <DashboardIcon />,
        // content: <AvancementsContent />,
      },
    ],
  },
  {
    segment: "enseignants",
    title: "Enseignants",
    icon: <ShoppingCartIcon />,
    // content: <EnseignantsContent />,
  },
  {
    segment: "etudiantsLaureats",
    title: "Etudiants & Laureats",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "etudiants",
        title: "Etudiants",
        icon: <DashboardIcon />,
        // content: <EtudiantsContent />,
      },
      {
        segment: "laureats",
        title: "Laureats",
        icon: <DashboardIcon />,
        // content: <LaureatsContent />,
      },
    ],
  },
  {
    segment: "filieres",
    title: "Tableau de bord",
    icon: <DashboardIcon />,
    children: [
      {
        segment: "minsante",
        title: "MINSANTE",
        icon: <DashboardIcon />,
        // content: <MinsanteContent />,
      },
      {
        segment: "minesup",
        title: "MINESUP",
        icon: <DashboardIcon />,
        // content: <MinesupContent />,
      },
    ],
  },
  {
    segment: "programmesDeCoursTheoriques",
    title: "Programmes De Cours Theoriques",
    icon: <DashboardIcon />,
    children: [
      {
        segment: "programmation",
        title: "Programmation",
        icon: <DashboardIcon />,
        // content: <ProgrammationContent />,
      },
      {
        segment: "ficheDeCours",
        title: "Fiche De Cours",
        icon: <DashboardIcon />,
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
    segment: "suiviGestionFinanciere",
    title: "Suivi De La Gestion Financière",
    icon: <DashboardIcon />,
    children: [
      {
        segment: "suiviExecutionBudgetPrevisionnel",
        title: "Suivi de l'Execution du Budget Prévisionnel",
        icon: <DashboardIcon />,
        // content: <SuiviExecutionBudgetPrevisionnelContent />,
      },
      {
        segment: "suiviEntreesDepenses",
        title: "Suivi Des Entrées et Des Dépenses",
        icon: <DashboardIcon />,
        // content: <SuiviEntreesDepensesContent />,
      },
    ],
  },
  {
    segment: "gestionComptabiliteMatieres",
    title: "Gestion De La Comptabilité Matières",
    icon: <DashboardIcon />,
    children: [
      {
        segment: "inventaire",
        title: "Inventaire",
        icon: <DashboardIcon />,
        // content: <InventaireContent />,
      },
      {
        segment: "etatDuStock",
        title: "Suivi De l'état Du Stock Des Accessoires",
        icon: <DashboardIcon />,
        // content: <etatDuStockContent />,
      },
    ],
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
  title: "I3S",
  homeUrl: "/home",
};

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
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
  switch (pathname) {
    case "/dashboard":
      content = <DashboardContent />;
      break;
    case "/enseignants":
      content = <EnseignantsContent />;
      break;
    case "/personel/avancements":
      content = <AvancementsContent />;
      break;
    case "/personel/rapports":
      content = <RapportsContent />;
      break;
    case "/personel/impots":
      content = <ImpotsContent />;
      break;
    case "/personel/critereDeNotationDuPersonnel":
      content = <CritereDeNotationDuPersonnelContent />;
      break;
    case "/personel/cotisationCNPS":
      content = <CotisationCNPSContent />;
      break;
    case "/personel/dossierDuPersonnel":
      content = <DossierDuPersonnelContent />;
      break;
    case "/personel/ficheEmploye":
      content = <FicheEmployeeContent />;
      break;
    case "espaceCollaboratif":
      content = <EspaceCollaboratifContent />;
      break;
    case "stageCliniquesSuivi":
      content = <StageCliniquesSuiviContent />;
      break;
    case "stageCliniquesProgrammation":
      content = <StageCliniquesProgrammationContent />;
      break;
    case "travauxDirigesSuivi":
      content = <TravauxDirigesSuiviContent />;
      break;
    case "travauxDirigesProgrammation":
      content = <TravauxDirigesProgrammationContent />;
      break;
    case "ficheDeCours":
      content = <FicheDeCoursContent />;
      break;
    case "programmation":
      content = <ProgrammationContent />;
      break;
    case "minesup":
      content = <MinesupContent />;
      break;
    case "minsante":
      content = <MinsanteContent />;
      break;
    case "/etudiantsLaureats/laureats":
      content = <LaureatsContent />;
      break;
    case "/etudiantsLaureats/etudiants":
      content = <EtudiantsContent />;
      break;
    case "rapportsAdministratifsFinancier":
      content = <rapportsAdministratifsFinancierThesesContent />;
      break;
    case "listeDeMemoires":
      content = <ListeDeMemoiresContent />;
      break;
    case "listeDeTheses":
      content = <ListeDeThesesContent />;
      break;
    case "etatDuStock":
      content = <etatDuStockContent />;
      break;
    case "inventaire":
      content = <InventaireContent />;
      break;
    case "suiviEntreesDepenses":
      content = <SuiviEntreesDepensesContent />;
      break;
    case "suiviExecutionBudgetPrevisionnel":
      content = <SuiviExecutionBudgetPrevisionnelContent />;
      break;

    default:
      content = <>What</>; // get DashboardContent component by default
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
      {pathname}
      {content}
    </Box>
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function TableauDeBord(props: DemoProps) {
  const { window } = props;

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
