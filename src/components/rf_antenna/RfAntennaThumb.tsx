import React from "react";

import styles from "./RfAntennaThumb.module.scss";

import { IRfAntennaModel } from "./RfAntennaModel";

type RfAntennaThumbProps = {
  antenna: IRfAntennaModel;
};

const RfAntennaThumb = ({ antenna }: RfAntennaThumbProps) => {
  const borderStyle = (): React.CSSProperties => {
    switch (antenna.primaryBand) {
      case "Ka":
        return { backgroundColor: styles.ka_band_color };
      case "Ku":
        return { backgroundColor: styles.ku_band_color };
      case "X":
        return { backgroundColor: styles.x_band_color };
      case "S":
        return { backgroundColor: styles.s_band_color };
      case "C":
        return { backgroundColor: styles.c_band_color };
      case "UHF":
        return { backgroundColor: styles.uhf_band_color };
      default:
        return { backgroundColor: "#000000" };
        break;
    }
  };
  return (
    <div className={styles.Container} style={borderStyle()}>
      <img
        className={styles.Image}
        src={
          require(`../../images/rf_antennas/${antenna.imageFileName}`).default
        }
        alt="Missing/Unavailable"
      />
      <div className={styles.NameOverlay}>{antenna.name}</div>
      <div className={styles.BandOverlay}>{antenna.primaryBand}</div>
      <div className={styles.GainOverlay}>{antenna.gainIndB} dB</div>
    </div>
  );
};

export default RfAntennaThumb;
