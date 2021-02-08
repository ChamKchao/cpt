import styles from "./App.module.scss";

export const TOGGLE = "TOGGLE";
type Toggle = {
  readonly type: typeof TOGGLE;
};

export const INITIALIZER = "INITIALIZER";
type Initialize = {
  readonly type: typeof INITIALIZER;
  value: number;
};

export const RESIZE = "RESIZE";
type Resize = {
  readonly type: typeof RESIZE;
};

export type AppGridActions = Toggle | Initialize | Resize;

export const gridColumnStyle = (
  resourcePanelWidth: number,
  grabWidth: number,
  pseudoWidth: number
): string => {
  return `${resourcePanelWidth}px ${grabWidth}px  calc(
    100% - ${resourcePanelWidth}px - ${grabWidth}px - ${pseudoWidth}px`;
};

export const gridRowStyle = (
  headerPanelHeight: number,
  pseudoWidth: number
): string => {
  return `${headerPanelHeight}px calc(
    100% - ${headerPanelHeight}px  - ${pseudoWidth}px`;
};

export type AppGridStates = {
  isShown: boolean;
  headerPanelHeight: number;
  defaultResourcePanelWidth: number;
  resourcePanelWidth: number;
  grabWidth: number;
  pseudoWidth: number;
  arrowClass: string;
  resourcePanelWidthStyle: string | undefined;
  columnStyle: string | undefined;
  rowStyle: string | undefined;
};

// initialize AppGridStates to match values in _global.scss
export const appGridInit = ({
  isShown,
  headerPanelHeight,
  defaultResourcePanelWidth,
  grabWidth,
  pseudoWidth,
}: AppGridStates): AppGridStates => {
  return {
    isShown: true,
    headerPanelHeight: headerPanelHeight,
    defaultResourcePanelWidth: defaultResourcePanelWidth,
    resourcePanelWidth: defaultResourcePanelWidth,
    grabWidth: grabWidth,
    pseudoWidth: pseudoWidth,
    arrowClass: styles.ArrowRotate,
    resourcePanelWidthStyle: isShown ? `${defaultResourcePanelWidth}px` : "0px",
    columnStyle: gridColumnStyle(
      defaultResourcePanelWidth,
      grabWidth,
      pseudoWidth
    ),
    rowStyle: gridRowStyle(headerPanelHeight, pseudoWidth),
  };
};

// function reducer (state:State, action:Actions): State{
export const appGridReducer = (
  state: AppGridStates,
  action: AppGridActions
): AppGridStates => {
  // console.log(action.type, state);
  switch (action.type) {
    case TOGGLE:
      let updatedresourcePanelWidth = !state.isShown
        ? state.defaultResourcePanelWidth
        : 0;
      // console.log(updatedresourcePanelWidth);
      return {
        ...state,
        isShown: !state.isShown,
        arrowClass: !state.isShown ? styles.ArrowRotate : styles.ArrowNormal,
        resourcePanelWidth: updatedresourcePanelWidth,
        resourcePanelWidthStyle: `${updatedresourcePanelWidth}px`,
        columnStyle: gridColumnStyle(
          updatedresourcePanelWidth,
          state.grabWidth,
          state.pseudoWidth
        ),
      };
    case INITIALIZER:
      // console.log(action.value);
      return appGridInit({ ...state, defaultResourcePanelWidth: action.value });
    case RESIZE:
      return {
        ...state,
        columnStyle: gridColumnStyle(
          state.resourcePanelWidth,
          state.grabWidth,
          state.pseudoWidth
        ),
        rowStyle: gridRowStyle(state.headerPanelHeight, state.pseudoWidth),
      };
    default:
      return state;
  }
};
