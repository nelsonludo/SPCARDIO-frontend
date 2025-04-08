import { create } from "zustand";
import { AuthState } from "../types/auth";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setLoading: (loading) => set({ loading: loading }),
  setUser: (user) => set({ user }),
  unsetUser: () => set({ user: null }),
}));
