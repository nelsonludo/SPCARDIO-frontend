import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <>Page NON-Exitante</>
      <Link to={"/"}>retour à l'acceuil</Link>
    </div>
  );
};

export default NotFound;
