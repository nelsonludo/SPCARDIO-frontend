import {
  ActivitePedagogique,
  EnseignementsType,
  Type_d_activite_pedagogiqueType,
} from "./entities/activitePedagogique";
import { ProgrammeType } from "./entities/programmes";

export type EnseignementWeeklyType = {
  [week: string]: { niveau: string; enseignements: ActivitePedagogique[] };
};

export type EnseignementsState = {
  enseignements: EnseignementWeeklyType | null;
  programmes: ProgrammeType[] | null;
  APTypes: Type_d_activite_pedagogiqueType[] | null;
  activitesPedagogiques: ActivitePedagogique[] | null;
  setActivitesPedagogiques: (activitesPedagogiques) => void;
  setProgrammes: (programmes) => void;
  setAPTypes: (APTypes) => void;
  setEnseignements: (enseignements) => void;
  unsetEnseignements: () => void;
};
