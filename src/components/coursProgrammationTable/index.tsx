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

import { EnseignementType } from "../../dummyData/enseignements";



type CoursTheoriquesContentPropsType = {
  coursesData: EnseignementType;
};

const CoursProgrammationTable: React.FC<CoursTheoriquesContentPropsType> = ({
  coursesData,
  
}) => {
  const weeks = Object.keys(coursesData);
  const [selectedWeek, setSelectedWeek] = useState<string>(weeks[0] || "");

  const unitesEnseignements:string[] = coursesData[selectedWeek].map((course) => course.uniteEnseignement
   )

  useEffect(() => {
    if (weeks.length > 0) {
      // Ensure selectedWeek is a valid key
      setSelectedWeek((prevWeek) =>
        weeks.includes(prevWeek) ? prevWeek : weeks[0]
      );
    }

    console.log(unitesEnseignements)
  }, [coursesData]);

  


  return (
    <Box className="p-6">

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
          <TableHead className="bg-[#c7ebd3]">
            <TableRow>
              <TableCell>Code (U.E)</TableCell>
              <TableCell>Intitulé</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Horaires</TableCell>
              <TableCell>Résidents</TableCell>
              <TableCell>Enseignants</TableCell>
              <TableCell>Observations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-white">
            {coursesData[selectedWeek]?.map((course, index:number) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography fontWeight="bold">{course.uniteEnseignement}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {course.intitule}
                  </Typography>
                </TableCell>
                <TableCell>{course.date}</TableCell>
                <TableCell>{course.horaires}</TableCell>
                <TableCell>{course.residents || "N/A"}</TableCell>
                <TableCell>{course.enseignants.join(", ")}</TableCell>
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
