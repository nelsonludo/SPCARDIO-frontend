export interface MenuItem {
  name: string;
  path: string;
  paths?: string[];
  icon?: JSX.Element; // Optional: Add icons for each menu item if needed
  notificationCount?: number;
}
