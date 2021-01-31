import { Link } from "gatsby";
import React from "react";

export const Header = (props) => {
  // this.props.siteTitle = "Something else";
  return (
    <>
      <Link to="/">
        <h1>{props.siteTitle}</h1>
        <p>{props.siteDescription}</p>
      </Link>
    </>
  );
};
