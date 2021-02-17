export interface IDimension {
  widthInCm: number;
  lengthInCm: number;
  heightInCm: number;
}

export enum AntennaType {
  OMNI = "OMNI",
  YAGI = "YAGI",
  PARABOLIC = "PARABOLIC",
  PATCH = "PATCH",
  DIPOLE = "DIPOLE",
  MESH = "MESH",
  PHASED_ARRAY = "PHASED_ARRAY",
}
