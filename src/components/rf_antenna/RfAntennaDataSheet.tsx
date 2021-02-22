import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

import StudiesDetailPage from "../studies/StudiesDetailPage";

import styles from "./RfAntennaDataSheet.module.scss";

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
    const copyText =
      `Name, Gain (in dB), Band, Mass (kg), Stowed Size (cm^3)\n` +
      `${antenna.name} ${antenna.oem ? "by " + antenna.oem : ""}, ` +
      `${antenna.gainIndB ? antenna.gainIndB : "unavailable"},  ` +
      `${antenna.primaryBand ? antenna.primaryBand : "unavailable"}, ` +
      `${antenna.massInKg ? antenna.massInKg : "unavailable"},` +
      `${
        antenna.stowedDimension
          ? antenna.stowedDimension.widthInCm +
            " by " +
            antenna.stowedDimension.lengthInCm +
            " by " +
            antenna.stowedDimension.heightInCm
          : "unavailable"
      }`;

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
          <tbody>
            <tr>
              {antenna.resourceLink !== undefined ? (
                <th>
                  <a
                    style={{ display: "table-cell", color: "white" }}
                    href={antenna.resourceLink}
                    target="_blank"
                  >
                    Metric
                  </a>
                </th>
              ) : (
                <th>Metric</th>
              )}

              <th>Unit</th>
              <th>
                <div style={{ float: "left" }}>Specification </div>
                <button
                  onClick={copyToClipboard}
                  className={styles.ExcelButton}
                >
                  <svg viewBox="0 0 88.030066 86" width="15px" fill="#207245">
                    <path d="M 57.550781 0 C 38.375781 3.3875 19.1875 6.6742186 0 10.011719 L 0 97.5 C 19.075 100.8375 38.162891 104.0375 57.212891 107.5 L 64.974609 107.5 L 64.974609 96.25 C 77.937109 96.225 90.899608 96.2875 103.84961 96.25 C 105.93711 96.1625 109.0625 96.1 109.5625 93.5 C 110.325 89.9125 109.92578 86.2 109.98828 82.5625 C 109.97578 60.875 109.94922 39.188281 110.01172 17.488281 C 109.92422 15.363281 110.07461 13.012109 108.78711 11.162109 C 106.94961 9.8996098 104.62422 10.050391 102.51172 9.9628906 C 89.999218 10.025391 77.487109 10 64.974609 10 L 64.974609 0 L 57.550781 0 z M 64.974609 13.75 L 106.22461 13.75 L 106.22461 92.5 L 64.974609 92.5 L 64.974609 85 L 74.974609 85 L 74.974609 76.25 L 64.974609 76.25 L 64.974609 71.25 L 74.974609 71.25 L 74.974609 62.5 L 64.974609 62.5 L 64.974609 57.5 L 74.974609 57.5 L 74.974609 48.75 L 64.974609 48.75 L 64.974609 43.75 L 74.974609 43.75 L 74.974609 35 L 64.974609 35 L 64.974609 30 L 74.974609 30 L 74.974609 21.25 L 64.974609 21.25 L 64.974609 13.75 z M 79.974609 21.25 L 79.974609 30 L 97.474609 30 L 97.474609 21.25 L 79.974609 21.25 z M 45.525391 32.449219 C 42.187891 39.286719 38.8375 46.125 35.4375 52.9375 C 38.875 59.9375 42.387891 66.886719 45.837891 73.886719 C 42.825391 73.711719 39.825 73.525 36.8125 73.3125 C 34.6875 68.1 32.099219 63.063281 30.574219 57.613281 C 28.874219 62.688281 26.45 67.474219 24.5 72.449219 C 21.7625 72.411719 19.024609 72.3 16.287109 72.1875 C 19.499609 65.9 22.599609 59.5625 25.912109 53.3125 C 23.099609 46.875 20.013281 40.562109 17.113281 34.162109 C 19.863281 33.999609 22.613281 33.8375 25.363281 33.6875 C 27.225781 38.575 29.263281 43.399609 30.800781 48.412109 C 32.450781 43.099609 34.912891 38.100391 37.025391 32.962891 C 39.850391 32.762891 42.687891 32.586719 45.525391 32.449219 z M 79.974609 35 L 79.974609 43.75 L 97.474609 43.75 L 97.474609 35 L 79.974609 35 z M 79.974609 48.75 L 79.974609 57.5 L 97.474609 57.5 L 97.474609 48.75 L 79.974609 48.75 z M 79.974609 62.5 L 79.974609 71.25 L 97.474609 71.25 L 97.474609 62.5 L 79.974609 62.5 z M 79.974609 76.25 L 79.974609 85 L 97.474609 85 L 97.474609 76.25 L 79.974609 76.25 z " />
                  </svg>
                </button>
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
            {antenna.studies !== undefined && (
              <tr>
                <td>Programs/Studies</td>
                <td> </td>
                <td>
                  {antenna.studies.map((studies, index) => (
                    <NavLink
                      key={index}
                      to={`/StudiesDetailPage/${studies.navLinkId}`}
                      style={{
                        margin: "0px 5px 0px 0px",
                      }}
                    >
                      {studies.name}
                    </NavLink>
                  ))}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RfAntennaCard;
