const DossierDuPersonnelContent: React.FC = () => {
  const documents = [
    "Carte d'identité",
    "Contrat de travail",
    "Diplômes et certifications",
    "Fiche de paie",
    "Attestation de travail",
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Dossier du Personnel</h2>
      <p className="mb-2">Liste des pièces à numériser :</p>
      <ul className="list-disc list-inside">
        {documents.map((doc, index) => (
          <li key={index}>{doc}</li>
        ))}
      </ul>
    </div>
  );
};

export default DossierDuPersonnelContent;
