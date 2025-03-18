import React, { useEffect, useState } from "react";
import { useEnseignementsStore } from "../../../stores/enseignementsStore";
import { useGetEnseignements } from "../../../api/EnseignementsApi";
import { FaCheck } from "react-icons/fa";

interface SuiviContentPropsType {
  niveau: string;
}

const SuiviContent: React.FC<SuiviContentPropsType> = ({ niveau }) => {
  const { activitesPedagogiques, APTypes } = useEnseignementsStore();
  const { getEnseignements } = useGetEnseignements();

  const [selectedAPType, setSelectedAPType] = useState<string | null>(null);

  useEffect(() => {
    if (!activitesPedagogiques) getEnseignements();
    console.log(activitesPedagogiques);
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAPType(event.target.value);
  };

  const filteredAPs = selectedAPType
    ? activitesPedagogiques?.filter(
        (AP) =>
          AP.type_d_activite_pedagogique?.code === selectedAPType &&
          AP.unite_d_enseignement?.programme?.title.toUpperCase() === niveau
      )
    : activitesPedagogiques?.filter(
        (AP) =>
          AP.unite_d_enseignement?.programme?.title.toUpperCase() === niveau
      );

  return (
    <div className="flex justify-start w-full flex-col p-5">
      {/* Dropdown to select APType */}
      <div className="mb-4">
        <label htmlFor="APTypeSelect" className="font-semibold text-lg">
          Selectionez un type d'activité:
        </label>
        <select
          id="APTypeSelect"
          onChange={handleSelectChange}
          className="mt-2 p-2 border border-gray-300 rounded-md w-full md:w-1/2"
        >
          <option value="">Type </option>
          {APTypes?.map((APType) => (
            <option key={APType.id} value={APType.code}>
              {APType.titre}
            </option>
          ))}
        </select>
      </div>

      {/* Display filtered activities */}
      <div>
        {filteredAPs?.length === 0 ? (
          <p className="text-gray-500">
            aucun activité trouvé pour le type selectionné
          </p>
        ) : (
          filteredAPs?.map((AP) => (
            <div
              key={AP.id}
              className="m-5 p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-start"
            >
              <span className="my-3 flex items-center justify-center">
                <h2 className="text-xl font-semibold">{AP.intitule}</h2>
                {AP.fini && <FaCheck className="text-green-500 mx-3" />}
              </span>
              <span>{AP.type_d_activite_pedagogique?.titre}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SuiviContent;
