module.exports = {
  flags: {
    THE_FLAG: false,
  },
  siteMetadata: {
    title: `Raghu's Blog`,
    description: `This is personal study blog`,
    siteUrl: `http://localhost:9988`, //To be changed in production
  },
  plugins: [
    `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    } /*
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
    } 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/study/css/docs`,
        name: `css`,
      },
    } /*
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/study/git/docs`,
        name: `git`,
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
    },*/,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/study/javascript/docs`,
        name: `javascript`,
      },
    } /*
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
    },*/,

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- endexcerpt -->`,
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-prismjs`],
      },
    },
  ],
  pathPrefix: `/personal-blog`,
};
