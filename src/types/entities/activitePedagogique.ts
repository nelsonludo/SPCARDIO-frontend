import { Unite_d_enseignementsType } from "./uniteEnseignements";

export type ActivitePedagogique = {
  id?: number;
  unite_d_enseignement?: Unite_d_enseignementsType;
  intitule: string;
  date: string;
  horaires: string;
  residents?: any[];
  enseignants?: any[];
  lieu: string;
  type_d_activite_pedagogique?: Type_d_activite_pedagogiqueType;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  fini?: string;
};

export type Type_d_activite_pedagogiqueType = {
  id?: number;
  code: string;
  titre: string;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};
