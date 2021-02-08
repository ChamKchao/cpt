import React, { useContext } from "react";

import { RfAntennaContext } from "../../DataContext";
import RfAntennaCard from "./RfAntennaCard";
import { IRfAntennaModel } from "./RfAntennaModel";

const RfAntennaPage = () => {
  const rfAntennas: IRfAntennaModel[] = useContext(RfAntennaContext);
  return (
    <div>
      {rfAntennas.map((antenna, index) => (
        <RfAntennaCard key={index} antenna={antenna} />
      ))}
    </div>
  );
};

export default RfAntennaPage;
