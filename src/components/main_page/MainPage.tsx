import React, { useEffect, useRef, useContext } from "react";

import { useParams } from "react-router-dom";

import styles from "./MainPage.module.scss";

import RfAntennaPage from "../rf_antenna/RfAntennaPage";

import LinkBudgetPage from "../link_budget/LinkBudgetPage";
import StudiesPage from "../studies/StudiesPage";

type MainPageProps = {
  styleOptions: React.CSSProperties;
};

const MainPage = ({ styleOptions }: MainPageProps) => {
  let { group, area } = useParams<MainPageParams>();

  type MainPageParams = {
    group?: string | undefined;
    area?: string;
  };
  return (
    <div className={styles.Container} style={styleOptions}>
      {area === "RF Antenna" && <RfAntennaPage />}
      {area === "Link Budget" && <LinkBudgetPage />}
      {group === "Studies" && <StudiesPage leadOrg={area as string} />}
    </div>
  );
};

export default MainPage;
