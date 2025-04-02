import {
  Box,
  Tab,
  Tabs,
  Theme,
  Typography,
  useMediaQuery,
  CircularProgress,
  Button,
  TableContainer,
  Paper,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import React, { useEffect, useState } from "react";
import { useEnseignementsStore } from "../../../stores/enseignementsStore";
import {
  useGetProgrammes,
  useGetUniteEnseignements,
} from "../../../api/EnseignementsApi";
import { APTYPECODES } from "../../../types/enums/APTypeCodes";

const ProgrammesContent: React.FC = () => {
  const { programmes, unite_d_enseignements } = useEnseignementsStore();

  const [programmesList, setProgrammesList] = useState<string[]>([]);
  const [selectedProgramme, setSelectedProgramme] = useState<string>("");

  const { loading: loadingUE, getUniteEnseignements } =
    useGetUniteEnseignements();
  const { loading: loadingProgrammes, getProgrammes } = useGetProgrammes();

  // Fetch programmes and enseignements on mount
  useEffect(() => {
    if (!programmes || programmes.length === 0) getProgrammes();
    if (
      !unite_d_enseignements ||
      Object.keys(unite_d_enseignements).length === 0
    )
      getUniteEnseignements();
  }, [programmes, unite_d_enseignements]);

  // Update programme list when data changes
  useEffect(() => {
    const newProgrammesList =
      programmes?.map((programme) => programme.title) ?? [];
    setProgrammesList(newProgrammesList);
    setSelectedProgramme((prev) =>
      newProgrammesList.includes(prev) ? prev : (newProgrammesList[0] ?? "")
    );
  }, [programmes]);

  // Detect small screens
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  // Handle case where there's no data
  if (
    !unite_d_enseignements ||
    Object.keys(unite_d_enseignements).length === 0
  ) {
    return (
      <Box sx={{ p: { xs: 2, md: 6 }, textAlign: "center" }}>
        <Typography variant="h6">Aucune donnée disponible</Typography>
        <Button
          variant="contained"
          startIcon={<RefreshIcon />}
          onClick={getUniteEnseignements}
          sx={{ mt: 2 }}
        >
          Recharger
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      {/* Programme selection tabs */}
      <span className="text-xl text-blue-700 font-bold">
        Unitées d'enseignements
      </span>
      {programmesList.length > 0 && (
        <Tabs
          value={selectedProgramme}
          onChange={(_event, newValue) => setSelectedProgramme(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: isSmallScreen ? "flex-start" : "center",
            },
          }}
        >
          {programmesList.map((programme) => (
            <Tab key={programme} label={programme} value={programme} />
          ))}
        </Tabs>
      )}

      {/* Refresh button */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<RefreshIcon />}
        onClick={getUniteEnseignements}
        sx={{ mt: 2, mb: 2 }}
      >
        Recharger
      </Button>

      {/* Loading state */}
      {loadingUE || loadingProgrammes ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <CircularProgress />
        </Box>
      ) : unite_d_enseignements.filter(
          (ue) => ue?.programme?.title === selectedProgramme
        ).length === 0 ? (
        <Box sx={{ p: { xs: 2, md: 6 }, textAlign: "center" }}>
          <Typography variant="h6">Aucune donnée disponible</Typography>
        </Box>
      ) : (
        <Box sx={{ mt: 4 }}>
          {isSmallScreen ? (
            // Mobile-friendly card layout
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {unite_d_enseignements
                .filter((ue) => ue?.programme?.title === selectedProgramme)
                .map((ue) => (
                  <Box
                    key={ue.titre}
                    sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2 }}
                  >
                    <Typography variant="h6">{ue.titre}</Typography>
                    {ue.activite_pedagogiques
                      ?.filter(
                        (ap) =>
                          ap.type_d_activite_pedagogique?.code ===
                            APTYPECODES.COURSE_MAGISTRAL ||
                          ap.type_d_activite_pedagogique?.code ===
                            APTYPECODES.SEMINAIRES
                      )
                      .map((ap) => (
                        <Typography
                          key={ap.intitule}
                          sx={{ mt: 1, fontSize: 14 }}
                        >
                          🔹 {ap.intitule}
                        </Typography>
                      ))}
                  </Box>
                ))}
            </Box>
          ) : (
            // Table layout for larger screens

            <TableContainer component={Paper}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#c7ebd3", color: "black" }}>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Unité d'Enseignement
                    </th>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Activités Pédagogiques
                    </th>
                  </tr>
                </thead>
                <tbody style={{ background: "white" }}>
                  {unite_d_enseignements
                    .filter((ue) => ue?.programme?.title === selectedProgramme)
                    .map((ue) => (
                      <tr
                        key={ue.titre}
                        style={{ borderBottom: "1px solid #ddd" }}
                      >
                        <td style={{ padding: "10px" }}>{ue.titre}</td>
                        <td style={{ padding: "10px" }}>
                          {ue.activite_pedagogiques
                            ?.filter(
                              (ap) =>
                                ap.type_d_activite_pedagogique?.code ===
                                  APTYPECODES.COURSE_MAGISTRAL ||
                                ap.type_d_activite_pedagogique?.code ===
                                  APTYPECODES.SEMINAIRES
                            )
                            .map((ap) => (
                              <div key={ap.intitule}>🔹 {ap.intitule}</div>
                            ))}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </TableContainer>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ProgrammesContent;
