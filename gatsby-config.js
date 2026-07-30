module.exports = {
  siteMetadata: {
    title: `Anchit Dhar`,
    description: `Personal site and blog of Anchit Dhar — senior software engineer working on AI-driven platforms and fintech systems.`,
    siteUrl: `https://dharanchit.github.io`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-5GCDLH40J5",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Anchit Dhar",
        short_name: "Anchit Dhar",
        start_url: "/",
        background_color: "#0b0b0c",
        theme_color: "#0b0b0c",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
  ],
};
