// src/components/modals/FileImportModal.tsx
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

import {
  DocumentTextIcon,
  FolderArrowDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { failedToast } from "../../utils/toasts";
import { spcardioEntities } from "../../types/enums/entities";
import {
  usecreateActivitesPedagogiques,
  usecreateEnseignants,
  usecreateEtudiants,
  usecreateProgrammes,
  usecreateTypesActivitesPedagogiques,
  usecreateUE,
} from "../../api/WriteApi";
import SmallLoader from "../SmallLoader";
import { parseCsvFile } from "../../utils/csvParser";
import {
  useGetAPTypes,
  useGetEnseignements,
  useGetProgrammes,
  useGetUniteEnseignements,
} from "../../api/EnseignementsApi";
import { useGetEnseignants } from "../../api/EnseignantsApi";
import { useGetEtudiants } from "../../api/EtudiantsApi";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "@mui/material";

type FileImportModalPropsType = {
  dataType:
    | spcardioEntities.ENSEIGNANTS
    | spcardioEntities.ACTIVITES_PEDAGOGIQUES
    | spcardioEntities.PROGRAMMES
    | spcardioEntities.UNITES_D_ENSEIGNEMENTS
    | spcardioEntities.ACTIVITES_PEDAGOGIQUES
    | spcardioEntities.TYPES_D_ACTIVITES_PEDAGOGIQUES
    | spcardioEntities.ETUDIANTS;
};

const FileImportModal: React.FC<FileImportModalPropsType> = ({ dataType }) => {
  const [localFile, setLocalFile] = useState<File | null>(null); // Local file state for new files
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { createActivitesPedagogiques } = usecreateActivitesPedagogiques();
  const { getEnseignements } = useGetEnseignements();
  const { createEnseignants } = usecreateEnseignants();
  const { getEnseignants } = useGetEnseignants();
  const { createEtudiants } = usecreateEtudiants();
  const { getEtudiants } = useGetEtudiants();
  const { createProgrammes } = usecreateProgrammes();
  const { getProgrammes } = useGetProgrammes();

  const { createTypesActivitesPedagogiques } =
    usecreateTypesActivitesPedagogiques();
  const { getAPTypes } = useGetAPTypes();
  const { createUE } = usecreateUE();
  const { getUniteEnseignements } = useGetUniteEnseignements();

  const handleRemoveFile = () => {
    setLocalFile(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) setLocalFile(files?.[0]); // Store the file in state
  };

  const handleContinue = async () => {
    if (localFile) {
      if (!localFile) return;

      const extractedArrayFromFile = parseCsvFile(localFile);

      let result: { success: boolean; failure: string[] };

      setLoading(true);

      console.log(await extractedArrayFromFile);

      try {
        switch (dataType) {
          case spcardioEntities.PROGRAMMES:
            if (
              !(await extractedArrayFromFile)[0] ||
              !(
                extractedArrayFromFile &&
                (await extractedArrayFromFile)?.[0] &&
                "title" in (await extractedArrayFromFile)?.[0]!
              )
            ) {
              throw new Error(
                "Mauvais contenu dans le CSV - Programme doit contenir 'title'"
              );
            }
            const { successProgrammes, failedProgrammes } =
              await createProgrammes(await extractedArrayFromFile);
            result = { success: successProgrammes, failure: failedProgrammes };
            getProgrammes();
            break;

          case spcardioEntities.UNITES_D_ENSEIGNEMENTS:
            if (
              !(await extractedArrayFromFile)[0] ||
              ((await extractedArrayFromFile)?.[0] &&
                "titre" in (await extractedArrayFromFile)[0]!) ||
              ((await extractedArrayFromFile)?.[0] &&
                "code" in (await extractedArrayFromFile)[0]!)
            ) {
              throw new Error(
                "Fichier invalide - UE doit contenir 'titre' et 'code'"
              );
            }
            const { successUE, failedUE } = await createUE(
              await extractedArrayFromFile
            );
            result = { success: successUE, failure: failedUE };
            getUniteEnseignements();
            break;

          case spcardioEntities.ACTIVITES_PEDAGOGIQUES:
            if (
              !(await extractedArrayFromFile)[0] ||
              ((await extractedArrayFromFile)?.[0] &&
                "intitule" in (await extractedArrayFromFile)[0]!) ||
              ((await extractedArrayFromFile)?.[0] &&
                "date" in (await extractedArrayFromFile)[0]!) ||
              ((await extractedArrayFromFile)?.[0] &&
                "horaires" in (await extractedArrayFromFile)[0]!) ||
              ((await extractedArrayFromFile)?.[0] &&
                "lieu" in (await extractedArrayFromFile)[0]!)
            ) {
              throw new Error(
                "Fichier invalide - AP doit contenir 'intitule', 'date', 'horaires', et 'lieu'"
              );
            }
            const { successAP, failedActivitesPedagogiques } =
              await createActivitesPedagogiques(await extractedArrayFromFile);
            result = {
              success: successAP,
              failure: failedActivitesPedagogiques,
            };
            getEnseignements();
            break;

          case spcardioEntities.TYPES_D_ACTIVITES_PEDAGOGIQUES:
            if (
              !(await extractedArrayFromFile)[0] ||
              ((await extractedArrayFromFile)?.[0] &&
                "code" in (await extractedArrayFromFile)[0]!) ||
              ((await extractedArrayFromFile)?.[0] &&
                "titre" in (await extractedArrayFromFile)[0]!)
            ) {
              throw new Error(
                "Fichier invalide - TAP doit contenir 'code' et 'titre'"
              );
            }
            const { successTAP, failedTypesActivitesPedagogiques } =
              await createTypesActivitesPedagogiques(
                await extractedArrayFromFile
              );
            result = {
              success: successTAP,
              failure: failedTypesActivitesPedagogiques,
            };
            getAPTypes();
            break;

          case spcardioEntities.ETUDIANTS:
            if (
              !(await extractedArrayFromFile)[0] ||
              ((await extractedArrayFromFile)?.[0] &&
                "nom" in (await extractedArrayFromFile)[0]!) ||
              ((await extractedArrayFromFile)?.[0] &&
                "niveau" in (await extractedArrayFromFile)[0]!) ||
              ((await extractedArrayFromFile)?.[0] &&
                "anneeEntree" in (await extractedArrayFromFile)[0]!) ||
              ((await extractedArrayFromFile)?.[0] &&
                "email" in (await extractedArrayFromFile)[0]!)
            ) {
              throw new Error(
                "Fichier invalide - Etudiant doit contenir 'nom', 'niveau', 'anneeEntree', et 'email'"
              );
            }
            const { successEtudiants, failedEtudiants } = await createEtudiants(
              await extractedArrayFromFile
            );
            result = { success: successEtudiants, failure: failedEtudiants };
            getEtudiants();
            break;

          case spcardioEntities.ENSEIGNANTS:
            if (
              !(await extractedArrayFromFile)[0] ||
              ((await extractedArrayFromFile)?.[0] &&
                "nom" in (await extractedArrayFromFile)[0]!) ||
              ((await extractedArrayFromFile)?.[0] &&
                "grade" in (await extractedArrayFromFile)[0]!) ||
              ((await extractedArrayFromFile)?.[0] &&
                "pays" in (await extractedArrayFromFile)[0]!)
            ) {
              throw new Error(
                "Fichier invalide - Enseignant doit contenir 'nom', 'grade', et 'pays'"
              );
            }
            const { successEnseignants, failedEnseignants } =
              await createEnseignants(await extractedArrayFromFile);
            result = {
              success: successEnseignants,
              failure: failedEnseignants,
            };
            getEnseignants();
            break;

          default:
            throw new Error(`Type d'entité non reconnu: ${dataType}`);
        }
        if (result.success) {
          setLocalFile(null); // Reset local state
          setOpen(false); // Close modal
        } else {
          console.error("Failed members:", result.failure);
        }
      } catch (error: any) {
        failedToast(error.message);
      } finally {
      }
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PlusCircleIcon />}
          sx={{ mt: 2, mb: 2, mr: 2, ml: 2 }}
        >
          Importer des données
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-8">
        <DialogHeader>
          <div className="w-full flex">
            <div className="bg-white p-4 rounded-2xl w-fit">
              <DocumentTextIcon className="w-6 h-6 text-rajapiBlue" />
            </div>
            {loading && <SmallLoader modal={true} />}
          </div>
        </DialogHeader>
        <h2 className="text-xl font-medium text-black text-blue-950">
          Importer des documents necessaires
        </h2>
        <h2 className="text-xs font-medium text-gray">
          Commencez à créer et gérer les documents de votre projet en quelques
          clics seulement !
        </h2>
        <div className="mt-4">
          <label
            htmlFor="file-upload"
            className="flex flex-col w-full p-4 border-2  rounded-2xl text-center cursor-pointer text-gray-500 hover:border-blue-500 focus:outline-none bg-white justify-center items-center space-y-4"
          >
            <FolderArrowDownIcon className="text-rajapiBlue w-14 h-14" />
            <span className="text-black font-bold text-xl">
              Faites glisser et déposez ici
            </span>
            <span className="text-grey-700 font-normal text-sm text-nowrap">
              Le type de fichier doit être(csv).
            </span>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept=".csv"
            />
          </label>
        </div>
        {localFile && (
          <div className="flex items-center justify-between bg-[#ECEBE9] px-4 py-2 rounded-xl">
            <div className="flex items-center">
              <img src={"/images/"} alt={"/images/"} className="w-8 h-8 mr-2" />

              <div>
                <p className="text-md ">{localFile.name}</p>
                <p className="text-xs text-gray-500 flex space-x-2">
                  <span>Uploaded File </span>
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemoveFile()}
              className="flex items-center space-x-2"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <button
            className="mr-2 bg-rajapiBlue py-4 px-24 rounded-xl text-white text-sm"
            type="submit"
            onClick={() => handleContinue()}
            disabled={!localFile}
          >
            Continue
          </button>
          <button
            className="mr-2 bg-white py-4 px-24 rounded-xl text-blue-950 text-sm"
            onClick={() => {
              setOpen(false);
              setLocalFile(null);
            }}
          >
            Annuler
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FileImportModal;
