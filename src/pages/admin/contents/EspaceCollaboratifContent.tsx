import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

type ForumPost = {
  id: number;
  author: string;
  content: string;
  date: string;
};

const INITIAL_POSTS: ForumPost[] = [
  {
    id: 1,
    author: "Dr. Pierre Martin",
    content: "Quels sont les derniers développements en imagerie 3D ?",
    date: "5 février 2025",
  },
  {
    id: 2,
    author: "Alice Dupont",
    content: "Quel logiciel utilisez-vous pour l'analyse des radiographies ?",
    date: "3 février 2025",
  },
];

const DiscussionForum = () => {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      const newForumPost: ForumPost = {
        id: posts.length + 1,
        author: "Vous",
        content: newPost,
        date: "Aujourd'hui",
      };
      setPosts([newForumPost, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        💬 Forum de Discussion
      </h1>

      <div className="mb-4 flex items-center border p-3 rounded-lg shadow-sm bg-white">
        <MessageCircle className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Partagez une question ou une idée..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full border-none focus:outline-none"
        />
        <button
          onClick={handlePostSubmit}
          className="ml-3 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
        >
          <Send size={16} />
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold">{post.author}</p>
            <p className="text-gray-700">{post.content}</p>
            <p className="text-gray-400 text-sm mt-2">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;

import { FileText, UploadCloud } from "lucide-react";

type SharedFile = {
  id: number;
  name: string;
  uploadedBy: string;
  fileUrl: string;
};

const SHARED_FILES: SharedFile[] = [
  {
    id: 1,
    name: "Guide IRM Avancée.pdf",
    uploadedBy: "Dr. Sophie Bernard",
    fileUrl: "/docs/guide_irm.pdf",
  },
  {
    id: 2,
    name: "Comparaison IA et Radiologue.docx",
    uploadedBy: "Alice Martin",
    fileUrl: "/docs/ia_vs_radiologue.docx",
  },
];

export const SharedDocuments = () => {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        📂 Documents Partagés
      </h1>

      <div className="mb-4 flex items-center bg-white p-3 rounded-lg shadow-sm">
        <UploadCloud className="text-gray-400 mr-3" />
        <input type="file" className="hidden" id="fileUpload" />
        <label
          htmlFor="fileUpload"
          className="cursor-pointer text-blue-500 hover:underline"
        >
          Télécharger un fichier
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SHARED_FILES.map((file) => (
          <div
            key={file.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <div className="flex items-center mb-2">
              <FileText className="text-blue-500 mr-3" size={24} />
              <h2 className="text-lg font-semibold">{file.name}</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Ajouté par : {file.uploadedBy}
            </p>
            <div className="mt-auto">
              <a
                href={file.fileUrl}
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

import { Calendar } from "lucide-react";

type EventType = {
  id: number;
  title: string;
  date: string;
  description: string;
};

const EVENTS: EventType[] = [
  {
    id: 1,
    title: "Webinaire sur l'IA en radiologie",
    date: "10 février 2025",
    description:
      "Discussion sur l'impact de l'intelligence artificielle en radiologie.",
  },
  {
    id: 2,
    title: "Conférence IRM Avancée",
    date: "15 mars 2025",
    description:
      "Approfondissement sur les techniques d'imagerie par résonance magnétique.",
  },
];

export const UpcomingEvents = () => {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        📅 Événements à Venir
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {EVENTS.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Calendar className="text-blue-500 mr-3" size={24} />
              <h2 className="text-lg font-semibold">{event.title}</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">{event.description}</p>
            <p className="text-gray-400 text-sm font-medium">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
