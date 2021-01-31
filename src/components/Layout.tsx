import React from "react";
import  useSiteMetadata  from "../hooks/useSiteMetadata";

import Header from "./Header";

export default function Layout (props: {children: React.ReactNode;}) {
  const { title, description } = useSiteMetadata();
  return (
    <>
    <Header siteTitle={title} />
        {props.children}
    </>
  );
};
