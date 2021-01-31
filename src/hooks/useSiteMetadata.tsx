import { graphql, useStaticQuery } from 'gatsby'

export default function useSiteMetadata():{ title: any; description:any; } {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}