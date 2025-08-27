/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BrandsYoutubeIcon(props) {
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
          "M30.667 12.946a11.3 11.3 0 0 0-1.214-5.507 3.9 3.9 0 0 0-2.293-1.333c-3.71-.337-7.435-.475-11.16-.413-3.711-.064-7.423.07-11.12.4a3.83 3.83 0 0 0-1.947.986c-1.2 1.107-1.333 3-1.466 4.6a64 64 0 0 0 0 8.64c.038.9.172 1.795.4 2.667.16.673.486 1.296.946 1.813.543.538 1.236.9 1.987 1.04 2.875.355 5.771.502 8.667.44 4.666.067 8.76 0 13.6-.373a3.84 3.84 0 0 0 2.04-1.04 3.3 3.3 0 0 0 .813-1.333c.477-1.463.711-2.995.693-4.534.054-.746.054-5.253.054-6.053m-17.68 6.853v-8.253l7.893 4.147c-2.213 1.226-5.133 2.613-7.893 4.106"
        }
      ></path>
    </svg>
  );
}

export default BrandsYoutubeIcon;
/* prettier-ignore-end */
