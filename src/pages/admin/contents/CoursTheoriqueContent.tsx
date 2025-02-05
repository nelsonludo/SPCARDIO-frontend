// import ActorsList from "../../../components/actorsList";
// import { ActorsType, NiveauEtudiants } from "../../../types/enums/actors-types";
import { NiveauEtudiants } from "../../../types/enums/actors-types";
// import {
//   predefinedEtudiantsNiveau1,
//   predefinedEtudiantsNiveau4,
// } from "../../../dummyData/etudiants";

import React from "react";
// import CoursProgrammationTable from "../../../components/coursProgrammationTable";
// import {
//   Niveau2coursesData,
//   Niveau3coursesData,
// } from "../../../dummyData/courses";
import ProgrammesGrid from "../../../components/coursProgrammationTable/ProgrammesGrid";
import CoursProgrammationTable from "../../../components/coursProgrammationTable";
import { Niveau2coursesData, Niveau3coursesData } from "../../../dummyData/enseignements";

type CoursTheoriquesContentPropsType = {
  niveau: NiveauEtudiants;
};

const CoursTheoriquesContent: React.FC<CoursTheoriquesContentPropsType> = ({
  niveau,
}) => {
  if (niveau === NiveauEtudiants.NiVEAU1)
    return (
      // <ActorsList
      //   type={ActorsType.ETUDIANT}
      //   actor={predefinedEtudiantsNiveau1}
      // />
      <ProgrammesGrid images={[]} />
    );
  if (niveau === NiveauEtudiants.NiVEAU2)
    return (
      <CoursProgrammationTable
        coursesData={Niveau2coursesData}

      />
      // <ProgrammesGrid
      //   images={[
      //     "/images/programmationNiveau2Page1.png",
      //     "/images/programmationNiveau2Page2.png",
      //     "/images/programmationNiveau2Page3.png",
      //   ]}
      // />
    );
  if (niveau === NiveauEtudiants.NiVEAU3)
    return (
      <CoursProgrammationTable
        coursesData={Niveau3coursesData}

      />
      // <ProgrammesGrid
      //   images={[
      //     "/images/programmationNiveau3Page1.png",
      //     "/images/programmationNiveau3Page2.png",
      //     "/images/programmationNiveau3Page3.png",
      //   ]}
      // />
    );
  if (niveau === NiveauEtudiants.NiVEAU4)
    return (
      // <ActorsList
      //   type={ActorsType.ETUDIANT}
      //   actor={predefinedEtudiantsNiveau4}
      // />
      <ProgrammesGrid images={[]} />
    );
};

export default CoursTheoriquesContent;
