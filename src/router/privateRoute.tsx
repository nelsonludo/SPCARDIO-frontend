import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { UserRole } from "../types/auth";
// import AdminLayout from "../pages/admin";

type PrivateRouteProps = {
  requiredRoles: UserRole[];
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ requiredRoles }) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  if (!requiredRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
