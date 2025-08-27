/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LoveIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        d={
          "m12.659 2.153-.089.83-.46 4.297 3.972-1.765.759-.337.258.79 1.128 3.44.261.793-.817.174-4.246.9 2.893 3.192.564.621-.682.491-2.953 2.126-.672.485-.415-.717-2.16-3.73-2.16 3.73-.415.717-.672-.485L3.8 15.58l-.682-.49.564-.622 2.893-3.192-4.245-.9-.817-.174.26-.793L2.9 5.968l.259-.79.758.337L7.89 7.281l-.46-4.298-.09-.83z"
        }
      ></path>
    </svg>
  );
}

export default LoveIcon;
/* prettier-ignore-end */
