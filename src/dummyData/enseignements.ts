import { Enseignement } from "../types/entities/enseignements";

export type EnseignementType = { [week: string]: Enseignement[] };

export const Niveau2coursesData: EnseignementType = {
  "26-30 Nov 2024": [
    {
      uniteEnseignement: "SCAR 212",
      intitule: "Les urgences cardiovasculaires",
      date: "26 Nov",
      horaires: "14H-16H30",
      residents: ["Dr OUANKOU C"],
      enseignants: ["Pr HAMADOU BA", "Pr BOOMBHI J", "Dr OUANKOU C"],
      observation: "Séminaire",
    },
    {
      uniteEnseignement: "SCAR 212",
      intitule: "Syndrome coronaire aigu",
      date: "27 Nov",
      horaires: "13H00-15H00",
      residents: ["Dr Amina Babalala"],
      enseignants: ["Dr Amina Babalala", "Pr MENANGA A", "Dr OWONA"],
      observation: "Séminaire",
    },
    {
      uniteEnseignement: "SCAR 211",
      intitule: "Les cardiopathies primitives et acquises",
      date: "29 Nov",
      horaires: "16H00-17H30",
      residents: ["Dr Nzongang Hursul"],
      enseignants: ["Dr Nzongang Hursul", "Pr DZUDZIE A", "Pr BOOMBHI"],
      observation: "Séminaire",
    },
  ],
  "06-10 Jan 2025": [
    {
      uniteEnseignement: "SCAR 211",
      intitule: "Insuffisance cardiaque",
      date: "06 Jan",
      horaires: "13H00-17H00",
      residents: ["Dr Essola Andiolo"],
      enseignants: ["Dr Essola Andiolo", "Dr Gadkang Anicet", "Dr Mevono Nkou"],
      observation: "Séminaire",
    },
    {
      uniteEnseignement: "SCAR 211",
      intitule: "Péricardites",
      date: "07 Jan",
      horaires: "15H30-17H30",
      residents: ["Dr Claudine Jessica Yondo"],
      enseignants: ["Dr Claudine Jessica Yondo", "Pr KUATE", "Dr EBENE"],
      observation: "Séminaire",
    },
  ],
  "27-31 Jan 2025": [
    {
      uniteEnseignement: "SCAR 213",
      intitule: "Hypertension artérielle",
      date: "27 Jan",
      horaires: "13H00-17H00",
      residents: ["Dr Essola Andiolo Ornella"],
      enseignants: ["Dr Essola Andiolo", "Dr Gadkang Ladibe Anicet"],
      observation: "Séminaire",
    },
    {
      uniteEnseignement: "SCAR 213",
      intitule: "Anévrysme de l’aorte",
      date: "29 Jan",
      horaires: "13H00-15H00",
      residents: ["Dr Anyuouzo’o Ella Simon"],
      enseignants: ["Dr Anyuouzo’o Ella Simon", "Pr NDONGO S", "Dr FOKOU M"],
      observation: "Séminaire",
    },
  ],
};

export const Niveau3coursesData: EnseignementType = {
  "16-19 Dec 2024": [
    {
      uniteEnseignement: "SCAR 313",
      intitule: "Tétralogie de Fallot",
      date: "16 Dec",
      horaires: "13H00-15H00",
      residents: ["Dr Balomog Audrey"],
      enseignants: ["Dr Balomog Audrey", "Pr MENANGA A", "Pr BOOMBHI J"],
      observation: "Séminaire",
    },
    {
      uniteEnseignement: "SCAR 313",
      intitule: "Transposition des gros Vaisseaux",
      date: "17 Dec",
      horaires: "14H00-15H00",
      residents: ["Dr Bidjogo Atangana"],
      enseignants: ["Dr Bidjogo Atangana", "Pr NDONGO S", "Dr OWONA"],
      observation: "Séminaire",
    },
    {
      uniteEnseignement: "SCAR 313",
      intitule: "Anomalies du retour veineux pulmonaire",
      date: "17 Dec",
      horaires: "15H00-16H00",
      residents: ["Dr Daouda Sadou"],
      enseignants: [
        "Dr Daouda Sadou",
        "Pr CHELO D",
        "Pr NDONGO S",
        "Dr OWONA A",
      ],
      observation: "Séminaire",
    },
    {
      uniteEnseignement: "SCAR 313",
      intitule: "Coarcation de l’aorte",
      date: "18 Dec",
      horaires: "14H00-15H00",
      residents: ["Dr Elouna Valentin"],
      enseignants: ["Dr Elouna Valentin", "Pr BOOMBHI J", "Dr OWONA A"],
      observation: "Séminaire",
    },
  ],
  "20-27 Dec 2024": [
    {
      uniteEnseignement: "SCAR 311",
      intitule:
        "Echocardiographie doppler : Étude de la fonction systolique et diastolique",
      date: "20 Dec",
      horaires: "13Hs00-17H00",
      residents: ["N/A"],
      enseignants: ["Pr BOOMBHI J", "Dr MINTOM P"],
      observation: "Séminaire",
    },
    {
      uniteEnseignement: "SCAR 311",
      intitule: "Echocardiographie doppler dans les valvulopathies",
      date: "23 Dec",
      horaires: "13H00-17H00",
      residents: ["N/A"],
      enseignants: ["Pr HAMADOU BA", "Pr BOOMBHI J", "Dr NDOBO"],
      observation: "Séminaire",
    },
    {
      uniteEnseignement: "SCAR 311",
      intitule: "Echographie trans-oesophagienne & Echographie de stress",
      date: "26 Dec",
      horaires: "15H00-17H00",
      residents: ["N/A"],
      enseignants: ["Pr NGANOU C", "Dr MINTOM P"],
      observation: "Séminaire",
    },
  ],
};
