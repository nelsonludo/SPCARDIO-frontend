import { EtudiantsType } from "./entities/etudiants";

export type EtudiantsState = {
  etudiants: EtudiantsType[] | null;
  setEtudiants: (etudiants: EtudiantsType[] | null) => void;
  unsetEtudiants: () => void;
};
