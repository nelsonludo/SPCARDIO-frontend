import { useEffect } from "react";
import { useGetEnseignants } from "../../../api/EnseignantsApi";
import ActorsList from "../../../components/actorsList";
import predefinedEnseignants from "../../../dummyData/enseignants";
import { ActorsType } from "../../../types/enums/actors-types";
import { useEnseignantsStore } from "../../../stores/enseignantsStore";

const EnseignantsContent: React.FC = ({}) => {
  const { getEnseignants } = useGetEnseignants();
  const { enseignants } = useEnseignantsStore();

  useEffect(() => {
    getEnseignants();
  }, []);

  useEffect(() => {
    if (enseignants) console.log(enseignants);
  }, [enseignants]);

  return (
    <ActorsList type={ActorsType.ENSEIGNANT} actor={predefinedEnseignants} />
  );
};

export default EnseignantsContent;
