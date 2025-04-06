import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  Theme,
  Button,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { EnseignementWeeklyType } from "../../types/enseignements";
import { ActivitePedagogique } from "../../types/entities/activitePedagogique";
import { useGetEnseignements } from "../../api/EnseignementsApi";

type CoursTheoriquesContentPropsType = {
  coursesData: EnseignementWeeklyType | null;
};

// Group courses by U.E and date
const groupCourses = (courses: ActivitePedagogique[]) => {
  const grouped: Record<string, Record<string, ActivitePedagogique[]>> = {};

  if (Array.isArray(courses)) {
    courses.forEach((course) => {
      if (!grouped[course.unite_d_enseignement?.titre || ""]) {
        grouped[course.unite_d_enseignement?.titre || ""] = {};
      }
      if (!grouped[course.unite_d_enseignement?.titre || ""][course.date]) {
        grouped[course.unite_d_enseignement?.titre || ""][course.date] = [];
      }
      grouped[course.unite_d_enseignement?.titre || ""][course.date].push(
        course
      );
    });
  }

  return grouped;
};

const CoursProgrammationTable: React.FC<CoursTheoriquesContentPropsType> = ({
  coursesData,
}) => {
  const { loading, getEnseignements } = useGetEnseignements();

  // Handle null case
  if (!coursesData || Object.keys(coursesData)?.length === 0) {
    return (
      <Box sx={{ p: { xs: 2, md: 6 }, textAlign: "center" }}>
        <Typography variant="h6">Aucune donnée disponible</Typography>
      </Box>
    );
  }

  const weeks = Object.keys(coursesData);
  const [selectedWeek, setSelectedWeek] = useState<string>(weeks[0] || "");

  useEffect(() => {
    if (weeks?.length > 0) {
      setSelectedWeek((prevWeek) =>
        weeks.includes(prevWeek) ? prevWeek : weeks[0]
      );
    }
  }, [coursesData]);

  const groupedCourses = groupCourses(
    coursesData[selectedWeek]?.enseignements || []
  );

  // Detect small screens
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      {/* Week selection tabs with scrollable behavior */}
      {weeks?.length > 0 && (
        <Tabs
          value={selectedWeek}
          onChange={(_event, newValue) => setSelectedWeek(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: isSmallScreen ? "flex-start" : "center",
            },
          }}
        >
          {weeks.map((week) => (
            <Tab key={week} label={week} value={week} />
          ))}
        </Tabs>
      )}

      <Button
        variant="contained"
        color="primary"
        startIcon={<RefreshIcon />}
        onClick={getEnseignements}
        sx={{ mt: 2, mb: 2 }}
      >
        Recharger
      </Button>

      {/* Render courses as cards on small screens and table on large screens */}
      {loading ? (
        <div>Loading</div>
      ) : (
        <Box sx={{ mt: 4 }}>
          {isSmallScreen ? (
            // Card view for mobile
            <Box>
              {Object.entries(groupedCourses).map(([ue, dates]) => (
                <Box key={ue} sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    <strong>{ue}</strong>
                  </Typography>

                  {Object.entries(dates).map(([date, courses]) => (
                    <Box key={date} sx={{ mb: 2 }}>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        <strong>{date}</strong>
                      </Typography>

                      {courses.map((course, index) => (
                        <Card key={`${ue}-${date}-${index}`} sx={{ mb: 2 }}>
                          <CardContent>
                            <Typography>
                              <strong>Intitulé:</strong> {course.intitule}
                            </Typography>
                            <Typography>
                              <strong>Horaires:</strong> {course.horaires}
                            </Typography>
                            <Typography>
                              <strong>Résidents:</strong>{" "}
                              {course?.residents?.length &&
                              course?.residents?.length > 0
                                ? course.residents?.join(", ")
                                : "—"}
                            </Typography>
                            <Typography>
                              <strong>Enseignants:</strong>{" "}
                              {course.enseignants?.join(", ")}
                            </Typography>
                            <Typography>
                              <strong>Lieu:</strong> {course.lieu || "—"}
                            </Typography>
                          </CardContent>
                        </Card>
                      ))}
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          ) : (
            // Table view for larger screens
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{ bgcolor: "#c7ebd3" }}>
                  <TableRow>
                    <TableCell>
                      <strong>Code (U.E)</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Date</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Intitulé</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Horaires</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Résidents</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Enseignants</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Lieu</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ bgcolor: "white" }}>
                  {Object.entries(groupedCourses).map(([ue, dates]) =>
                    Object.entries(dates).map(([date, courses], dateIndex) =>
                      courses.map((course, courseIndex) => (
                        <TableRow key={`${ue}-${date}-${courseIndex}`}>
                          {dateIndex === 0 && courseIndex === 0 && (
                            <TableCell
                              rowSpan={Object.values(dates).flat()?.length}
                            >
                              {ue}
                            </TableCell>
                          )}
                          {courseIndex === 0 && (
                            <TableCell rowSpan={courses?.length}>
                              {date}
                            </TableCell>
                          )}
                          <TableCell>{course.intitule}</TableCell>
                          <TableCell>{course.horaires}</TableCell>
                          <TableCell>
                            {course?.residents?.length &&
                            course?.residents?.length > 0
                              ? course.residents?.join(", ")
                              : "—"}
                          </TableCell>
                          <TableCell>
                            {course.enseignants?.join(", ")}
                          </TableCell>
                          <TableCell>{course.lieu || "—"}</TableCell>
                        </TableRow>
                      ))
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      )}
    </Box>
  );
};

export default CoursProgrammationTable;
