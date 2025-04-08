import { useEffect } from "react";
import AppRoutes from "./router/routes";
import { useAuthStore } from "./stores/authStore";
import { TokenHelper } from "./utils/tokensHelper";
import GlobalLoading from "./pages/loading";
import { useGetProfile } from "./api/AuthApi";

function App() {
  const { user, loading, setLoading } = useAuthStore();
  const tokenHelper = new TokenHelper();
  const token = tokenHelper.getToken();
  const { getProfile } = useGetProfile();

  useEffect(() => {
    //keep the user loogged in as long as the token is still valid
    const sessionManager = async () => {
      if ((!token || token === "null.undefined") && !user) setLoading(false);
      if (token && token != "null.undefined" && user) setLoading(false);

      if (token && !user) {
        getProfile();
      }
    };
    sessionManager();
  }, [user, token]);

  return loading ? <GlobalLoading /> : <AppRoutes />;
}

export default App;
