import { AntennaType, IDimension } from "../helpers/HardwareHelper";

export interface IRfAntennaModel {
  name: string;
  type?: AntennaType;
  description?: string;
  diameterInMeter?: number;
  gainIndB?: number;
  band?: string;
  lowerFrequencyInGHz?: number;
  upperFrequencyInGHz?: number;
  stowedDimension?: IDimension;
  imageFileName?: string;
}
