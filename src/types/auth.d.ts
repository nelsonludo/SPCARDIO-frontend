import { UserRoles } from "./enums/actors-types";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  image?: string;
};

export type UserRole =
  | UserRoles.ADMIN
  | UserRoles.ENSEIGNANT
  | UserRoles.ETUDIANT
  | UserRoles.LAUREAT;

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  unsetUser: () => void;
};
