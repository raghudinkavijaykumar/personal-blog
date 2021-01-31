import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/interface/Layout";
import { Container } from "@material-ui/core";

export default (props: {
  data: { mdx: { frontmatter: any; body: any; tableOfContents: any } };
}) => {
  const { frontmatter, body, tableOfContents } = props.data.mdx;
  return (
    <Container maxWidth="lg">
      <Layout>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <MDXRenderer>{body}</MDXRenderer>
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
