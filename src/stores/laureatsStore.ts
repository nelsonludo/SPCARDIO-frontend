import { create } from "zustand";
import { LaureatsState } from "../types/laureats";

export const useLaureatsStore = create<LaureatsState>((set) => ({
  laureats: null,
  setLaureats: (laureats) => set({ laureats }),
  unsetLaureats: () => set({ laureats: null }),
}));
