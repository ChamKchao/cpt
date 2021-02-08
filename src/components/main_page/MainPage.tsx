import React, { useEffect, useRef, useContext } from "react";

import { useParams } from "react-router-dom";

import styles from "./MainPage.module.scss";

import RfAntennaPage from "../rf_antenna/RfAntennaPage";

type TestPageProps = {
  styleOptions: React.CSSProperties;
};

const MainPage = ({ styleOptions }: TestPageProps) => {
  let { group, area } = useParams<MainPageParams>();

  type MainPageParams = {
    group?: string | undefined;
    area?: string;
  };
  return (
    <div className={styles.Container} style={styleOptions}>
      {area === "RF Antenna" && <RfAntennaPage />}
    </div>
  );
};

export default MainPage;
