import ActorsList from "../../../components/actorsList";
import { ActorsType, NiveauEtudiants } from "../../../types/enums/actors-types";
import {
  predefinedEtudiantsNiveau1,
  predefinedEtudiantsNiveau4,
} from "../../../dummyData/etudiants";

import React from "react";
import CoursProgrammationTable from "../../../components/coursProgrammationTable";
import {
  Niveau2coursesData,
  Niveau3coursesData,
} from "../../../dummyData/courses";

type CoursTheoriquesContentPropsType = {
  niveau: NiveauEtudiants;
};

const CoursTheoriquesContent: React.FC<CoursTheoriquesContentPropsType> = ({
  niveau,
}) => {
  if (niveau === NiveauEtudiants.NiVEAU1)
    return (
      <ActorsList
        type={ActorsType.ETUDIANT}
        actor={predefinedEtudiantsNiveau1}
      />
    );
  if (niveau === NiveauEtudiants.NiVEAU2)
    return (
      <CoursProgrammationTable
        coursesData={Niveau2coursesData}
        title="Programme des Enseignements - Niveau II"
      />
    );
  if (niveau === NiveauEtudiants.NiVEAU3)
    return (
      <CoursProgrammationTable
        coursesData={Niveau3coursesData}
        title="Programme des Enseignements - Niveau III"
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

export default CoursTheoriquesContent;
