// import { Creator } from "./creator";

import { UserRole } from "../auth";

export enum UserType {
  Admin = "Admin",
  Client = "Client",
  Editor = "Editor",
}

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  image?: string;
};
