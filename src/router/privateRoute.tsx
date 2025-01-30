import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { UserRole } from "../types/auth";
import AdminLayout from "../pages/admin";

type PrivateRouteProps = {
  requiredRole: UserRole;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ requiredRole }) => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  if (user.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  // Choose layout based on role
  let Layout;
  switch (user.role) {
    case "admin":
      Layout = AdminLayout;
      break;
    default:
      return <Navigate to="/" />;
  }

  return (
    <Outlet />
    // <Layout>
    // </Layout>
  );
};

export default PrivateRoute;
