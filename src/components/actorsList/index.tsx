import { useState } from "react";
import { ActorsType } from "../../types/enums/actors-types";
import { EnseignantsType } from "../../types/entities/enseignants";
import BasicModal from "../simpleModal";
import { useMediaQuery, Theme } from "@mui/material";

type ActorsListPropsType = {
  type: ActorsType;
  actor: EnseignantsType[];
};

const ActorsList: React.FC<ActorsListPropsType> = ({ type, actor }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEnseignant, setSelectedEnseignant] = useState<any>(null);

  // Filtrer les acteurs selon la recherche
  const filteredEnseignants = actor.filter((enseignant) => {
    const query = searchQuery.toLowerCase();
    if (type === ActorsType.ENSEIGNANT)
      return enseignant.nom.toLowerCase().includes(query);

    if (type === ActorsType.ETUDIANT) {
      return (
        enseignant.nom.toLowerCase().includes(query) ||
        enseignant.email?.toLowerCase().includes(query)
      );
    }
  });

  // Detect small screens
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={`Rechercher un ${
            type === ActorsType.ETUDIANT
              ? "etudiant"
              : type === ActorsType.ENSEIGNANT
                ? "enseignant"
                : "laureat"
          }`}
          className="w-full bg-white rounded-2xl px-4 py-2 shadow-sm focus:outline-none focus:ring-0 "
        />
      </div>

      {/* List of actors */}
      <div className=" shadow-md rounded-2xl p-2">
        {filteredEnseignants.length > 0 ? (
          <div className={isSmallScreen ? "grid grid-cols-1 gap-4 " : ""}>
            {filteredEnseignants.map((enseignant: EnseignantsType) => (
              <div
                key={enseignant.id}
                className={`${
                  isSmallScreen
                    ? "bg-white shadow-lg rounded-2xl p-4 "
                    : "flex items-center justify-between p-4 border-b border-gray-200 last:border-none hover:bg-gray-50"
                }`}
              >
                {isSmallScreen ? (
                  // Mobile card layout
                  <div>
                    <div className="flex items-center ">
                      <img
                        src={enseignant.photo || "/images/user.png"}
                        alt={enseignant.nom}
                        className="h-16 w-16 rounded-full object-cover mr-4"
                      />
                      <div className="flex flex-col items-start">
                        <div className="text-lg font-semibold text-gray-700">
                          {enseignant.nom}
                        </div>
                        <div className="text-sm text-gray-500">
                          {enseignant.grade || enseignant.email}
                        </div>
                        {enseignant.grade ? (
                          <div className="mt-2 text-sm text-gray-400">
                            <button
                              onClick={() => setSelectedEnseignant(enseignant)}
                            >
                              <BasicModal info={selectedEnseignant} />
                            </button>
                          </div>
                        ) : (
                          <div className="mt-2 text-sm text-gray-500">
                            {enseignant.numero}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Desktop/large screen layout
                  <div className="grid grid-cols-[0.5fr_3fr_2fr_2fr] w-full justify-items-start">
                    {/* Photo */}
                    <img
                      src={enseignant.photo || "/images/user.png"}
                      alt={enseignant.nom}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    {/* Info */}
                    <div className="m-4">
                      <div className="text-sm font-semibold text-gray-600">
                        {enseignant.nom}
                      </div>
                    </div>
                    {/* Grade or Email */}
                    <div className="m-4 text-sm text-gray-500 font-medium">
                      {enseignant.grade || enseignant.email}
                    </div>
                    {/* Grade specific button */}
                    {enseignant.grade ? (
                      <div className="m-4 text-sm text-gray-400 justify-self-end">
                        <button
                          onClick={() => setSelectedEnseignant(enseignant)}
                        >
                          <BasicModal info={selectedEnseignant} />
                        </button>
                      </div>
                    ) : (
                      <div className="m-4 text-sm text-gray-500">
                        {enseignant.numero}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center text-gray-500">
            Aucun élément trouvé !
          </div>
        )}
      </div>
    </div>
  );
};

export default ActorsList;
