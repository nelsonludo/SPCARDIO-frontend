import { useState } from "react";
import { ActorsType } from "../../types/enums/actors-types";
import { EnseignantsType } from "../../types/entities/enseignants";
import BasicModal from "../simpleModal";
import { useMediaQuery, Theme, Box, Typography } from "@mui/material";
import { EtudiantType } from "../../types/entities/etudiants";

type ActorsListPropsType = {
  type: ActorsType;
  actor: (EtudiantType | EnseignantsType)[] | null;
};

const ActorsList: React.FC<ActorsListPropsType> = ({ type, actor }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedActor, setSelectedActor] = useState<
    EtudiantType | EnseignantsType | null
  >(null);

  // Filter actors based on search query
  const filteredActors = Array.isArray(actor)
    ? actor.filter((actor) => {
        const query = searchQuery.toLowerCase();
        if (type === ActorsType.ENSEIGNANT) {
          return (actor as EnseignantsType).nom.toLowerCase().includes(query);
        } else if (type === ActorsType.ETUDIANT) {
          return (
            (actor as EtudiantType).nom.toLowerCase().includes(query) ||
            (actor as EtudiantType).email?.toLowerCase().includes(query)
          );
        }
        return false;
      })
    : [];

  // Detect small screens
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  if (actor?.length === 0) {
    return (
      <Box sx={{ p: { xs: 2, md: 6 }, textAlign: "center" }}>
        <Typography variant="h6">Aucune donnée disponible</Typography>
      </Box>
    );
  }

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
              ? "étudiant"
              : type === ActorsType.ENSEIGNANT
                ? "enseignant"
                : "lauréat"
          }`}
          className="w-full bg-white rounded-2xl px-4 py-2 shadow-sm focus:outline-none focus:ring-0"
        />
      </div>

      {/* List of actors */}
      <div className="shadow-md rounded-2xl p-2">
        {filteredActors.length > 0 ? (
          <div className={isSmallScreen ? "grid grid-cols-1 gap-4" : ""}>
            {filteredActors.map((actor) => (
              <div
                key={actor.id}
                className={
                  isSmallScreen
                    ? "bg-white shadow-lg rounded-2xl p-4"
                    : "flex items-center justify-between p-4 border-b border-gray-200 last:border-none hover:bg-gray-50"
                }
              >
                {isSmallScreen ? (
                  // Mobile card layout
                  <div>
                    <div className="flex items-center">
                      <img
                        src={
                          ("profilePhoto" in actor && actor.profilePhoto) ||
                          "/images/user.png"
                        }
                        alt={actor.nom}
                        className="h-16 w-16 rounded-full object-cover mr-4"
                      />
                      <div className="flex flex-col items-start">
                        <div className="text-lg font-semibold text-gray-700">
                          {actor.nom}
                        </div>
                        <div className="text-sm text-gray-500">
                          {"grade" in actor ? actor.grade : actor.email}
                        </div>
                        {"grade" in actor ? (
                          <div className="mt-2 text-sm text-gray-400">
                            <button
                              onClick={() => setSelectedActor(actor)}
                              className="text-blue-500 hover:text-blue-700"
                            >
                              Voir plus
                            </button>
                          </div>
                        ) : (
                          <div className="mt-2 text-sm text-gray-500">
                            {"numero" in actor && actor.numero}
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
                      src={
                        ("profilePhoto" in actor && actor.profilePhoto) ||
                        "/images/user.png"
                      }
                      alt={actor.nom}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    {/* Info */}
                    <div className="m-4">
                      <div className="text-sm font-semibold text-gray-600">
                        {actor.nom}
                      </div>
                    </div>
                    {/* Grade or Email */}
                    <div className="m-4 text-sm text-gray-500 font-medium">
                      {"grade" in actor ? actor.grade : actor.email}
                    </div>
                    {/* Grade specific button */}
                    {"grade" in actor ? (
                      <div className="m-4 text-sm text-gray-400 justify-self-end">
                        <BasicModal
                          info={"grade" in actor ? selectedActor : null}
                        />
                      </div>
                    ) : (
                      <div className="m-4 text-sm text-gray-500">
                        {"numero" in actor && actor.numero}
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
