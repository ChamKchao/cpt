import React from "react";
import parse from "html-react-parser";
import styles from "./StudiesCard.module.scss";

import { IStudies } from "./Studies";

type StudiesCardProps = {
  studies: IStudies;
};

const StudiesCard = ({ studies }: StudiesCardProps) => {
  const abstract = studies.abstract as string;

  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.Title}> {studies.name} </div>
        <div className={styles.Sponsor}> {studies.sponsor} </div>
      </div>
      <div className={styles.Abstract}>{parse(abstract)}</div>
    </div>
  );
};

export default StudiesCard;
