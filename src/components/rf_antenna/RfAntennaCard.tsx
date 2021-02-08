import React, { useMemo } from "react";

import { useTable } from "react-table";

import styles from "./RfAntennaCard.module.scss";

import { IRfAntennaModel } from "./RfAntennaModel";
import { AntennaType } from "../helpers/HardwareHelper";

type RfAntennaCardProps = {
  antenna: IRfAntennaModel;
};

interface specRow {
  metric: string;
  unit: string;
  spec: string;
}
const RfAntennaCard = ({ antenna }: RfAntennaCardProps) => {
  // console.log("URL", process.env.PUBLIC_URL);
  // console.log("eNV", process.env.PUBLIC_eNV);

  return (
    <div className={styles.Container}>
      <img
        className={styles.Image}
        // className={styles.group_item_image}
        // src={`${process.env.PUBLIC_URL}/assets/images/chinese-sesame-bread.jpg`}
        src={
          require(`../../images/rf_antennas/${antenna.imageFileName}`).default
        }
        alt="Missing/Unavailable"
      />
      <div className={styles.Info}>
        {/* {(() => {
          switch (antenna.type) {
            case AntennaType.PARABOLIC:
              return <p>parabolic</p>;
              break;
            case AntennaType.PATCH:
              return <p>patch</p>;
              break;
            default:
              return;
              break;
          }
        })()} */}
        <div className={styles.NameAndOEM}>
          {antenna.name} <span className={styles.RegularText}>by</span>{" "}
          {antenna.oem}
        </div>
        <div className={styles.Description}>{antenna.description}</div>
        <table className={styles.table}>
          <tr>
            <th>Metric</th>
            <th>Unit</th>
            <th>Specification</th>
          </tr>
          {antenna.stowedDimension && (
            <tr>
              <td>Stowed Size</td>
              <td>cm^3</td>
              <td>
                {antenna.stowedDimension.widthInCm}x
                {antenna.stowedDimension.lengthInCm}x
                {antenna.stowedDimension.heightInCm}
              </td>
            </tr>
          )}
          {antenna.apertureInCm && (
            <tr>
              <td>Deployed Aperture</td>
              <td>cm</td>
              <td>{antenna.apertureInCm}</td>
            </tr>
          )}
          {antenna.gainIndB && (
            <tr>
              <td>Gain (@ {antenna.gainAtFrequencyInGHz} GHz)</td>
              <td>dB</td>
              <td>{antenna.gainIndB}</td>
            </tr>
          )}
          {antenna.band && (
            <tr>
              <td>Band</td>
              <td> </td>
              <td>{antenna.band}</td>
            </tr>
          )}
          {antenna.massInKg && (
            <tr>
              <td>Mass</td>
              <td>kg</td>
              <td>{antenna.massInKg}</td>
            </tr>
          )}
          {antenna.outpoutPowerInWatt && (
            <tr>
              <td>RF Output Power</td>
              <td>Watt</td>
              <td>{antenna.outpoutPowerInWatt}</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

export default RfAntennaCard;
