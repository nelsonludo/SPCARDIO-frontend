import { ActivitePedagogique } from "./activitePedagogique";
import { ProgrammeType } from "./programmes";

export type Unite_d_enseignementsType = {
  id: string;
  code: string;
  titre: string;
  programme?: ProgrammeType;
  activite_pedagogiques?: ActivitePedagogique[];
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
