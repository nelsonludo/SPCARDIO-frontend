import { Loader } from "lucide-react";

const GlobalLoading = () => {
  return (
    <div className="w-full h-full flex justify-center aligne-center">
      <Loader className="animate-spin w-2xl" />
    </div>
  );
};

export default GlobalLoading;
