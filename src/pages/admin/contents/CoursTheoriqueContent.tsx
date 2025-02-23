import React, { useEffect } from "react";
import { NiveauEtudiants } from "../../../types/enums/actors-types";
import ProgrammesGrid from "../../../components/coursProgrammationTable/ProgrammesGrid";
import CoursProgrammationTable from "../../../components/coursProgrammationTable";
import { useGetEnseignements } from "../../../api/EnseignementsApi";
import { useEnseignementsStore } from "../../../stores/enseignementsStore";

type CoursTheoriquesContentPropsType = {
  niveau: NiveauEtudiants;
};

const CoursTheoriquesContent: React.FC<CoursTheoriquesContentPropsType> = ({
  niveau,
}) => {
  const { getEnseignements } = useGetEnseignements();
  const { enseignements } = useEnseignementsStore();

  useEffect(() => {
    getEnseignements();
    console.log(enseignements);
  }, []);

  useEffect(() => {
    console.log(enseignements);
  }, [enseignements]);

  if (niveau === NiveauEtudiants.NiVEAU1) return <ProgrammesGrid images={[]} />;

  if (niveau === NiveauEtudiants.NiVEAU2 || niveau === NiveauEtudiants.NiVEAU3)
    return <CoursProgrammationTable coursesData={enseignements} />;

  if (niveau === NiveauEtudiants.NiVEAU4) return <ProgrammesGrid images={[]} />;

  return null;
};

export default CoursTheoriquesContent;
