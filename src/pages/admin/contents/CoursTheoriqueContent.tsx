import React, { useEffect } from "react";
import { NiveauEtudiants } from "../../../types/enums/actors-types";
import CoursProgrammationTable from "../../../components/coursProgrammationTable";
import { useGetEnseignements } from "../../../api/EnseignementsApi";
import { useEnseignementsStore } from "../../../stores/enseignementsStore";
import { EnseignementWeeklyType } from "../../../types/enseignements";

type CoursTheoriquesContentPropsType = {
  niveau: NiveauEtudiants;
  apType: string;
};

const CoursTheoriquesContent: React.FC<CoursTheoriquesContentPropsType> = ({
  niveau,
  apType,
}) => {
  const { getEnseignements } = useGetEnseignements();
  const { enseignements, activitesPedagogiques } = useEnseignementsStore();

  useEffect(() => {
    if (!enseignements) getEnseignements();
    console.log(filteredEnseignements);
  }, []);

  const APOfCurrentAPType = activitesPedagogiques?.filter(
    (AP) => AP.type_d_activite_pedagogique?.code === apType
  );

  let filteredEnseignements: EnseignementWeeklyType | null = null;

  if (!APOfCurrentAPType || APOfCurrentAPType?.length > 0) {
    filteredEnseignements = Object.fromEntries(
      Object.entries(enseignements || {})?.map(
        //filter the array to only include the pairs where data.niveau === 2
        ([key, data]) => [
          key,
          {
            niveau: data?.niveau,
            enseignements: data?.enseignements?.filter(
              (enseignement) =>
                enseignement?.type_d_activite_pedagogique?.code === apType
            ),
          },
        ]
      )
    );
  }

  //converts the filtered array back into an object
  const enseignementsNiveau2 = Object.fromEntries(
    //convert the enseignements into an array if enseignements is defined
    Object.entries(filteredEnseignements || {}).filter(
      //filter the array to only include the pairs where data.niveau === 2
      ([, data]) => data?.niveau === NiveauEtudiants.NiVEAU2
    )
  );

  const enseignementsNiveau3 = Object.fromEntries(
    Object.entries(filteredEnseignements || {}).filter(
      ([, data]) => data?.niveau === NiveauEtudiants.NiVEAU3
    )
  );
  const enseignementsNiveau1 = Object.fromEntries(
    Object.entries(filteredEnseignements || {}).filter(
      ([, data]) => data?.niveau === NiveauEtudiants.NiVEAU1
    )
  );

  const enseignementsNiveau4 = Object.fromEntries(
    Object.entries(filteredEnseignements || {}).filter(
      ([, data]) => data?.niveau === NiveauEtudiants.NiVEAU4
    )
  );

  if (niveau === NiveauEtudiants.NiVEAU1) {
    return <CoursProgrammationTable coursesData={enseignementsNiveau1} />;
  }
  if (niveau === NiveauEtudiants.NiVEAU2)
    return <CoursProgrammationTable coursesData={enseignementsNiveau2} />;
  if (niveau === NiveauEtudiants.NiVEAU3)
    return <CoursProgrammationTable coursesData={enseignementsNiveau3} />;
  if (niveau === NiveauEtudiants.NiVEAU4)
    return <CoursProgrammationTable coursesData={enseignementsNiveau4} />;

  return null;
};

export default CoursTheoriquesContent;
