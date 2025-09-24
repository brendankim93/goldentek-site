/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Goldentek`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Kulim Park`,
            file: `https://fonts.googleapis.com/css2?family=Kulim+Park:wght@700&display=swap`
          },
          {
            name: `Kulim Park Light`,
            file: `https://fonts.googleapis.com/css2?family=Kulim+Park:wght@300&display=swap`
          },
          {
            name: `Roboto`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap`
          }
        ]
      }
    }
  ],
}
