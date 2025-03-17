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
import { Link } from "react-router-dom";
import DiscussionForum from "./contents/EspaceCollaboratifContent";
import ListesMemoiresContent from "./contents/ListesDeMemoiresContent";
import ListesThesesContent from "./contents/ListesDeThesesContent";
import RapportsAdministratifContent from "./contents/RapportAdministratifContent";
import { useEffect, useMemo } from "react";
import { useAuthStore } from "../../stores/authStore";
import { useLogout } from "../../api/AuthApi";

import { useEnseignementsStore } from "../../stores/enseignementsStore";
import { useGetAPTypes, useGetProgrammes } from "../../api/EnseignementsApi";
import SuiviContent from "./contents/suiviContent";

export default function TableauDeBord() {
  const { user } = useAuthStore();
  const { logOutUser } = useLogout();
  const { getAPTypes } = useGetAPTypes();
  const { getProgrammes } = useGetProgrammes();

  useEffect(() => {
    getAPTypes();
    getProgrammes();
  }, []);

  const { programmes, APTypes } = useEnseignementsStore();

  // const fetchedAPTypes = APTypes?.map((APType) => {
  //   const APTypeChild = {
  //     segment: APType?.code,
  //     title: APType?.titre,
  //     icon: <DashboardIcon />,
  //     children: programmes?.map((programme) => {
  //       const programmeChild = {
  //         segment: programme?.id,
  //         title: programme?.title,
  //         icon: <FaSchool />,
  //       };
  //       return programmeChild;
  //     }),
  //   };
  //   return APTypeChild;
  // })

  // const fetchedProgrammes = programmes?.map((programme) => {
  //   const programmeChild = {
  //     segment: programme?.id,
  //     title: programme?.title,
  //     icon: <FaSchool />,
  //   };
  //   return programmeChild;
  // })

  const NAVIGATION: Navigation = [
    {
      segment: "dashboard",
      title: "Tableau de bord",
      icon: <DashboardIcon />,
      // content: <DashboardContent />,
    },
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
      segment: "programmesActivitesPedagogiques",
      title: "Programmes",
      icon: <DashboardIcon />,
      children: APTypes?.map((APType) => {
        const APTypeChild = {
          segment: APType?.code,
          title: APType?.titre,
          icon: <DashboardIcon />,
          children: programmes?.map((programme) => {
            const programmeChild = {
              segment: programme?.title.split(" ").join("").toLowerCase(),
              title: programme?.title,
              icon: <FaSchool />,
            };
            return programmeChild;
          }),
        };
        return APTypeChild;
      }),
    },
    {
      segment: "suiviActivitesPedagogiques",
      title: "Suivi",
      icon: <DashboardIcon />,
      children: programmes?.map((programme) => {
        const programmeChild = {
          segment: programme?.title.split(" ").join("").toLowerCase(),
          title: programme?.title,
          icon: <FaSchool />,
        };
        return programmeChild;
      }),
      // content: <StageCliniquesSuiviContent />,
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
    logo: (
      <Link to={"/home"}>
        <img
          src="/images/uniYaounde1Logo.png"
          alt={""}
          className="rounded-full "
        />
      </Link>
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

  // function DemoPageContent({ pathname }: { pathname: string }) {
  //   var content: React.ReactNode;
  //   var title: string;

  //   switch (pathname) {
  //     case "/enseignants":
  //       content = <EnseignantsContent />;

  //       title = "Liste des Enseignants";
  //       break;
  //     case "/espaceCollaboratif":
  //       content = <DiscussionForum />;

  //       title = "Espace Collaboratif";

  //       break;
  //     case "stageCliniquesSuivi":
  //       // content = <StageCliniquesSuiviContent />;

  //       title = "Suive De Stage Cliniques";

  //       break;
  //     case "stageCliniquesProgrammation":
  //       // content = <StageCliniquesProgrammationContent />;

  //       title = "Programmation De Stage Cliniques";
  //       break;
  //     case "travauxDirigesSuivi":
  //       // content = <TravauxDirigesSuiviContent />;

  //       title = "Suivi De Travaux Dirigés";
  //       break;
  //     case "travauxDirigesProgrammation":
  //       // content = <TravauxDirigesProgrammationContent />;
  //       title = "Programmation De Travaux Dirigés";

  //       break;
  //     case "/programmesDeCoursTheoriques/coursTheoriques/niveau2":
  //       content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU2} />;
  //       title = "Programme de cours niveau 2";
  //       break;
  //     case "/programmesDeCoursTheoriques/coursTheoriques/niveau3":
  //       content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU3} />;
  //       title = "Programme de cours niveau 3";
  //       break;
  //     case "/programmesDeCoursTheoriques/coursTheoriques/niveau1":
  //       content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU1} />;
  //       title = "Programme de cours niveau 1";
  //       break;
  //     case "/programmesDeCoursTheoriques/coursTheoriques/niveau4":
  //       content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU4} />;
  //       title = "Programme de cours niveau 4";
  //       break;
  //     case "/laureats":
  //       content = <LaureatsContent />;
  //       title = "Liste des Laureats";
  //       break;
  //     case "/etudiants/niveau1":
  //       content = <EtudiantsContent niveau={NiveauEtudiants.NiVEAU1} />;
  //       title = "Liste des etudiants du Niveau 1";
  //       break;
  //     case "/etudiants/niveau2":
  //       content = <EtudiantsContent niveau={NiveauEtudiants.NiVEAU2} />;
  //       title = "Liste des etudiants du Niveau 2";
  //       break;
  //     case "/etudiants/niveau3":
  //       content = <EtudiantsContent niveau={NiveauEtudiants.NiVEAU3} />;
  //       title = "Liste des etudiants du Niveau 3";
  //       break;
  //     case "/etudiants/niveau4":
  //       content = <EtudiantsContent niveau={NiveauEtudiants.NiVEAU4} />;
  //       title = "Liste des etudiants du Niveau 4";
  //       break;

  //     case "/documentation/listeDeMemoires":
  //       content = <ListesMemoiresContent />;

  //       title = "Liste De Mémoires";
  //       break;
  //     case "/documentation/listeDeTheses":
  //       content = <ListesThesesContent />;

  //       title = "Liste De Thèses";
  //       break;
  //     case "/documentation/rapportsAdministratifsFinancier":
  //       content = <RapportsAdministratifContent />;
  //       title = "Rapports Administratif et Financiers";
  //       break;

  //     default:
  //       content = <DashboardContent />;
  //       title = "Tableau de bord";
  //   }

  //   return (
  //     <Box
  //       sx={{
  //         py: 4,
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         textAlign: "center",
  //       }}
  //     >
  //       <span className="text-2xl text-blue-700 font-bold">
  //         {title.toUpperCase()}
  //       </span>
  //       {content}
  //     </Box>
  //   );
  // }

  function DemoPageContent({ pathname }: { pathname: string }) {
    let content: React.ReactNode;
    let title: string;

    // Extract path segments dynamically
    const pathSegments = pathname.split("/").filter(Boolean); // Remove empty segments

    const apTypeSegment = pathSegments[1]; // Dynamic APType (e.g., "coursTheoriques")
    const niveauSegment =
      pathSegments[2]?.toLowerCase() || pathSegments[1]?.toLowerCase(); // Dynamic Niveau (e.g., "niveau1")

    // Static pages mapping
    const pageMap: Record<string, { content: React.ReactNode; title: string }> =
      {
        enseignants: {
          content: <EnseignantsContent />,
          title: "Liste des Enseignants",
        },
        espaceCollaboratif: {
          content: <DiscussionForum />,
          title: "Espace Collaboratif",
        },
        laureats: { content: <LaureatsContent />, title: "Liste des Laureats" },
        "documentation/listeDeMemoires": {
          content: <ListesMemoiresContent />,
          title: "Liste De Mémoires",
        },
        "documentation/listeDeTheses": {
          content: <ListesThesesContent />,
          title: "Liste De Thèses",
        },
        "documentation/rapportsAdministratifsFinancier": {
          content: <RapportsAdministratifContent />,
          title: "Rapports Administratif et Financiers",
        },
      };

    // Dynamic APType and Niveau mapping
    const niveauMap: Record<string, NiveauEtudiants> = {
      niveau1: NiveauEtudiants.NiVEAU1,
      niveau2: NiveauEtudiants.NiVEAU2,
      niveau3: NiveauEtudiants.NiVEAU3,
      niveau4: NiveauEtudiants.NiVEAU4,
    };

    // Check if the pathname follows the pattern "/suivi/:niveau"
    if (
      pathSegments[0] === "suiviActivitesPedagogiques" &&
      niveauSegment in niveauMap
    ) {
      content = <SuiviContent niveau={niveauMap[niveauSegment]} />;
      title = `Suivi de ${niveauSegment.replace("niveau", "Niveau ")}`;
    }

    // Check if the pathname follows the pattern "/programmesActivitesPedagogiques/:APType/:niveau"
    else if (
      pathSegments[0] === "programmesActivitesPedagogiques" &&
      apTypeSegment &&
      niveauSegment in niveauMap
    ) {
      content = (
        <CoursTheoriquesContent
          niveau={niveauMap[niveauSegment]}
          apType={apTypeSegment}
        />
      );
      title = `Programme de ${apTypeSegment.replace(/([A-Z])/g, " $1").trim()} ${niveauSegment.replace("niveau", "Niveau ")}`;
    }

    // Handle student levels dynamically
    else if (pathSegments[0] === "etudiants" && niveauSegment in niveauMap) {
      content = <EtudiantsContent niveau={niveauMap[niveauSegment]} />;
      title = `Liste des étudiants du ${niveauSegment.replace("niveau", "Niveau ")}`;
    }
    // Handle predefined static paths
    else if (pageMap[pathSegments[0]]) {
      content = pageMap[pathSegments[0]].content;
      title = pageMap[pathSegments[0]].title;
    }
    // Default case
    else {
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
        {pathname}
        {content}
      </Box>
    );
  }

  const authentication = useMemo(() => {
    return {
      signIn: () => {},
      signOut: () => {
        logOutUser();
      },
    };
  }, []);
  const router = useDemoRouter("/dashboard");

  return (
    // preview-start
    <AppProvider
      session={user ? { user } : null}
      authentication={authentication}
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
