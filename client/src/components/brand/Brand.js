import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";

export function Brand() {
  return (
    <>
      {/* begin::Brand */}
      <div className={`aside-brand d-flex flex-column align-items-center flex-column-auto py-10  `}>
        {/* begin::Logo */}
        <div className="brand-logo w-50px">
          {/* <img alt="Chronos logo" src={toAbsoluteUrl("/media/logos/Chronos-Icon-logo-black.png")} className="max-h-40px" /> */}
          {/* <svg data-name="logo chronos navbar" xmlns="http://www.w3.org/2000/svg" width={42.105} height={52} viewBox="0 0 42.105 52">
            <defs>
              <linearGradient id="prefix__a" x1={0.09} y1={0.567} x2={0.77} y2={0.475} gradientUnits="objectBoundingBox">
                <stop offset={0} stopColor="#1e1e1e" />
                <stop offset={0.575} stopColor="#0c0c0c" />
                <stop offset={1} stopColor="#060606" />x
              </linearGradient>
              <linearGradient id="prefix__b" x1={0.319} y1={0.819} x2={0.747} y2={0.326} gradientUnits="objectBoundingBox">
                <stop offset={0} stopColor="#595959" />
                <stop offset={1} stopColor="#414141" />
              </linearGradient>
              <linearGradient id="prefix__c" x1={0.568} y1={0.796} x2={0.456} y2={0.122} gradientUnits="objectBoundingBox">
                <stop offset={0} stopColor="#949494" />
                <stop offset={0.994} stopColor="#7a7a7a" />
              </linearGradient>
              <linearGradient id="prefix__d" x1={0.215} y1={0.402} x2={0.885} y2={0.556} gradientUnits="objectBoundingBox">
                <stop offset={0} stopColor="silver" />
                <stop offset={1} stopColor="#aaa" />
              </linearGradient>
              <linearGradient id="prefix__e" x1={0.159} y1={0.68} x2={0.783} y2={0.185} gradientUnits="objectBoundingBox">
                <stop offset={0} stopColor="#d2d2d2" />
                <stop offset={1} stopColor="#e0e0e0" />
              </linearGradient>
            </defs>
            <path
              data-name="Trac\xE9 2289"
              d="M488.794-772.6a27.82 27.82 0 00-7.7 1.463l4.045 14a12.784 12.784 0 013.638-.135 12.684 12.684 0 013.442.869l4.47-15.45a28.362 28.362 0 00-7.895-.747z"
              transform="translate(-462.738 772.631)"
              fill="url(#prefix__a)"
            />
            <path
              data-name="Trac\xE9 2290"
              d="M465.524-764.137l-.24.19a27.053 27.053 0 00-5.193 5.542 26.608 26.608 0 00-3.4 6.682l11.27 4.486a13.881 13.881 0 015.333-5.674l.133-.077z"
              transform="translate(-455.278 770.034)"
              fill="url(#prefix__b)"
            />
            <path
              data-name="Trac\xE9 2291"
              d="M465.847-733.058l.022-.165-11.214-.491v.294a25.705 25.705 0 001.161 7.165 25.517 25.517 0 003.059 6.451l8.354-4.9a15.166 15.166 0 01-1.382-8.354z"
              transform="translate(-454.655 760.733)"
              fill="url(#prefix__c)"
            />
            <path
              data-name="Trac\xE9 2292"
              d="M478.505-711.63a16.219 16.219 0 01-1.946-1.227 16.07 16.07 0 01-1.732-1.471l-.128-.127-5.681 6.693.224.168a24.744 24.744 0 002.936 1.87 24.365 24.365 0 003.144 1.427 24.5 24.5 0 006.636 1.453l.946-7.177a16.847 16.847 0 01-4.399-1.609z"
              transform="translate(-459.046 754.845)"
              fill="url(#prefix__d)"
            />
            <path
              data-name="Trac\xE9 2293"
              d="M506.418-713.63a17.731 17.731 0 01-8.955 4.061l-.193.026 1.308 6.2.256-.071a23.289 23.289 0 0010.953-6.8z"
              transform="translate(-467.684 754.592)"
              fill="url(#prefix__e)"
            />
          </svg> */}
          <SVG src={toAbsoluteUrl("/img/min-logo.svg")} />
        </div>
        {/* end::Logo */}
      </div>
      {/* end::Brand */}
    </>
  );
}
