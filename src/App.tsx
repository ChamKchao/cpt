import React, { useReducer, useEffect, useRef, useContext } from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.scss";

import * as appReducer from "./AppReducer";

import { CptResourcesContext } from "./DataContext";
import { ICptResource } from "./components/resource_panel/CptResourceModel";

import Header from "./components/header/HeaderPage";
import HomePage from "./components/home/HomePage";
import ResourcePanel from "./components/resource_panel/ResourcePanel";
import MainPage from "./components/main_page/MainPage";
import RfAntennaPage from "./components/rf_antenna/RfAntennaPage";
import RfAntennaDetailPage from "./components/rf_antenna/RfAntennaDetailPage";
import {
  AccordionItemModel,
  AccordionModel,
} from "./components/accordion/Accordion.model";

const WAIT_TIMEOUT: number = 1000;

const App = () => {
  const [state, dispatch] = useReducer(
    appReducer.appGridReducer,
    {
      isShown: true,
      headerPanelHeight: parseInt(styles.headerPanelHeight),
      defaultResourcePanelWidth: parseInt(styles.resourcePanelWidth),
      resourcePanelWidth: parseInt(styles.resourcePanelWidht),
      grabWidth: parseInt(styles.grabWidth),
      pseudoWidth: parseInt(styles.pseudoWidth),
      arrowClass: styles.ArrowRotate,
      resourcePanelWidthStyle: `${parseInt(styles.resourcePanelWidht)}px`,
      columnStyle: appReducer.gridColumnStyle(
        parseInt(styles.leftPanelWidht),
        parseInt(styles.grabWidth),
        parseInt(styles.pseudoWidth)
      ),
      rowStyle: appReducer.gridRowStyle(
        parseInt(styles.headerPanelHeight),
        parseInt(styles.pseudoWidth)
      ),
    },
    appReducer.appGridInit
  );

  useEffect(() => {
    // Either getting panel with from _globas.scss export
    // dispatch({ type: INITIALIZER, value: parseInt(styles.leftPanelWidth) });

    // Or getting it from useRef linking to div in LeftPanel
    // to make sure it is the post mounted value
    dispatch({
      type: appReducer.INITIALIZER,
      value: resourcePanelRef.current
        ? resourcePanelRef.current.offsetWidth
        : 0,
    });
  }, []);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resizeListener = () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(
        () => dispatch({ type: appReducer.RESIZE }),
        WAIT_TIMEOUT
      );
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  });

  let resourcePanelRef = useRef<HTMLDivElement>(null);

  const cptResources: ICptResource[] = useContext(CptResourcesContext);

  let groupSet: Set<string> = new Set();
  cptResources.forEach((resource) => {
    groupSet.add(resource.group);
  });

  let resourceMap: Map<string, string[]> = new Map<string, string[]>();
  groupSet.forEach((group) => {
    resourceMap.set(group, []);
    cptResources.forEach((resource) => {
      if (resource.group == group) {
        resourceMap.get(group)?.push(resource.area);
      }
    });
  });

  let resourceInfo: AccordionModel = {
    header: "Resources",
    resources: [],
  };

  resourceMap.forEach((areas: string[], group: string) => {
    if (group.length > 0) {
      let item: AccordionItemModel = {
        group: group,
        areas: [],
      };
      areas.forEach((area) => {
        item.areas.push(area);
      });
      resourceInfo.resources.push(item);
    }
  });

  console.log("PUBLIC_ENV", process.env.PUBLIC_ENV);

  return (
    <Router>
      <div
        className={styles.AppContainer}
        style={
          state.columnStyle ? { gridTemplateColumns: state.columnStyle } : {}
        }
      >
        <Header styleOptions={{ gridRow: 1, gridColumn: "1 /span 4" }} />
        <ResourcePanel
          divRef={resourcePanelRef}
          styleOptions={{
            gridRow: 2,
            gridColumn: 1,
            width: `${state.resourcePanelWidthStyle}`,
          }}
          resourceInfo={resourceInfo}
        />
        <div
          className={styles.LeftGrabContainer}
          onClick={() => {
            dispatch({ type: appReducer.TOGGLE });
          }}
        >
          <div className={`${state.arrowClass}`}>
            <svg
              viewBox="0 0 8 20"
              width="8px"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M 0,0 V 20 L 8,10 Z"></path>
            </svg>
          </div>
        </div>
        <Switch>
          <Route path="/MainPage/:group/:area" exact>
            <MainPage styleOptions={{ gridRow: 2, gridColumn: 3 }} />
          </Route>
          <Route path="/RfAntennaDetailPage/:id" exact>
            <RfAntennaDetailPage styleOptions={{ gridRow: 2, gridColumn: 3 }} />
          </Route>
          <Route path="/" exact>
            <HomePage styleOptions={{ gridRow: 2, gridColumn: 3 }} />
          </Route>
        </Switch>
        {/* <div className={styles.BottomPanel}>
          <div>Bottom Panel</div>
        </div> */}
        <div className={styles.RightMostPanel}></div>
      </div>
    </Router>
  );
};

export default App;
