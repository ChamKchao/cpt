import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import styles from "./RfAntenna.module.scss";

import { RfAntennaContext } from "../../DataContext";
import RfAntennaCard from "./RfAntennaCard";
import RfAntennaThumb from "./RfAntennaThumb";
import { IRfAntennaModel } from "./RfAntennaModel";
import { AntennaType } from "../helpers/HardwareHelper";

type ThumbItemProp = {
  antenna: IRfAntennaModel;
};

const ThumbItem = ({ antenna }: ThumbItemProp): JSX.Element => {
  return (
    <NavLink to={`/RfAntennaDetailPage/${antenna.id}`}>
      <RfAntennaThumb antenna={antenna} />
    </NavLink>
  );
};

const RfAntennaPage = () => {
  const rfAntennas: IRfAntennaModel[] = useContext(RfAntennaContext);

  let ka_children = rfAntennas.map((antenna, index) => {
    if (antenna.primaryBand === "Ka") {
      return <ThumbItem key={index} antenna={antenna} />;
    }
  });
  let ku_children = rfAntennas.map((antenna, index) => {
    if (antenna.primaryBand === "Ku") {
      return <ThumbItem key={index} antenna={antenna} />;
    }
  });
  let x_children = rfAntennas.map((antenna, index) => {
    if (antenna.primaryBand === "X") {
      return <ThumbItem key={index} antenna={antenna} />;
    }
  });
  let s_children = rfAntennas.map((antenna, index) => {
    if (antenna.primaryBand === "S") {
      return <ThumbItem key={index} antenna={antenna} />;
    }
  });
  let c_children = rfAntennas.map((antenna, index) => {
    if (antenna.primaryBand === "C") {
      return <ThumbItem key={index} antenna={antenna} />;
    }
  });
  let uhf_children = rfAntennas.map((antenna, index) => {
    if (antenna.primaryBand === "UHF") {
      return <ThumbItem key={index} antenna={antenna} />;
    }
  });

  return (
    <div className={styles.Container}>
      {/* {rfAntennas.map((antenna, index) => (
        // <RfAntennaCard key={index} antenna={antenna} />
        <RfAntennaThumb key={index} antenna={antenna} />
      ))} */}
      <div style={{ gridColumn: 1 }}>{ka_children}</div>
      <div style={{ gridColumn: 2 }}>{ku_children}</div>
      <div style={{ gridColumn: 3 }}>{x_children}</div>
      <div style={{ gridColumn: 4 }}>{s_children}</div>
      <div style={{ gridColumn: 5 }}>{c_children}</div>
      <div style={{ gridColumn: 6 }}>{uhf_children}</div>
    </div>
  );
};

export default RfAntennaPage;
