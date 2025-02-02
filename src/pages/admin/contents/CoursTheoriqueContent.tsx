import ActorsList from "../../../components/actorsList";
import { ActorsType, NiveauEtudiants } from "../../../types/enums/actors-types";
import {
  predefinedEtudiantsNiveau1,
  predefinedEtudiantsNiveau3,
  predefinedEtudiantsNiveau4,
} from "../../../dummyData/etudiants";

import React, { useState } from "react";
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

type CoursTheoriquesContentPropsType = {
  niveau: NiveauEtudiants;
};

const CoursTheoriquesContent: React.FC<CoursTheoriquesContentPropsType> = ({
  niveau,
}) => {
  if (niveau === NiveauEtudiants.NiVEAU1)
    return (
      <ActorsList
        type={ActorsType.ETUDIANT}
        actor={predefinedEtudiantsNiveau1}
      />
    );
  if (niveau === NiveauEtudiants.NiVEAU2) return <Dashboard />;
  if (niveau === NiveauEtudiants.NiVEAU3) return <Dashboard2 />;
  if (niveau === NiveauEtudiants.NiVEAU4)
    return (
      <ActorsList
        type={ActorsType.ETUDIANT}
        actor={predefinedEtudiantsNiveau4}
      />
    );
};

export default CoursTheoriquesContent;

interface Course {
  code: string;
  title: string;
  date: string;
  time: string;
  instructors: string[];
}

const coursesData: { [week: string]: Course[] } = {
  "26-30 Nov 2024": [
    {
      code: "SCAR 212",
      title: "Les urgences cardiovasculaires",
      date: "26 Nov",
      time: "14H-16H30",
      instructors: ["Pr HAMADOU BA", "Pr BOOMBHI J", "Dr OUANKOU C"],
    },
    {
      code: "SCAR 212",
      title: "Syndrome coronaire aigu",
      date: "27 Nov",
      time: "13H00-15H00",
      instructors: ["Dr Amina Babalala", "Pr MENANGA A", "Dr OWONA"],
    },
    {
      code: "SCAR 211",
      title: "Les cardiopathies primitives et acquises",
      date: "29 Nov",
      time: "16H00-17H30",
      instructors: ["Dr Nzongang Hursul", "Pr DZUDZIE A", "Pr BOOMBHI"],
    },
  ],
  "06-10 Jan 2025": [
    {
      code: "SCAR 211",
      title: "Insuffisance cardiaque",
      date: "06 Jan",
      time: "13H00-17H00",
      instructors: ["Dr Essola Andiolo", "Dr Gadkang Anicet", "Dr Mevono Nkou"],
    },
    {
      code: "SCAR 211",
      title: "Péricardites",
      date: "07 Jan",
      time: "15H30-17H30",
      instructors: ["Dr Claudine Jessica Yondo", "Pr KUATE", "Dr EBENE"],
    },
  ],
  "27-31 Jan 2025": [
    {
      code: "SCAR 213",
      title: "Hypertension artérielle",
      date: "27 Jan",
      time: "13H00-17H00",
      instructors: ["Dr Essola Andiolo", "Dr Gadkang Ladibe Anicet"],
    },
    {
      code: "SCAR 213",
      title: "Anévrysme de l’aorte",
      date: "29 Jan",
      time: "13H00-15H00",
      instructors: ["Dr Anyuouzo’o Ella Simon", "Pr NDONGO S", "Dr FOKOU M"],
    },
  ],
};

const Dashboard: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState(Object.keys(coursesData)[0]);

  return (
    <Box className="p-6">
      <Typography variant="h4" className="mb-4 font-semibold">
        Programme des Enseignements - Niveau II
      </Typography>

      {/* Tabs for weeks */}
      <Tabs
        value={selectedWeek}
        onChange={(_event, newValue) => setSelectedWeek(newValue)}
      >
        {Object.keys(coursesData).map((week) => (
          <Tab key={week} label={week} value={week} />
        ))}
      </Tabs>

      {/* Course Table */}
      <TableContainer component={Paper} className="mt-4">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>Code (U.E)</TableCell>
              <TableCell>Intitulé</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Horaires</TableCell>
              <TableCell>Enseignants</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coursesData[selectedWeek].map((course, index) => (
              <TableRow key={index}>
                <TableCell>{course.code}</TableCell>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.date}</TableCell>
                <TableCell>{course.time}</TableCell>
                <TableCell>{course.instructors.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const coursesData2: { [week: string]: Course[] } = {
  "16-19 Dec 2024": [
    {
      code: "SCAR 313",
      title: "Tétralogie de Fallot",
      date: "16 Dec",
      time: "13H00-15H00",
      instructors: ["Dr Balomog Audrey", "Pr MENANGA A", "Pr BOOMBHI J"],
    },
    {
      code: "SCAR 313",
      title: "Transposition des gros Vaisseaux",
      date: "17 Dec",
      time: "14H00-15H00",
      instructors: ["Dr Bidjogo Atangana", "Pr NDONGO S", "Dr OWONA"],
    },
    {
      code: "SCAR 313",
      title: "Anomalies du retour veineux pulmonaire",
      date: "17 Dec",
      time: "15H00-16H00",
      instructors: [
        "Dr Daouda Sadou",
        "Pr CHELO D",
        "Pr NDONGO S",
        "Dr OWONA A",
      ],
    },
    {
      code: "SCAR 313",
      title: "Coarcation de l’aorte",
      date: "18 Dec",
      time: "14H00-15H00",
      instructors: ["Dr Elouna Valentin", "Pr BOOMBHI J", "Dr OWONA A"],
    },
  ],
  "20-27 Dec 2024": [
    {
      code: "SCAR 311",
      title:
        "Echocardiographie doppler : Étude de la fonction systolique et diastolique",
      date: "20 Dec",
      time: "13H00-17H00",
      instructors: ["Pr BOOMBHI J", "Dr MINTOM P"],
    },
    {
      code: "SCAR 311",
      title: "Echocardiographie doppler dans les valvulopathies",
      date: "23 Dec",
      time: "13H00-17H00",
      instructors: ["Pr HAMADOU BA", "Pr BOOMBHI J", "Dr NDOBO"],
    },
    {
      code: "SCAR 311",
      title: "Echographie trans-oesophagienne & Echographie de stress",
      date: "26 Dec",
      time: "15H00-17H00",
      instructors: ["Pr NGANOU C", "Dr MINTOM P"],
    },
  ],
};

const Dashboard2: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState(
    Object.keys(coursesData2)[0]
  );

  return (
    <Box className="p-6">
      <Typography variant="h4" className="mb-4 font-semibold">
        Programme des Enseignements - Niveau III
      </Typography>

      {/* Tabs for weeks */}
      <Tabs
        value={selectedWeek}
        onChange={(_event, newValue) => setSelectedWeek(newValue)}
      >
        {Object.keys(coursesData2).map((week) => (
          <Tab key={week} label={week} value={week} />
        ))}
      </Tabs>

      {/* Course Table */}
      <TableContainer component={Paper} className="mt-4">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>Code (U.E)</TableCell>
              <TableCell>Intitulé</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Horaires</TableCell>
              <TableCell>Enseignants</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coursesData2[selectedWeek].map((course, index) => (
              <TableRow key={index}>
                <TableCell>{course.code}</TableCell>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.date}</TableCell>
                <TableCell>{course.time}</TableCell>
                <TableCell>{course.instructors.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
