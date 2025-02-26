import { EnseignementsType } from "./entities/enseignements";

export type EnseignementWeeklyType = {
  [week: string]: { niveau: string; enseignements: Enseignement[] };
};

export type EnseignementsState = {
  enseignements: EnseignementWeeklyType | null;
  setEnseignements: (enseignements) => void;
  unsetEnseignements: () => void;
};
