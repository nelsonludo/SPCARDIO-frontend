import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "../pages/signin";
import NotFound from "../pages/notFound";
import Home from "../pages/home";
import PrivateRoute from "./privateRoute";
import TableauDeBord from "../pages/admin";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES  */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<TableauDeBord />} />

        {/* PROTECTED ROUTES  */}

        {/* SUPER USER ROUTES */}

        {/* ADMIN ROUTES */}

        {/* FALL BACK  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
