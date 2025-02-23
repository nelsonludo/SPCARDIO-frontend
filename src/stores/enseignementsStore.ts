import { create } from "zustand";
import { EnseignementsState } from "../types/enseignements";

export const useEnseignementsStore = create<EnseignementsState>((set) => ({
  enseignements: null,
  setEnseignements: (enseignements) => set({ enseignements }),
  unsetEnseignements: () => set({ enseignements: null }),
}));
