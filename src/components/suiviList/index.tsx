import React, { useEffect } from "react";
import { useEnseignementsStore } from "../../stores/enseignementsStore";
import { useGetEnseignements } from "../../api/EnseignementsApi";

const SuiviContent: React.FC = () => {
  const { enseignements, APTypes } = useEnseignementsStore(); // Access enseignements and APTypes from the store
  const { getEnseignements } = useGetEnseignements();

  useEffect(() => {
    if (!enseignements) getEnseignements();
  }, []);

  return (
    <div>
      <h1>Suivi des Enseignements</h1>
      {APTypes?.map((APType) => (
        <div key={APType.id}>
          <h2>{APType.titre}</h2>
          <ul>
            {enseignements?.enseignemt.map((enseignement) => (
              <li key={enseignement.id}>{enseignement.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SuiviContent;
