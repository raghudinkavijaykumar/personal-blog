import { Container, CssBaseline } from "@material-ui/core";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/interface/Layout";

export default (props: {
  data: { mdx: { frontmatter: any; body: any; tableOfContents: any } };
}) => {
  const { frontmatter, body, tableOfContents } = props.data.mdx;
  return (
    <Container maxWidth={false} style={{ width: "100%" }}>
      <CssBaseline />
      <Layout>
        <Container style={{ width: "100%", overflowX: "hidden" }}>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <MDXRenderer>{body}</MDXRenderer>
        </Container>
      </Layout>
    </Container>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      tableOfContents
      body
    }
  }
`;
