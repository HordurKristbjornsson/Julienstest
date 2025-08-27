/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Love3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        stroke={"currentColor"}
        d={
          "m7.91 18.807-3.248-2.34 4.146-4.573-6.074-1.288L3.975 6.82l5.678 2.524-.66-6.151h4.014l-.66 6.151 5.678-2.524 1.241 3.786-6.074 1.288 4.146 4.574-3.248 2.339L11 13.471z"
        }
      ></path>
    </svg>
  );
}

export default Love3Icon;
/* prettier-ignore-end */
