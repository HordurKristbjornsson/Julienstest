/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MenuIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M13.964 5.333H2.029V4h11.935zm0 6.667H2.029v-1.333h11.935zm0-3.307H2.029V7.36h11.935z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default MenuIcon;
/* prettier-ignore-end */
