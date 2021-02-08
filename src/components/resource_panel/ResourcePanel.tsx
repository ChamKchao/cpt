import React from "react";

import styles from "./ResourcePanel.module.scss";

import Accordion from "../accordion/Accordion";
import { AccordionModel } from "../accordion/Accordion.model";

type ResourcePanelProps = {
  divRef: React.RefObject<HTMLDivElement>;
  styleOptions: React.CSSProperties;
  resourceInfo: AccordionModel;
};

const ResourcePanel = ({
  divRef,
  styleOptions,
  resourceInfo,
}: ResourcePanelProps) => {
  return (
    <div ref={divRef} className={styles.Container} style={styleOptions}>
      <div className="App">
        <div>
          <Accordion
            header={resourceInfo.header}
            resources={resourceInfo.resources}
            // styleOptions={{ width: "200px" }}
            styleOptions={{}}
          />
        </div>
      </div>
    </div>
  );
};

export default ResourcePanel;
