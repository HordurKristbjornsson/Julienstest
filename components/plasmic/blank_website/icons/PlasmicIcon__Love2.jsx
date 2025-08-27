/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Love2Icon(props) {
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
        stroke={"currentColor"}
        d={
          "m13.564 2.693-.06.554-.568 5.288 4.886-2.171.506-.225.172.526 1.241 3.785.174.53-.545.115-5.224 1.107 3.562 3.93.376.415-.454.327-3.248 2.338-.448.324-.276-.479L11 14.468l-2.657 4.59-.277.478-.448-.324-3.249-2.338-.454-.327.376-.416 3.563-3.93-5.224-1.106-.545-.116.173-.53L3.5 6.666l.172-.526.506.225 4.885 2.17-.568-5.287-.06-.554z"
        }
      ></path>
    </svg>
  );
}

export default Love2Icon;
/* prettier-ignore-end */
