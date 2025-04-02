//this is for all the write requests

import useAxios from "../hooks/useAxios";
import {
  ActivitePedagogique,
  Type_d_activite_pedagogiqueType,
} from "../types/entities/activitePedagogique";
import { EnseignantsType } from "../types/entities/enseignants";
import { EtudiantType } from "../types/entities/etudiants";
import { ProgrammeType } from "../types/entities/programmes";
import { Unite_d_enseignementsType } from "../types/entities/uniteEnseignements";

export const usecreateProgrammes = () => {
  const { axios } = useAxios();

  const createProgrammes = async (
    newProgrammesArray: ProgrammeType[]
  ): Promise<{ success: boolean; failedProgrammes: string[] }> => {
    if (newProgrammesArray.length === 0)
      return { success: false, failedProgrammes: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newProgrammesArray.map((programme) =>
        axios.post(`/programmes`, {
          data: { title: programme.title },
        })
      )
    );

    // Identify failed requests
    const failedProgrammes = results
      .map((result, index) =>
        result.status === "rejected" ? newProgrammesArray[index].title : null
      )
      .filter(Boolean) as string[];

    // Return success status and failed programmes
    return { success: failedProgrammes.length === 0, failedProgrammes };
  };

  return { createProgrammes };
};

export const usecreateUE = () => {
  //UE stands for Unites d'Enseignements
  const { axios } = useAxios();

  const createUE = async (
    newUEArray: Unite_d_enseignementsType[]
  ): Promise<{ success: boolean; failedUE: string[] }> => {
    if (newUEArray.length === 0) return { success: false, failedUE: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newUEArray.map((UE) =>
        axios.post(`/unite-d-enseignements`, {
          data: { titre: UE.titre, code: UE.code },
        })
      )
    );

    // Identify failed requests
    const failedUE = results
      .map((result, index) =>
        result.status === "rejected" ? newUEArray[index].titre : null
      )
      .filter(Boolean) as string[];

    // Return success status and failed UE
    return { success: failedUE.length === 0, failedUE };
  };

  return { createUE };
};

export const usecreateActivitesPedagogiques = () => {
  const { axios } = useAxios();

  const createActivitesPedagogiques = async (
    newActivitesPedagogiquesArray: ActivitePedagogique[]
  ): Promise<{ success: boolean; failedActivitesPedagogiques: string[] }> => {
    if (newActivitesPedagogiquesArray.length === 0)
      return { success: false, failedActivitesPedagogiques: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newActivitesPedagogiquesArray.map((AP) =>
        axios.post(`/activite-pedagogiques`, {
          data: {
            intitule: AP.intitule,
            date: AP.date,
            horaires: AP.horaires,
            lieu: AP.lieu,
          },
        })
      )
    );

    // Identify failed requests
    const failedActivitesPedagogiques = results
      .map((result, index) =>
        result.status === "rejected"
          ? newActivitesPedagogiquesArray[index].intitule
          : null
      )
      .filter(Boolean) as string[];

    // Return success status and failed ActivitesPedagogiques
    return {
      success: failedActivitesPedagogiques.length === 0,
      failedActivitesPedagogiques,
    };
  };

  return { createActivitesPedagogiques };
};
export const usecreateTypesActivitesPedagogiques = () => {
  const { axios } = useAxios();

  const createTypesActivitesPedagogiques = async (
    newTypesActivitesPedagogiquesArray: Type_d_activite_pedagogiqueType[]
  ): Promise<{
    success: boolean;
    failedTypesActivitesPedagogiques: string[];
  }> => {
    if (newTypesActivitesPedagogiquesArray.length === 0)
      return { success: false, failedTypesActivitesPedagogiques: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newTypesActivitesPedagogiquesArray.map((TAP) =>
        axios.post(`/type-d-activite-pedagogiques`, {
          data: {
            code: TAP.code,
            titre: TAP.titre,
          },
        })
      )
    );

    // Identify failed requests
    const failedTypesActivitesPedagogiques = results
      .map((result, index) =>
        result.status === "rejected"
          ? newTypesActivitesPedagogiquesArray[index].titre
          : null
      )
      .filter(Boolean) as string[];

    // Return success status and failed TypesActivitesPedagogiques
    return {
      success: failedTypesActivitesPedagogiques.length === 0,
      failedTypesActivitesPedagogiques,
    };
  };

  return { createTypesActivitesPedagogiques };
};
export const usecreateEtudiants = () => {
  const { axios } = useAxios();

  const createEtudiants = async (
    newEtudiantsArray: EtudiantType[]
  ): Promise<{ success: boolean; failedEtudiants: string[] }> => {
    if (newEtudiantsArray.length === 0)
      return { success: false, failedEtudiants: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newEtudiantsArray.map((etudiant) =>
        axios.post(`/etudiants`, {
          data: {
            nom: etudiant.nom,
            niveau: etudiant.niveau,
            anneeEntree: etudiant.anneeEntree,
            email: etudiant.anneeDeSortie,
            anneeDeSortie: etudiant.anneeDeSortie,
            titreMemoire: etudiant.titreMemoire,
          },
        })
      )
    );

    // Identify failed requests
    const failedEtudiants = results
      .map((result, index) =>
        result.status === "rejected" ? newEtudiantsArray[index].nom : null
      )
      .filter(Boolean) as string[];

    // Return success status and failed Etudiants
    return { success: failedEtudiants.length === 0, failedEtudiants };
  };

  return { createEtudiants };
};
export const usecreateEnseignants = () => {
  const { axios } = useAxios();

  const createEnseignants = async (
    newEnseignantsArray: EnseignantsType[]
  ): Promise<{ success: boolean; failedEnseignants: string[] }> => {
    if (newEnseignantsArray.length === 0)
      return { success: false, failedEnseignants: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newEnseignantsArray.map((enseignant) =>
        axios.post(`/enseignants`, {
          data: {
            nom: enseignant.nom,
            grade: enseignant.grade,
            pays: enseignant.pays,
            departement: enseignant.departement,
            faculte: enseignant.faculte,
            universite: enseignant.universite,
            numero: enseignant.numero,
            email: enseignant.email,
          },
        })
      )
    );

    // Identify failed requests
    const failedEnseignants = results
      .map((result, index) =>
        result.status === "rejected" ? newEnseignantsArray[index].nom : null
      )
      .filter(Boolean) as string[];

    // Return success status and failed Enseignants
    return { success: failedEnseignants.length === 0, failedEnseignants };
  };

  return { createEnseignants };
};
