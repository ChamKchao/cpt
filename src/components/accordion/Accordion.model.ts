import React from "react";
import { ICptResource } from "../resource_panel/CptResourceModel";

export interface AccordionItemModel {
  group: string;
  areas: String[];
}

export interface AccordionModel {
  header: string;
  resources: AccordionItemModel[];
  styleOptions?: React.CSSProperties;
}
