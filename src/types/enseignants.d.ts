import { EnseignantsType } from "./entities/enseignants";

export type EnseignantsState = {
  enseignants: EnseignantsType[] | null;
  setEnseignants: (enseignants: EnseignantsType[] | null) => void;
  unsetEnseignants: () => void;
};
