import ActorsList from "../../../components/actorsList";
import predefinedEnseignants from "../../../dummyData/enseignants";
import { ActorsType } from "../../../types/enums/actors-types";

const EnseignantsContent: React.FC = ({}) => {
  return (
    <ActorsList type={ActorsType.ENSEIGNANT} actor={predefinedEnseignants} />
  );
};

export default EnseignantsContent;
