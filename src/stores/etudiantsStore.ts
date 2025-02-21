import { create } from "zustand";
import { EtudiantsState } from "../types/etudiants";

export const useEtudiantsStore = create<EtudiantsState>((set) => ({
  etudiants: null,
  setEtudiants: (etudiants) => set({ etudiants }),
  unsetEtudiants: () => set({ etudiants: null }),
}));
