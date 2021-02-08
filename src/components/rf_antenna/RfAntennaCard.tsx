import React from "react";
import { AntennaType } from "../helpers/HardwareHelper";

import styles from "./RfAntennaCard.module.scss";

import { IRfAntennaModel } from "./RfAntennaModel";

type RfAntennaCardProps = {
  antenna: IRfAntennaModel;
};
const RfAntennaCard = ({ antenna }: RfAntennaCardProps) => {
  console.log("URL", process.env.PUBLIC_URL);
  console.log("eNV", process.env.PUBLIC_eNV);

  return (
    <div className={styles.Container}>
      {antenna.name}
      <img
        // className={styles.group_item_image}
        // src={`${process.env.PUBLIC_URL}/assets/images/chinese-sesame-bread.jpg`}
        src={
          require(`../../images/rf_antennas/${antenna.imageFileName}`).default
        }
        width={200}
        alt="Missing/Unavailable"
      />
      {(() => {
        switch (antenna.type) {
          case AntennaType.PARABOLIC:
            return <p>parabolic</p>;
            break;
          case AntennaType.PATCH:
            return <p>patch</p>;
            break;
          default:
            return;
            break;
        }
      })()}
    </div>
  );
};

export default RfAntennaCard;
