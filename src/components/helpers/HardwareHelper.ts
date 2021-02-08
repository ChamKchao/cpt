export interface IDimension {
  width: number;
  length: number;
  height: number;
}

export enum AntennaType {
  OMNI = "OMNI",
  YAGI = "YAGI",
  PARABOLIC = "PARABOLIC",
  PATCH = "PATCH",
  DIPOLE = "DIPOLE",
}
