//this is for all the write requests

import useAxios from "../hooks/useAxios";
import { CsvObject } from "../utils/csvParser";

export const usecreateProgrammes = () => {
  const { axios } = useAxios();

  const createProgrammes = async (
    newProgrammesArray: CsvObject[]
  ): Promise<{ successProgrammes: boolean; failedProgrammes: string[] }> => {
    if (newProgrammesArray.length === 0)
      return { successProgrammes: false, failedProgrammes: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newProgrammesArray.map((programme) =>
        axios.post(`/programmes`, {
          data: {
            title:
              programme && "title" in programme ? programme.title : undefined,
          },
        })
      )
    );

    // Identify failed requests
    const failedProgrammes = results
      .map((result, index) =>
        result.status === "rejected" &&
        newProgrammesArray[index] &&
        "title" in newProgrammesArray[index]
          ? newProgrammesArray[index].title
          : null
      )
      .filter(Boolean) as string[];

    // Return successProgrammes status and failed programmes
    return {
      successProgrammes: failedProgrammes.length === 0,
      failedProgrammes,
    };
  };

  return { createProgrammes };
};

export const usecreateUE = () => {
  //UE stands for Unites d'Enseignements
  const { axios } = useAxios();

  const createUE = async (
    newUEArray: CsvObject[]
  ): Promise<{ successUE: boolean; failedUE: string[] }> => {
    if (newUEArray.length === 0) return { successUE: false, failedUE: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newUEArray.map((UE) =>
        axios.post(`/unite-d-enseignements`, {
          data: {
            titre: UE && "titre" in UE ? UE.titre : undefined,
            code: UE && "code" in UE ? UE.code : undefined,
          },
        })
      )
    );

    // Identify failed requests
    const failedUE = results
      .map((result, index) =>
        result.status === "rejected" &&
        newUEArray[index] &&
        "titre" in newUEArray[index]
          ? newUEArray[index].titre
          : null
      )
      .filter(Boolean) as string[];

    // Return successUE status and failed UE
    return { successUE: failedUE.length === 0, failedUE };
  };

  return { createUE };
};

export const usecreateActivitesPedagogiques = () => {
  const { axios } = useAxios();

  const createActivitesPedagogiques = async (
    newActivitesPedagogiquesArray: CsvObject[]
  ): Promise<{ successAP: boolean; failedActivitesPedagogiques: string[] }> => {
    if (newActivitesPedagogiquesArray.length === 0)
      return { successAP: false, failedActivitesPedagogiques: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newActivitesPedagogiquesArray.map((AP) =>
        axios.post(`/activite-pedagogiques`, {
          data: {
            intitule: AP && "intitule" in AP ? AP?.intitule : undefined,
            date: AP && "date" in AP ? AP?.date : undefined,
            horaires: AP && "horaires" in AP ? AP?.horaires : undefined,
            lieu: AP && "lieu" in AP ? AP?.lieu : undefined,
          },
        })
      )
    );

    // Identify failed requests
    const failedActivitesPedagogiques = results
      .map((result, index) =>
        result.status === "rejected" &&
        newActivitesPedagogiquesArray[index] &&
        "intitule" in newActivitesPedagogiquesArray[index]
          ? newActivitesPedagogiquesArray[index].intitule
          : null
      )
      .filter(Boolean) as string[];

    // Return successAP status and failed ActivitesPedagogiques
    return {
      successAP: failedActivitesPedagogiques.length === 0,
      failedActivitesPedagogiques,
    };
  };

  return { createActivitesPedagogiques };
};

export const usecreateTypesActivitesPedagogiques = () => {
  const { axios } = useAxios();

  const createTypesActivitesPedagogiques = async (
    newTypesActivitesPedagogiquesArray: CsvObject[]
  ): Promise<{
    successTAP: boolean;
    failedTypesActivitesPedagogiques: string[];
  }> => {
    if (newTypesActivitesPedagogiquesArray.length === 0)
      return { successTAP: false, failedTypesActivitesPedagogiques: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newTypesActivitesPedagogiquesArray.map((TAP) =>
        axios.post(`/type-d-activite-pedagogiques`, {
          data: {
            code: TAP && "code" in TAP ? TAP?.code : undefined,
            titre: TAP && "titre" in TAP ? TAP?.titre : undefined,
          },
        })
      )
    );

    // Identify failed requests
    const failedTypesActivitesPedagogiques = results
      .map((result, index) =>
        result.status === "rejected" &&
        newTypesActivitesPedagogiquesArray[index] &&
        "titre" in newTypesActivitesPedagogiquesArray[index]
          ? newTypesActivitesPedagogiquesArray[index]?.titre
          : null
      )
      .filter(Boolean) as string[];

    // Return successTAP status and failed TypesActivitesPedagogiques
    return {
      successTAP: failedTypesActivitesPedagogiques.length === 0,
      failedTypesActivitesPedagogiques,
    };
  };

  return { createTypesActivitesPedagogiques };
};

export const usecreateEtudiants = () => {
  const { axios } = useAxios();

  const createEtudiants = async (
    newEtudiantsArray: CsvObject[]
  ): Promise<{ successEtudiants: boolean; failedEtudiants: string[] }> => {
    if (newEtudiantsArray.length === 0)
      return { successEtudiants: false, failedEtudiants: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newEtudiantsArray.map((etudiant) =>
        axios.post(`/etudiants`, {
          data: {
            nom: etudiant && "nom" in etudiant ? etudiant.nom : undefined,
            niveau:
              etudiant && "niveau" in etudiant ? etudiant.niveau : undefined,
            anneeEntree:
              etudiant && "anneeEntree" in etudiant
                ? etudiant.anneeEntree
                : undefined,
            email:
              etudiant && "anneeDeSortie" in etudiant
                ? etudiant.anneeDeSortie
                : undefined,
            anneeDeSortie:
              etudiant && "anneeDeSortie" in etudiant
                ? etudiant.anneeDeSortie
                : undefined,
            titreMemoire:
              etudiant && "titreMemoire" in etudiant
                ? etudiant.titreMemoire
                : undefined,
            matricule:
              etudiant && "matricule" in etudiant
                ? etudiant.matricule
                : undefined,
          },
        })
      )
    );

    // Identify failed requests
    const failedEtudiants = results
      .map((result, index) =>
        result.status === "rejected" &&
        newEtudiantsArray[index] &&
        "nom" in newEtudiantsArray[index]
          ? newEtudiantsArray[index].nom
          : null
      )
      .filter(Boolean) as string[];

    // Return successEtudiants status and failed Etudiants
    return { successEtudiants: failedEtudiants.length === 0, failedEtudiants };
  };

  return { createEtudiants };
};

export const usecreateEnseignants = () => {
  const { axios } = useAxios();

  const createEnseignants = async (
    newEnseignantsArray: CsvObject[]
  ): Promise<{ successEnseignants: boolean; failedEnseignants: string[] }> => {
    if (newEnseignantsArray.length === 0)
      return { successEnseignants: false, failedEnseignants: [] };

    // Execute all API requests
    const results = await Promise.allSettled(
      newEnseignantsArray.map((enseignant) =>
        axios.post(`/enseignants`, {
          data: {
            nom: enseignant && "nom" in enseignant ? enseignant.nom : undefined,
            grade:
              enseignant && "grade" in enseignant
                ? enseignant.grade
                : undefined,
            pays:
              enseignant && "pays" in enseignant ? enseignant.pays : undefined,
            departement:
              enseignant && "departement" in enseignant
                ? enseignant.departement
                : undefined,
            faculte:
              enseignant && "faculte" in enseignant
                ? enseignant.faculte
                : undefined,
            universite:
              enseignant && "universite" in enseignant
                ? enseignant.universite
                : undefined,
            numero:
              enseignant && "numero" in enseignant
                ? enseignant.numero
                : undefined,
            email:
              enseignant && "email" in enseignant
                ? enseignant.email
                : undefined,
            matricule:
              enseignant && "matricule" in enseignant
                ? enseignant.matricule
                : undefined,
          },
        })
      )
    );

    // Identify failed requests
    const failedEnseignants = results
      .map((result, index) =>
        result.status === "rejected" &&
        newEnseignantsArray[index] &&
        "nom" in newEnseignantsArray[index]
          ? newEnseignantsArray[index].nom
          : null
      )
      .filter(Boolean) as string[];

    // Return successEnseignants status and failed Enseignants
    return {
      successEnseignants: failedEnseignants.length === 0,
      failedEnseignants,
    };
  };

  return { createEnseignants };
};
