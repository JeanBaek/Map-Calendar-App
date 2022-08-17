module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],

  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          Components: "./src/Components",
          library: "./src/library",
          repository: "./src/repository",
          service: "./src/service",
          styles: "./src/styles",
          view: "./src/view",
        },
      },
    ],
    "@babel/plugin-transform-runtime",
  ],
};
