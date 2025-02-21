import { LaureatsType } from "./entities/laureats";

export type LaureatsState = {
  laureats: LaureatsType[] | null;
  setLaureats: (laureats: LaureatsType[] | null) => void;
  unsetLaureats: () => void;
};
