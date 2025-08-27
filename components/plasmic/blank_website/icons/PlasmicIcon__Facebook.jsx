/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FacebookIcon(props) {
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
          "M15.704 1.997c7.568 0 13.704 6.181 13.704 13.806s-6.136 13.806-13.705 13.806l-.218-.003q1.083-.002 2.122-.163v-9.42h3.2l.609-3.898h-3.81v-2.527c0-1.066.533-2.106 2.238-2.106h1.733V8.174s-1.572-.263-3.074-.263c-3.137 0-5.186 1.867-5.186 5.245v2.97H9.83v3.897h3.487v9.376C6.887 28.26 2 22.608 2 15.803 2 8.178 8.135 1.997 15.704 1.997"
        }
      ></path>
    </svg>
  );
}

export default FacebookIcon;
/* prettier-ignore-end */
