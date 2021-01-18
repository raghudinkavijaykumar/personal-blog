module.exports = {
  siteMetadata: {
    title: `The Study Blog`,
    description: `This is personal study blog`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/study`,
        name: `study`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
            },
          },
        ],
      },
    },
  ],
  pathPrefix: `/personal-blog`,
};
