/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m9 7.94 3.713-3.713 1.06 1.06L10.06 9l3.713 3.713-1.06 1.06L9 10.06l-3.713 3.713-1.06-1.06L7.939 9 4.227 5.287l1.06-1.06L9 7.939z"
        }
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
