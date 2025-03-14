// craco.config.js (no projeto nav_bar)
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Define o publicPath para que os chunks sejam servidos corretamente do remote
      webpackConfig.output.publicPath = "http://localhost:3003/";
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "nav_bar",
          filename: "remoteEntry.js",
          exposes: {
            // Exponha o componente principal, por exemplo o App, para o container
            "./App": "./src/App",
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: "^18.3.1" },
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: "^18.3.1",
            },
          },
        })
      );
      return webpackConfig;
    },
  },
};
