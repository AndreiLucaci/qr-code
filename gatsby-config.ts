import type { GatsbyConfig } from "gatsby";

const adapter = require("gatsby-adapter-netlify");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `QR Code Generator`,
    siteUrl: `https://qr.andreilucaci.ro`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-emotion"],
  pathPrefix: "/qr-code",
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),
};

export default config;
