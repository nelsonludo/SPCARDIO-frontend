import ActorsList from "../../../components/actorsList";
import { useEtudiantsStore } from "../../../stores/etudiantsStore";
import { ActorsType } from "../../../types/enums/actors-types";
import { EtudiantType } from "../../../types/entities/etudiants";

const LaureatsContent: React.FC = () => {
  const { etudiants } = useEtudiantsStore();

  const laureat: EtudiantType[] | null =
    etudiants?.filter((etudiant) => etudiant.anneeDeSortie) || null;

  return <ActorsList type={ActorsType.LAUREAT} actor={laureat} />;
};

export default LaureatsContent;
