import { AntennaType, IDimension } from "../helpers/HardwareHelper";

export interface studiesLink {
  name: string;
  navLinkId: string;
}

export interface IRfAntennaModel {
  id: string;
  oem: string;
  name: string;
  type?: AntennaType;
  description?: string;
  apertureInCm?: number;
  gainIndB?: number;
  gainAtFrequencyInGHz?: number;
  primaryBand?: string;
  secondaryBand?: string;
  lowerFrequencyInGHz?: number;
  upperFrequencyInGHz?: number;
  massInKg?: number;
  stowedDimension?: IDimension;
  outpoutPowerInWatt?: number;
  costInThousand?: number;
  imageFileName?: string;
  resourceLink?: string;
  notes?: string;
  studies?: studiesLink[];
  programs?: string;
}
