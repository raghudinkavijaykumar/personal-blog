import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import Dump from "../components/Dump";

/*
const StyledH1 = styled.h1`
  color: rebeccapurple;
`
*/

const IndexWrapper = styled.main``;
const PostWrapper = styled.div``;

export default ({ data }) => {
  return (
    <>
      <Layout>
        <IndexWrapper>
          {data.allMdx.nodes.map(
            ({ id, excerpt, frontmatter,  fields }) => (
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
