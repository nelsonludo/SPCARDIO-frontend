import { UserRoles } from "./enums/actors-types";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profilePictureUrl?: string;
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
  login: (user: User | null) => void;
  logout: () => void;
};
