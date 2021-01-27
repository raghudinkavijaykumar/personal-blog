import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { AppToolbar } from "../components/interface/app-toolbar"

const IndexWrapper = styled.main``;
const PostWrapper = styled.div``;

export default ({ data }) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="author" content="Raghu Dinka Vijaykumar" ></meta>
      </Helmet>
      <AppToolbar />
      <Layout>
        <IndexWrapper>
          {data.allMdx.nodes.map(
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
      </Layout>
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
