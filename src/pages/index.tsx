import { Container, CssBaseline } from "@material-ui/core";
import { graphql, Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Footer from "../components/interface/Footer";
import Layout from "../components/interface/Layout";

const IndexWrapper = styled.main``;
const PostWrapper = styled.div``;

export default (props: {
  data: {
    allMdx: {
      nodes: { id: any; excerpt: any; frontmatter: any; fields: any }[];
    };
  };
}) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="author" content="Raghu Dinka Vijaykumar"></meta>
      </Helmet>
      <Container maxWidth={false} style={{ width: "100%" }}>
        <CssBaseline />
        <Layout>
          <IndexWrapper>
            {props.data.allMdx.nodes.map(
              ({ id, excerpt, frontmatter, fields }) => (
                <>
                  <PostWrapper key={id}>
                    <Link to={fields.slug}>
                      <h1>{frontmatter.title}</h1>
                      <p>{frontmatter.date}</p>
                      <p>{excerpt}</p>
                    </Link>
                  </PostWrapper>
                </>
              )
            )}
          </IndexWrapper>
          {/*<ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>*/}
        </Layout>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </Container>
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date
        }
        body
        fields {
          slug
        }
      }
    }
  }
`;
