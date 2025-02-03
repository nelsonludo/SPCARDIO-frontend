import React from "react";
import { FaSadTear } from "react-icons/fa";

type ProgrammesGridPropsType = {
  images: string[];
};

const ProgrammesGrid: React.FC<ProgrammesGridPropsType> = ({ images }) => {
  return (
    <div className="m-6 p-8">
      {images.length !== 0 ? (
        images.map((image) => (
          <img src={image} alt={"program"} className="rounded-2xl m-3 w-full" />
        ))
      ) : (
        <div className="flex items-center flex-col rounded-2xl bg-white p-6 drop-shadow-md">
          <span className="text-2xl font-bold">Programme Non Disponible</span>
          <FaSadTear className="text-5xl" />
        </div>
      )}
    </div>
  );
};

export default ProgrammesGrid;
