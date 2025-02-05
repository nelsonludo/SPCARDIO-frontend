const MEMOIRES = [
  {
    id: 1,
    title: "Imagerie médicale et diagnostic précoce",
    author: "Jean Dupont",
    fileUrl: "/docs/memoire_1.pdf",
  },
  {
    id: 2,
    title: "L'impact de l'IA en radiologie",
    author: "Alice Martin",
    fileUrl: "/docs/memoire_2.pdf",
  },
];

const ListesMemoiresContent = () => {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        📜 Listes de Mémoires
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MEMOIRES.map((memoire) => (
          <div
            key={memoire.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <h2 className="text-lg font-semibold mb-2">{memoire.title}</h2>
            <p className="text-gray-600 text-sm mb-4">
              Auteur : {memoire.author}
            </p>
            <div className="mt-auto">
              <a
                href={memoire.fileUrl}
                download
                className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Télécharger
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListesMemoiresContent;
