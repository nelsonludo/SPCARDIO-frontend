import ActorsList from "../../../components/actorsList";
import { ActorsType } from "../../../types/enums/actors-types";
import { useEnseignantsStore } from "../../../stores/enseignantsStore";

const EnseignantsContent: React.FC = ({}) => {
  const { enseignants } = useEnseignantsStore();

  return <ActorsList type={ActorsType.ENSEIGNANT} actor={enseignants || []} />;
};

export default EnseignantsContent;
