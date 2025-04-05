import { Loader } from "lucide-react";

interface SmallLoaderProps {
  modal?: boolean;
}

const SmallLoader: React.FC<SmallLoaderProps> = ({ modal }) => {
  return (
    <div
      className={`text-gray-500 hover:text-gray-700 w-full ${
        !modal && "flex justify-center items-center h-full"
      }`}
    >
      <Loader className="animate-spin" />
    </div>
  );
};

export default SmallLoader;
