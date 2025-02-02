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
  Typography,
} from "@mui/material";

interface Course {
  code: string;
  title: string;
  date: string;
  time: string;
  resident: string;
  instructors: string[];
  observation?: string;
}

type CoursTheoriquesContentPropsType = {
  coursesData: { [week: string]: Course[] };
  title: string;
};

const CoursProgrammationTable: React.FC<CoursTheoriquesContentPropsType> = ({
  coursesData,
  title,
}) => {
  const weeks = Object.keys(coursesData);
  const [selectedWeek, setSelectedWeek] = useState<string>(weeks[0] || "");

  useEffect(() => {
    if (weeks.length > 0) {
      // Ensure selectedWeek is a valid key
      setSelectedWeek((prevWeek) =>
        weeks.includes(prevWeek) ? prevWeek : weeks[0]
      );
    }
  }, [coursesData]);

  return (
    <Box className="p-6">
      <Typography variant="h4" className="mb-4 font-semibold">
        {title}
      </Typography>

      {/* Ensure selectedWeek is a valid key before rendering Tabs */}
      {weeks.length > 0 && (
        <Tabs
          value={selectedWeek}
          onChange={(_event, newValue) => setSelectedWeek(newValue)}
        >
          {weeks.map((week) => (
            <Tab key={week} label={week} value={week} />
          ))}
        </Tabs>
      )}

      {/* Course Table */}
      <TableContainer component={Paper} className="mt-4">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>Code (U.E) & Intitulé</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Horaires</TableCell>
              <TableCell>Résident</TableCell>
              <TableCell>Enseignants</TableCell>
              <TableCell>Observations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coursesData[selectedWeek]?.map((course, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography fontWeight="bold">{course.code}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {course.title}
                  </Typography>
                </TableCell>
                <TableCell>{course.date}</TableCell>
                <TableCell>{course.time}</TableCell>
                <TableCell>{course.resident || "N/A"}</TableCell>
                <TableCell>{course.instructors.join(", ")}</TableCell>
                <TableCell>{course.observation || "N/A"}</TableCell>
              </TableRow>
            )) || (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CoursProgrammationTable;
