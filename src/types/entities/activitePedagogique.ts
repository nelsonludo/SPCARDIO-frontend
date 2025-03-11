import { Unite_d_enseignementsType } from "./uniteEnseignements";

export interface ActivitePedagogique {
  unite_d_enseignement: Unite_d_enseignementsType;
  intitule: string;
  date: string;
  horaires: string;
  residents: string[];
  enseignants: string[];
  observation: string;
  type_d_activite_pedagogique: string;
}
