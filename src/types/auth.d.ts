import { User } from "./entities/user";
import { UserRoles } from "./enums/actors-types";

export type UserRole =
  | UserRoles.ADMIN
  | UserRoles.ENSEIGNANT
  | UserRoles.ETUDIANT
  | UserRoles.LAUREAT;

export type AuthState = {
  user: User | null;
  loading: boolean | null;
  setLoading: (loading: boolean | null) => void;
  setUser: (user: User | null) => void;
  unsetUser: () => void;
};
