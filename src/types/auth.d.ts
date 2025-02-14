export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profilePictureUrl?: string;
};

export type UserRole = "admin";

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User | null) => void;
  logout: () => void;
};
