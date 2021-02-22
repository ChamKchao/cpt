import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { isTemplateExpression } from "typescript";
import { StudiesContext } from "../../DataContext";
import { IStudies } from "./Studies";

import styles from "./Studies.module.scss";
import StudiesCard from "./StudiesCard";

type StudiesPageParams = {
  id?: string;
};

type StudiesPageProp = {
  leadOrg: string;
};

const StudiesPage = ({ leadOrg }: StudiesPageProp) => {
  const studies: IStudies[] = useContext(StudiesContext);
  const filterStudies = studies.filter((e) => e.leadOrg === leadOrg);
  return (
    <div className={styles.Container}>
      {filterStudies.map((studiesItem, index) => (
        <NavLink
          key={index}
          to={`/StudiesDetailPage/${studiesItem.id}`}
          style={{ textDecoration: "None", color: "black" }}
        >
          <StudiesCard studies={studiesItem} />
        </NavLink>
      ))}
    </div>
  );
};

export default StudiesPage;
