import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-emerald-50 p-6 text-center">
      <h1 className="text-8xl font-extrabold text-blue-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-emerald-800">
        Page Non-Existante
      </h2>
      <p className="mt-2 text-gray-600">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg transition-all hover:bg-blue-600"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
