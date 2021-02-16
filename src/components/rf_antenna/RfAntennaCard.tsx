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

  const copyToClipboard = () => {
    const copyText = `Name, gain (in dB), Band\n ${antenna.name} by ${antenna.oem}, ${antenna.gainIndB}, ${antenna.primaryBand}`;
    navigator.clipboard.writeText(copyText);
  };

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
          <colgroup>
            <col />
            <col className={styles.UnitColumn} />
            <col className={styles.SpecColumn} />
          </colgroup>
          <tr>
            {antenna.resourceLink !== undefined ? (
              <th>
                <a
                  style={{ display: "table-cell", color: "white" }}
                  href={antenna.resourceLink}
                  target="_blank"
                >
                  Metric
                </a>{" "}
              </th>
            ) : (
              <th>Metric</th>
            )}

            <th>Unit</th>
            <th>
              Specification <button onClick={copyToClipboard}>Copy</button>
            </th>
          </tr>
          {antenna.stowedDimension !== undefined && (
            <tr>
              <td>Stowed Size</td>
              <td>
                cm<sup>3</sup>
              </td>
              <td>
                {antenna.stowedDimension.widthInCm} &times;&nbsp;
                {antenna.stowedDimension.lengthInCm} &times;&nbsp;
                {antenna.stowedDimension.heightInCm}
              </td>
            </tr>
          )}
          {antenna.apertureInCm !== undefined && (
            <tr>
              <td>Deployed Aperture</td>
              <td>cm</td>
              <td>{antenna.apertureInCm}</td>
            </tr>
          )}
          {antenna.gainIndB !== undefined && (
            <tr>
              {/* <td>Gain (@ {antenna.gainAtFrequencyInGHz} GHz)</td> */}
              <td>
                Gain{" "}
                {antenna.gainAtFrequencyInGHz !== undefined ? (
                  <span>(@ {antenna.gainAtFrequencyInGHz} GHz) </span>
                ) : (
                  <span>(over operational bandwidth)</span>
                )}
              </td>
              <td>dB</td>
              <td>{antenna.gainIndB}</td>
            </tr>
          )}
          {antenna.primaryBand !== undefined && (
            <tr>
              <td>Band</td>
              <td> </td>
              <td>
                {antenna.primaryBand}
                {antenna.secondaryBand !== undefined && (
                  <span>, {antenna.secondaryBand}</span>
                )}
              </td>
            </tr>
          )}
          {antenna.massInKg !== undefined && (
            <tr>
              <td>Mass</td>
              <td>kg</td>
              <td>{antenna.massInKg}</td>
            </tr>
          )}
          {antenna.outpoutPowerInWatt !== undefined && (
            <tr>
              <td>RF Output Power</td>
              <td>Watt</td>
              <td>{antenna.outpoutPowerInWatt}</td>
            </tr>
          )}
          {antenna.costInThousand !== undefined && (
            <tr>
              <td>Cost</td>
              <td>$ K</td>
              <td>{antenna.costInThousand}</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

export default RfAntennaCard;
