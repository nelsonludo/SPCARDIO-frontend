const RapportsContent: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Rapports</h2>
      <p>
        Suivez la programmation de la production des rapports et générez des
        rapports sur demande.
      </p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Générer un Rapport
      </button>
    </div>
  );
};

export default RapportsContent;
