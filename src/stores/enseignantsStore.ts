import { create } from "zustand";
import { EnseignantsState } from "../types/enseignants";

export const useEnseignantsStore = create<EnseignantsState>((set) => ({
  enseignants: null,
  setEnseignants: (enseignants) => set({ enseignants }),
  unsetEnseignants: () => set({ enseignants: null }),
}));
