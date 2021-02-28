import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import Header from "./Header";
import { Sidebar } from "./SideBarLayout";

const Wrapper = styled("div")`
  display: flex;
  //justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled("main")`
  display: block;
  width: 60%;
  flex-grow: 1;
  margin: 0px 24px;
  padding-top: 3rem;

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    padding-top: 3rem;
  }
`;

export default function Layout(props: { children: React.ReactNode }) {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Container maxWidth={false} style={{ width: "100%" }}>
        <Header siteTitle={title} />
        <Wrapper>
          <Sidebar></Sidebar>
          <Content>{props.children}</Content>
        </Wrapper>
      </Container>
    </>
  );
}
