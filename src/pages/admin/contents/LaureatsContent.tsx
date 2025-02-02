import ActorsList from "../../../components/actorsList";
import { ActorsType } from "../../../types/enums/actors-types";
import predefinedLaureat from "../../../dummyData/laureat";

const LaureatsContent: React.FC = () => {
  return <ActorsList type={ActorsType.LAUREAT} actor={predefinedLaureat} />;
};

export default LaureatsContent;
