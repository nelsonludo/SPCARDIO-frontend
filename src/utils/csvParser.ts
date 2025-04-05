// Define all interfaces (same as before)
interface Programme {
  title: string;
}
interface UE {
  titre: string;
  code: string;
}
interface AP {
  intitule: string;
  date: string;
  horaires: string;
  lieu: string;
}
interface TAP {
  code: string;
  titre: string;
}
interface Etudiant {
  nom: string;
  niveau: string;
  anneeEntree: string;
  email: string;
  anneeDeSortie: string;
  titreMemoire: string;
}
interface Enseignant {
  nom: string;
  grade: string;
  pays: string;
  departement: string;
  faculte: string;
  universite: string;
}

export type CsvObject =
  | Programme
  | UE
  | AP
  | TAP
  | Etudiant
  | Enseignant
  | null;

export async function parseCsvFile(file: File): Promise<CsvObject[]> {
  return new Promise((resolve, reject) => {
    const results: CsvObject[] = [];
    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split("\n");

      // Extract headers (first line)
      const headers = lines[0].split(",").map((h) => h.trim());

      // Process remaining lines
      for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue; // Skip empty lines

        const values = lines[i].split(",");
        const obj: Record<string, string> = {};

        headers.forEach((header, index) => {
          obj[header] = values[index]?.trim() || "";
        });

        // Determine the type based on the headers present
        if ("title" in obj) {
          results.push({ title: obj.title } as Programme);
        } else if (
          "titre" in obj &&
          "code" in obj &&
          Object.keys(obj).length === 2
        ) {
          results.push({
            titre: obj.titre,
            code: obj.code,
          } as UE);
        } else if (
          "intitule" in obj &&
          "date" in obj &&
          "horaires" in obj &&
          "lieu" in obj
        ) {
          results.push({
            intitule: obj.intitule,
            date: obj.date,
            horaires: obj.horaires,
            lieu: obj.lieu,
          } as AP);
        } else if (
          "code" in obj &&
          "titre" in obj &&
          Object.keys(obj).length === 2
        ) {
          results.push({
            code: obj.code,
            titre: obj.titre,
          } as TAP);
        } else if (
          "nom" in obj &&
          "niveau" in obj &&
          "anneeEntree" in obj &&
          "email" in obj
        ) {
          results.push({
            nom: obj.nom,
            niveau: obj.niveau,
            anneeEntree: obj.anneeEntree,
            email: obj.email,
            anneeDeSortie: obj.anneeDeSortie,
            titreMemoire: obj.titreMemoire,
          } as Etudiant);
        } else if ("nom" in obj && "grade" in obj && "pays" in obj) {
          results.push({
            nom: obj.nom,
            grade: obj.grade,
            pays: obj.pays,
            departement: obj.departement,
            faculte: obj.faculte,
            universite: obj.universite,
          } as Enseignant);
        } else {
          results.push(null); // fallback to generic object
        }
      }

      resolve(results);
    };

    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };

    reader.readAsText(file);
  });
}
