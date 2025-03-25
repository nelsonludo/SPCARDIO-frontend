import { create } from "zustand";
import { EnseignementsState } from "../types/enseignements";

export const useEnseignementsStore = create<EnseignementsState>((set) => ({
  enseignements: null,
  programmes: null,
  APTypes: null,
  activitesPedagogiques: null,
  unite_d_enseignements: null,
  setUniteEnseignements: (unite_d_enseignements) =>
    set({ unite_d_enseignements }),
  setActivitesPedagogiques: (activitesPedagogiques) =>
    set({ activitesPedagogiques }),
  setProgrammes: (programmes) => set({ programmes }),
  setAPTypes: (APTypes) => set({ APTypes }),
  setEnseignements: (enseignements) => set({ enseignements }),
  unsetEnseignements: () => set({ enseignements: null }),
}));
