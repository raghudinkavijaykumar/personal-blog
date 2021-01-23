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
        path: `${__dirname}/study/java/docs`,
        name: `java`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/study/algorithms/docs`,
        name: `algorithms`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/study/css/docs`,
        name: `css`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/study/git/docs`,
        name: `git`,
        ignore: [`**/\*-orig.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/study/html/docs`,
        name: `html`
      },
    },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/study/computational-linguistics/docs`,
          name: `computational-linguistics`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/study/javascript/docs`,
          name: `javascript`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/study/react/docs`,
          name: `react`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/study/docker/docs`,
          name: `docker`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/study/kubernetes/docs`,
          name: `kubernetes`,
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
