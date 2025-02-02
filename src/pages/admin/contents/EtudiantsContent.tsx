import ActorsList from "../../../components/actorsList";
import { ActorsType, NiveauEtudiants } from "../../../types/enums/actors-types";
import {
  predefinedEtudiantsNiveau1,
  predefinedEtudiantsNiveau2,
  predefinedEtudiantsNiveau3,
  predefinedEtudiantsNiveau4,
} from "../../../dummyData/etudiants";

type EtudiantsContentPropsType = {
  niveau: NiveauEtudiants;
};

const EtudiantsContent: React.FC<EtudiantsContentPropsType> = ({ niveau }) => {
  if (niveau === NiveauEtudiants.NiVEAU1)
    return (
      <ActorsList
        type={ActorsType.ETUDIANT}
        actor={predefinedEtudiantsNiveau1}
      />
    );
  if (niveau === NiveauEtudiants.NiVEAU2)
    return (
      <ActorsList
        type={ActorsType.ETUDIANT}
        actor={predefinedEtudiantsNiveau2}
      />
    );
  if (niveau === NiveauEtudiants.NiVEAU3)
    return (
      <ActorsList
        type={ActorsType.ETUDIANT}
        actor={predefinedEtudiantsNiveau3}
      />
    );
  if (niveau === NiveauEtudiants.NiVEAU4)
    return (
      <ActorsList
        type={ActorsType.ETUDIANT}
        actor={predefinedEtudiantsNiveau4}
      />
    );
};

export default EtudiantsContent;
