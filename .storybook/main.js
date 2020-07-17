const path = require("path");

/*
configuration files - 
1. main.js - Controls the generation of your Storybook
2. preview.js - Controls the rendering of your stories
  - Add global parameters and decorators
  - Import global CSS
  - Add extra polyfills

3. manager.js - Allows us to customize how Storybook’s app UI renders
*/

module.exports = {
    // location of story files
    stories: ["../src/**/*.stories.tsx"],

    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: [],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../"),
        });

        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [["react-app", { flow: false, typescript: true }]],
            },
        });
        config.resolve.extensions.push(".ts", ".tsx");

        return config;
    },
};
