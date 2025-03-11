import { Unite_d_enseignementsType } from "./uniteEnseignements";

export type ProgrammeType = {
  id: string;
  title: string;
  unite_d_enseignements?: Unite_d_enseignementsType[];
};
