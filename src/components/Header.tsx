import React from "react";
import AppToolbar from "./interface/AppToolbar";

export default function Header(props: { siteTitle: String; }) {
  return (
  <React.Fragment>
    <AppToolbar siteTitle={props.siteTitle}></AppToolbar>
  </React.Fragment>
  );
}
