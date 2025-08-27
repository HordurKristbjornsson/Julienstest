/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TwitterIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M19.857 13.704 31.027 1h-2.646l-9.703 11.029L10.934 1H2l11.713 16.68L2 31h2.646l10.24-11.65L23.066 31H32M5.601 2.952h4.065l18.713 26.191h-4.066"
        }
      ></path>
    </svg>
  );
}

export default TwitterIcon;
/* prettier-ignore-end */
