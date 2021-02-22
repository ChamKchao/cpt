import React, { useContext, useEffect, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import parse from "html-react-parser";

import RfAntennaDataSheet from "../rf_antenna/RfAntennaDataSheet";

import { typeset } from "../../utilities/MathJaxUtil";

import styles from "./StudiesDetailPage.module.scss";

import { IStudies } from "./Studies";
import { StudiesContext } from "../../DataContext";
import { visitFunctionBody } from "typescript";

type StudiesDetailPageParams = {
  id?: string;
};

type StudiesDetailPageProp = {
  styleOptions: React.CSSProperties;
};

const RfAntennaDataSheetNavLink = (antennaId: number, label: string) => {
  return;
  <NavLink to={`/RfAntennaDetailPage/${antennaId}`}>{label}</NavLink>;
};

const StudiesDetailPage = ({ styleOptions }: StudiesDetailPageProp) => {
  let { id } = useParams<StudiesDetailPageParams>();
  const allStudies: IStudies[] = useContext(StudiesContext);

  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    typeset(() => divRef.current!);
  }, [id]);

  const studies = allStudies.find((e) => e.id === id) as IStudies;

  return (
    <div className={styles.Container} style={styleOptions}>
      <div className={styles.Header}>
        <div className={styles.Title}> {studies.name} </div>
        <div className={styles.Sponsor}> {studies.sponsor} </div>
      </div>
      <div className={styles.Abstract}>{parse(studies.abstract as string)}</div>
      <div className={styles.Body}>
        {studies.body?.map((line) => parse(line))}
      </div>
    </div>
  );
};

export default StudiesDetailPage;
