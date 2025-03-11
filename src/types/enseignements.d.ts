import {
  ActivitePedagogique,
  EnseignementsType,
} from "./entities/activitePedagogique";

export type EnseignementWeeklyType = {
  [week: string]: { niveau: string; enseignements: ActivitePedagogique[] };
};

export type EnseignementsState = {
  enseignements: EnseignementWeeklyType | null;
  setEnseignements: (enseignements) => void;
  unsetEnseignements: () => void;
};
