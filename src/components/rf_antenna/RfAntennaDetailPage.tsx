import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";

import styles from "../main_page/MainPage.module.scss";

import { RfAntennaContext } from "../../DataContext";
// import RfAntennaCard from "./RfAntennaCard";
import RfAntennaDataSheet from "./RfAntennaDataSheet";
import RfAntennaThumb from "./RfAntennaThumb";
import { IRfAntennaModel } from "./RfAntennaModel";
import { AntennaType } from "../helpers/HardwareHelper";

type RfAntennaDetailPageParams = {
  id?: string;
};

type RfAntennaDetailPageProp = {
  styleOptions: React.CSSProperties;
};

const RfAntennaDetailPage = ({ styleOptions }: RfAntennaDetailPageProp) => {
  let { id } = useParams<RfAntennaDetailPageParams>();
  const rfAntennas: IRfAntennaModel[] = useContext(RfAntennaContext);

  const antenna = rfAntennas.find((e) => e.id === id) as IRfAntennaModel;

  return (
    <div className={styles.Container} style={styleOptions}>
      <RfAntennaDataSheet antenna={antenna} />
    </div>
  );
};

export default RfAntennaDetailPage;
