module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog',
    description: 'A cool website build for Frontend Masters using Gatsby',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
};
