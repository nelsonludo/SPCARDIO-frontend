import { Box } from "@mui/material";
import { NiveauEtudiants } from "../../../types/enums/actors-types";
// import CoursTheoriquesContent from "./CoursTheoriqueContent";
import DashboardContent from "./DashboardContent";
import EnseignantsContent from "./EnseignantsContent";
import EtudiantsContent from "./EtudiantsContent";
import LaureatsContent from "./LaureatsContent";

function PageContent({ pathname }: { pathname: string }) {
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
      // content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU2} />;
      title = "Programme de cours niveau 2";
      break;
    case "/programmesDeCoursTheoriques/coursTheoriques/niveau3":
      // content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU3} />;
      title = "Programme de cours niveau 3";
      break;
    case "/programmesDeCoursTheoriques/coursTheoriques/niveau1":
      // content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU1} />;
      title = "Programme de cours niveau 1";
      break;
    case "/programmesDeCoursTheoriques/coursTheoriques/niveau4":
      // content = <CoursTheoriquesContent niveau={NiveauEtudiants.NiVEAU4} />;
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

export default PageContent;
