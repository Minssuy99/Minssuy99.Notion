module.exports = {
  images: {
    domains: [
      "www.notion.so",
      "lh5.googleusercontent.com",
      "s3-us-west-2.amazonaws.com",
    ],
  },
  transpilePackages: ["mermaid"],

  experimental: {
    esmExternals: "loose",
    largePageDataBytes: 350 * 1024, // Increased data serialization threshold to 350KB
  },
}
