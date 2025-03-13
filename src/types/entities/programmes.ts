import { Unite_d_enseignementsType } from "./uniteEnseignements";

export type ProgrammeType = {
  id: number;
  title: string;
  unite_d_enseignements?: Unite_d_enseignementsType[];
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
