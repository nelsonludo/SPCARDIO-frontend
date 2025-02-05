import { useState } from "react";
import { FileText, Download, Search } from "lucide-react";

type ReportType = {
  id: number;
  title: string;
  category: string;
  description: string;
  fileUrl: string;
};

const REPORTS: ReportType[] = [
  {
    id: 1,
    title: "Rapport Annuel 2023",
    category: "Annuel",
    description: "Rapport administratif et financier de l'année 2023.",
    fileUrl: "/docs/rapport_annuel_2023.pdf",
  },
  {
    id: 2,
    title: "Budget 2024",
    category: "Budget",
    description: "Budget prévisionnel pour l'année 2024.",
    fileUrl: "/docs/budget_2024.pdf",
  },
];

const CATEGORIES = ["All", "Annuel", "Budget", "Audit"];

const RapportsAdministratifContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredReports = REPORTS.filter((report) => {
    return (
      (selectedCategory === "All" || report.category === selectedCategory) &&
      report.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        📑 Rapports Administratifs et Financiers
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher un rapport..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <div className="flex items-center mb-2">
              <FileText className="text-blue-500 mr-3" size={24} />
              <h2 className="text-lg font-semibold">{report.title}</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">{report.description}</p>
            <div className="mt-auto">
              <a
                href={report.fileUrl}
                download
                className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                <Download size={16} className="mr-2" /> Télécharger
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RapportsAdministratifContent;
