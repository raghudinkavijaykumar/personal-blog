import { Container } from "@material-ui/core";
import React from "react";
import  useSiteMetadata  from "../../hooks/useSiteMetadata";

import Header from "./Header";

export default function Layout (props: {children: React.ReactNode;}) {
  const { title, description } = useSiteMetadata();
  return (
    <>
    <Container maxWidth="lg">
    <Header siteTitle={title} />
        {props.children}
    
    </Container>
    </>
  );
};
