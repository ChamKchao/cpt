import React from "react";

import styles from "./HomePage.module.scss";

type HomePageProps = {
  styleOptions: React.CSSProperties;
};

const HomePage = ({ styleOptions }: HomePageProps) => {
  return (
    <div className={styles.Container} style={styleOptions}>
      <div className={styles.Message}>
        Initial attempt to gather all CPT knowledge in one place! This hub
        should contain data on SmallSat/CubeSat technologies and studies
        results.
      </div>

      <div className={styles.Disclaimer}>
        The content of this knowledge hub comes mostly from CPT studies.
      </div>
      <div className={styles.Disclaimer} style={{ fontWeight: "bold" }}>
        For more information contact Grace Wang.
      </div>
    </div>
  );
};

export default HomePage;
