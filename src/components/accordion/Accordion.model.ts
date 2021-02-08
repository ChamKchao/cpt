import React from "react";

export interface AccordionItemModel {
  group: string;
  areas: string[];
}

export interface AccordionModel {
  header: string;
  resources: AccordionItemModel[];
  styleOptions?: React.CSSProperties;
}
