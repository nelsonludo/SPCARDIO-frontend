import { useState } from "react";
import BasicModal from "../../../components/simpleModal";

const EtudiantsContent: React.FC = () => {
  const [selectEtudiant, setSelectEtudiant] = useState<any>(null);
  const etudiants = [
    {
      id: 1,
      name: "Jean Dupont",
      photo: "https://via.placeholder.com/50",
      info: "Professeur de Mathématiques",
    },
    {
      id: 2,
      name: "Marie Curie",
      photo: "https://via.placeholder.com/50",
      info: "Professeur de Physique",
    },
  ];

  return (
    <div className="mt-16 max-w-4xl text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Étudiants</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Photo</th>
            <th className="border p-3">Nom</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {etudiants.map((etudiant) => (
            <tr key={etudiant.id} className="border">
              <td className="border p-3">
                <img
                  src={etudiant.photo}
                  alt={etudiant.name}
                  className="w-12 h-12 rounded-full"
                />
              </td>
              <td className="border p-3">{etudiant.name}</td>
              <td className="border p-3">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => setSelectEtudiant(etudiant)}
                >
                  <BasicModal info={selectEtudiant} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EtudiantsContent;
