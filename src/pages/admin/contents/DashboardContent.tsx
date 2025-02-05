import React from "react";
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
  // Data for the line chart
  const chartData = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Repartition des etudiants",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Data for progress bars
  const progressData = [
    { label: "Cours Theorique", value: 70 },
    { label: "Seminaires", value: 85 },
    { label: "Stages", value: 50 },
  ];

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
                200
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
                1,250
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
                12.5%
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Line Chart */}
        <div className="bg-white shadow-lg p-6 mb-6">
          <Typography variant="h6" className="mb-4">
            Inscriptions par années
          </Typography>
          <Line data={chartData} />
        </div>

        {/* Progress Bars */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {progressData.map((progress, index) => (
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
