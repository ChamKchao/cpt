import React from "react";

import styles from "./Accordion.module.scss";

import { AccordionModel } from "./Accordion.model";
import AccordionItem from "./AccordionItem";

const Accordion = ({
  header,
  resources,
  styleOptions,
}: AccordionModel): JSX.Element => {
  return (
    <div className={styles.Container} style={styleOptions}>
      <div className={styles.Title}>
        <div className={styles.TitleContent}>{header}</div>
      </div>
      {resources.map((resource, index) => (
        <AccordionItem
          key={index}
          group={resource.group}
          areas={resource.areas}
        />
      ))}
    </div>
  );
};

export default Accordion;
