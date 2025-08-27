/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export const MobileContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export function MobileContextProvider(props) {
  return (
    <MobileContext.Provider value={props.value}>
      {props.children}
    </MobileContext.Provider>
  );
}

export const useScreenVariants = createUseScreenVariants(true, {
  mobileOnly: "(min-width:0px) and (max-width:768px)",
  smallDesktop: "(max-width:1439px)",
});

export default MobileContext;
/* prettier-ignore-end */
