import React from "react";

import { cloneDeep } from "lodash";

import { IDimension, AntennaType } from "./components/helpers/HardwareHelper";

import cptResourcesJson from "./data/cpt_resources.json";
import { ICptResource } from "./components/resource_panel/CptResourceModel";

import rfAntennaJson from "./data/rf_antennas.json";
import { IRfAntennaModel } from "./components/rf_antenna/RfAntennaModel";

const cptResources: ICptResource[] = cloneDeep(
  cptResourcesJson as ICptResource[]
);
const CptResourcesContext = React.createContext(cptResources);

const rfAntennas: IRfAntennaModel[] = cloneDeep(
  rfAntennaJson as IRfAntennaModel[]
);
const RfAntennaContext = React.createContext(rfAntennas);

export { CptResourcesContext, RfAntennaContext };
