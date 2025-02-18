import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "../pages/signin";
import NotFound from "../pages/notFound";
import Home from "../pages/home";
// import PrivateRoute from "./privateRoute";
import TableauDeBord from "../pages/admin";
import { useAuthStore } from "../stores/authStore";
import { useRefreshToken } from "../api/AuthApi";
import { useEffect } from "react";
import PrivateRoute from "./privateRoute";
import { UserRoles } from "../types/enums/actors-types";

const AppRoutes: React.FC = () => {
  const { user } = useAuthStore();
  const { refreshToken } = useRefreshToken();

  useEffect(() => {
    console.log("user changed");
    if (!user) {
      refreshToken(); // Try to refresh token on reload
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES  */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />

        {/* PROTECTED ROUTES  */}
        <Route
          element={
            <PrivateRoute
              requiredRoles={[
                UserRoles.ADMIN,
                UserRoles.ENSEIGNANT,
                UserRoles.ETUDIANT,
                UserRoles.LAUREAT,
              ]}
            />
          }
        >
          <Route path="/admin" element={<TableauDeBord />} />
        </Route>

        {/* SUPER USER ROUTES */}

        {/* ADMIN ROUTES */}

        {/* FALL BACK  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
