const CritereDeNotationDuPersonnelContent: React.FC = () => {
  const criteres = [
    { critere: "Ponctualité", note: 8 },
    { critere: "Compétence", note: 9 },
    { critere: "Esprit d'équipe", note: 7 },
    { critere: "Engagement", note: 8 },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Critères de Notation du Personnel
      </h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Critère</th>
            <th className="border p-3">Note (sur 10)</th>
          </tr>
        </thead>
        <tbody>
          {criteres.map((critere, index) => (
            <tr key={index} className="border">
              <td className="border p-3">{critere.critere}</td>
              <td className="border p-3">{critere.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CritereDeNotationDuPersonnelContent;
