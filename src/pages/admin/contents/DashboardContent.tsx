import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEnseignementsStore } from "../../../stores/enseignementsStore";
import { useEnseignantsStore } from "../../../stores/enseignantsStore";
import { useEtudiantsStore } from "../../../stores/etudiantsStore";
import { useGetEnseignants } from "../../../api/EnseignantsApi";
import { useGetEtudiants } from "../../../api/EtudiantsApi";
import {
  useGetAPTypes,
  useGetEnseignements,
} from "../../../api/EnseignementsApi";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashBoardContent: React.FC = () => {
  const { APTypes, activitesPedagogiques } = useEnseignementsStore();
  const { enseignants } = useEnseignantsStore();
  const { etudiants } = useEtudiantsStore();
  const { getEnseignants } = useGetEnseignants();
  const { getEnseignements } = useGetEnseignements();
  const { getEtudiants } = useGetEtudiants();
  const { getAPTypes } = useGetAPTypes();

  useEffect(() => {
    if (!APTypes) getAPTypes();
    if (!enseignants) getEnseignants();
    if (!etudiants) getEtudiants();
    if (!activitesPedagogiques) getEnseignements();
  }, []);

  // Data for progress bars
  const progressDataPerAPType = APTypes?.map((APType) => {
    const totalActivities = (activitesPedagogiques ?? []).filter(
      (AP) => AP.type_d_activite_pedagogique?.code === APType.code
    ).length;

    const completedActivities = (activitesPedagogiques ?? []).filter(
      (AP) => AP.type_d_activite_pedagogique?.code === APType.code && AP.fini
    ).length;

    const progress =
      totalActivities === 0
        ? 0
        : Math.floor((completedActivities / totalActivities) * 100);

    return { label: APType.titre, value: progress };
  });

  const tauxComplete = Math.floor(
    ((activitesPedagogiques ?? []).filter((AP) => AP.fini).length /
      Math.max(1, (activitesPedagogiques ?? []).length)) *
      100 // Ensure denominator ≥ 1
  );

  // Data for the line chart
  const chartData = {
    labels: APTypes?.map((APType) => APType.titre) || [],
    datasets: [
      {
        label: "pourcentage de progression",
        data: progressDataPerAPType?.map((progress) => progress.value) || [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
      },
    ],
  };
  // Detect small screens
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-8 bg-white rounded-2xl">
        <div
          className={`grid ${isSmallScreen ? "grid-col" : "grid-cols-3"} gap-6 mb-6`}
        >
          {/* Card 1 */}
          <Card className="bg-white shadow-lg">
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Nombre D'etudiants
              </Typography>
              <Typography variant="h4" className="font-semibold">
                {etudiants?.length}
              </Typography>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-white shadow-lg">
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Nombre d'enseignants
              </Typography>
              <Typography variant="h4" className="font-semibold">
                {enseignants?.length}
              </Typography>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-white shadow-lg">
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Taux completé
              </Typography>
              <Typography variant="h4" className="font-semibold">
                {tauxComplete}%
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Line Chart */}
        <div className="bg-white shadow-lg p-6 mb-6">
          <Typography variant="h6" className="mb-4">
            Represantation graphique de la progression
          </Typography>
          <Line data={chartData} />
        </div>

        {/* Progress Bars */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {progressDataPerAPType?.map((progress, index) => (
            <div key={index} className="bg-white shadow-lg p-6">
              <Typography variant="h6" className="mb-2">
                {progress.label}
              </Typography>
              <LinearProgress variant="determinate" value={progress.value} />
              <Typography variant="body2" className="mt-2 text-right">
                {progress.value}%
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoardContent;
