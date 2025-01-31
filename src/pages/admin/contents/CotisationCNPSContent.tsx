const CotisationCNPSContent: React.FC = () => {
  const cotisations = [
    { employe: "Jean Dupont", montant: "50 000 FCFA", date: "Janvier 2024" },
    { employe: "Marie Curie", montant: "60 000 FCFA", date: "Janvier 2024" },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Cotisations CNPS</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Employé</th>
            <th className="border p-3">Montant</th>
            <th className="border p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {cotisations.map((cotis, index) => (
            <tr key={index} className="border">
              <td className="border p-3">{cotis.employe}</td>
              <td className="border p-3">{cotis.montant}</td>
              <td className="border p-3">{cotis.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CotisationCNPSContent;
