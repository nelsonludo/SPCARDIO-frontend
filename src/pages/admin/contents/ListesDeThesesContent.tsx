const THESES = [
  {
    id: 1,
    title: "Étude sur l'IRM cardiaque",
    author: "Dr. Paul Lambert",
    fileUrl: "/docs/these_1.pdf",
  },
  {
    id: 2,
    title: "Analyse des radiographies pulmonaires",
    author: "Dr. Sophie Bernard",
    fileUrl: "/docs/these_2.pdf",
  },
];

const ListesThesesContent = () => {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        🎓 Listes de Thèses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {THESES.map((these) => (
          <div
            key={these.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <h2 className="text-lg font-semibold mb-2">{these.title}</h2>
            <p className="text-gray-600 text-sm mb-4">
              Auteur : {these.author}
            </p>
            <div className="mt-auto">
              <a
                href={these.fileUrl}
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

export default ListesThesesContent;
