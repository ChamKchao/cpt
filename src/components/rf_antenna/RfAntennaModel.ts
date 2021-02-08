import { AntennaType, IDimension } from "../helpers/HardwareHelper";

export interface IRfAntennaModel {
  oem: string;
  name: string;
  type?: AntennaType;
  description?: string;
  apertureInCm?: number;
  gainIndB?: number;
  gainAtFrequencyInGHz?: number;
  band?: string;
  lowerFrequencyInGHz?: number;
  upperFrequencyInGHz?: number;
  massInKg?: number;
  stowedDimension?: IDimension;
  outpoutPowerInWatt?: number;
  costInThousand?: number;
  imageFileName?: string;
  notes?: string;
}
