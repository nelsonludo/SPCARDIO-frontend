const ImpotsContent: React.FC = () => {
  const impots = [
    { employe: "Jean Dupont", montant: "25 000 FCFA", date: "Janvier 2024" },
    { employe: "Marie Curie", montant: "30 000 FCFA", date: "Janvier 2024" },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Impôts</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Employé</th>
            <th className="border p-3">Montant</th>
            <th className="border p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {impots.map((impot, index) => (
            <tr key={index} className="border">
              <td className="border p-3">{impot.employe}</td>
              <td className="border p-3">{impot.montant}</td>
              <td className="border p-3">{impot.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImpotsContent;
