import { RiMicroscopeLine } from "react-icons/ri";

import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import ServicesCard from "../../components/cards/ServicesCard";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 bg-emerald-300">
      <div className=" flex flex-col items-center justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-center">
          Conditions d’entrée
          </h1>
          <p className=" mt-2 text-center lg:text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Lab Test" />
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon3} title="Heart Health" />
      </div>
    </div>
  );
};

export default Services;
