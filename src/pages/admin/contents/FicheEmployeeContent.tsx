import { useState } from "react";
import BasicModal from "../../../components/simpleModal";

const FicheEmployeeContent: React.FC = () => {
  const [selectEdemploye, setSelectEdemploye] = useState<any>(null);
  const employes = [
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
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos employés</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Photo</th>
            <th className="border p-3">Nom</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employes.map((employe) => (
            <tr key={employe.id} className="border">
              <td className="border p-3">
                <img
                  src={employe.photo}
                  alt={employe.name}
                  className="w-12 h-12 rounded-full"
                />
              </td>
              <td className="border p-3">{employe.name}</td>
              <td className="border p-3">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => setSelectEdemploye(employe)}
                >
                  <BasicModal info={selectEdemploye} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FicheEmployeeContent;
