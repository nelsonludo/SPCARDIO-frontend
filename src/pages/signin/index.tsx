import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useGetProfile, useSignin } from "../../api/AuthApi";

// Zod schemas for form validation
const loginSchema = z.object({
  identifier: z.string().email("Email invalide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit comporter au moins 6 caractères"),
});

type LoginFormData = z.infer<typeof loginSchema>;
// type SignupFormData = z.infer<typeof signupSchema>;

const LoginSignupTab: React.FC = () => {
  // const [activeTab, setActiveTab] = useState(0);
  const { signIn } = useSignin();
  const { getProfile } = useGetProfile();
  const navigate = useNavigate();

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onLoginSubmit = async (data: LoginFormData) => {
    await signIn(data);
    await getProfile();

    navigate("/admin");
  };

  return (
    <div className="flex items-center justify-center h-screen p-6 bg-emerald-200">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg mt-8">
        {/* Logo and Company Nam e */}
        {/* <div className="flex justify-center mb-8">
          {/* <img
            src="/images/RAJAPI_logo.png"
            alt="RAJAPI Logo"
            className="h-12 w-12 mr-3"
          /> 
          <h1 className="text-2xl font-extrabold text-blue-500">I3S</h1>
        </div>*/}
        <div className="mt-5 pt-2 mb-16 text-2xl ml-3  font-bold">
          Bienvenue Sur SPCARDIO.
          <div className="text-sm font-light">
            Entrez une address email et un mot de passse de votre choix pour
            vous connecter
          </div>
        </div>
        {/* Tabs
        <div className="flex justify-center space-x-4 mb-20 -mt-14 ">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-lg ${
                activeTab === index
                  ? "bg-blue-500 text-white font-semibold"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div> */}

        {/* Form */}
        <div className="space-y-6 -mt-10">
          <span></span>
          {/* {activeTab === 0 && ( */}
          <form
            onSubmit={handleLoginSubmit(onLoginSubmit)}
            className="space-y-6 "
          >
            <div className="flex items-center">
              <FaEnvelope className="text-gray-500 mr-3" />
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Email"
                  {...loginRegister("identifier")}
                />
                {loginErrors.identifier && (
                  <p className="text-red-500 text-xs mt-1">
                    {loginErrors.identifier.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <FaLock className="text-gray-500 mr-3" />
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Mot de passe"
                  {...loginRegister("password")}
                />
                {loginErrors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {loginErrors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="my-2">
              <Link
                to="/login/resetPassword"
                className="text-blue-500 text-sm hover:text-blue-700 "
              >
                Mot de Passe Oublié ?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Se connecter
            </button>
          </form>
          {/* )} */}

          {/* {activeTab === 1 && (
            <form
              onSubmit={handleSignupSubmit(onSignupSubmit)}
              className="space-y-6 "
            >
              <div className="flex items-center">
                <FaUser className="text-gray-500 mr-3" />
                <div className="w-full">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom d'utilisateur
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Nom d'utilisateur"
                    {...signupRegister("username")}
                  />
                  {signupErrors.username && (
                    <p className="text-red-500 text-xs mt-1">
                      {signupErrors.username.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-gray-500 mr-3" />
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Email"
                    {...signupRegister("email")}
                  />
                  {signupErrors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {signupErrors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center">
                <FaLock className="text-gray-500 mr-3" />
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Mot de passe"
                    {...signupRegister("password")}
                  />
                  {signupErrors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {signupErrors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                S'inscrire
              </button>
            </form>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupTab;
