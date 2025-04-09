import ActorsList from "../../../components/actorsList";
import { ActorsType, NiveauEtudiants } from "../../../types/enums/actors-types";
import {
  predefinedEtudiantsNiveau1,
  predefinedEtudiantsNiveau2,
  predefinedEtudiantsNiveau3,
  predefinedEtudiantsNiveau4,
} from "../../../dummyData/etudiants";

import { useEtudiantsStore } from "../../../stores/etudiantsStore";

import { EtudiantType } from "../../../types/entities/etudiants";

type EtudiantsContentPropsType = {
  niveau: NiveauEtudiants;
};

const EtudiantsContent: React.FC<EtudiantsContentPropsType> = ({ niveau }) => {
  const { etudiants } = useEtudiantsStore();

  const niveau1: EtudiantType[] =
    etudiants?.filter((etudiant) => etudiant.niveau === "1") ||
    predefinedEtudiantsNiveau1;
  const niveau2: EtudiantType[] =
    etudiants?.filter((etudiant) => etudiant.niveau === "2") ||
    predefinedEtudiantsNiveau2;
  const niveau3: EtudiantType[] =
    etudiants?.filter((etudiant) => etudiant.niveau === "3") ||
    predefinedEtudiantsNiveau3;
  const niveau4: EtudiantType[] =
    etudiants?.filter((etudiant) => etudiant.niveau === "4") ||
    predefinedEtudiantsNiveau4;

  if (niveau === NiveauEtudiants.NiVEAU1)
    return <ActorsList type={ActorsType.ETUDIANT} actor={niveau1} />;
  if (niveau === NiveauEtudiants.NiVEAU2)
    return <ActorsList type={ActorsType.ETUDIANT} actor={niveau2} />;
  if (niveau === NiveauEtudiants.NiVEAU3)
    return <ActorsList type={ActorsType.ETUDIANT} actor={niveau3} />;
  if (niveau === NiveauEtudiants.NiVEAU4)
    return <ActorsList type={ActorsType.ETUDIANT} actor={niveau4} />;
};

export default EtudiantsContent;
