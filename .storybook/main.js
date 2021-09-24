module.exports = {
  stories: ["../storybook/stories/**/*.stories.@(ts|js)"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-knobs/register",
  ],
  // webpackFinal: async (config) => {
  //   config.resolve.alias = {
  //     ...(config.resolve.alias || {}),
  //     // Transform all direct `react-native` imports to `react-native-web`
  //     "react-native$": "react-native-web",
  //     // make sure we're rendering output using **web** Storybook not react-native
  //     "@storybook/react-native": "@storybook/react",
  //     // plugin-level react-native-web extensions
  //     "react-native-svg": "react-native-svg/lib/commonjs/ReactNativeSVG.web",
  //   };
  //   // mutate babel-loader
  //   config.module.rules[0].use[0].options.plugins.push([
  //     "react-native-web",
  //     { commonjs: true },
  //   ]);
  //   // console.dir(config, { depth: null });
  //   return config;
  // },
};
