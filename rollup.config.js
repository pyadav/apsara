import path from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import rollupPostcssLessLoader from "rollup-plugin-postcss-webpack-alias-less-loader";

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    /*
  ES Modules have a static module structure, which helps building tool that target ESM to perform tree shaking
  Note: Tree shaking is a process of dead code elimination where Bundlers will attempt to only bundle code 
  that is being used.
  
  CommonJS modules have a dynamic module structure, used by building tool that target CommonJS(Webpack, Node.js).
  This means that even if only one component is imported from our library, all components will be bundled.
  */

    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        postcss({
            sourceMap: true,
            extract: "apsara.css",
            use: [["less", { javascriptEnabled: true }]],
            loaders: [
                rollupPostcssLessLoader({
                    nodeModulePath: path.resolve(__dirname, "./node_modules"),
                    aliases: {},
                    options: {
                        javascriptEnabled: true,
                    },
                }),
            ],
        }),
        // Prevents Rollup from bundling the peer dependencies
        peerDepsExternal(),

        // Efficiently bundles third party dependencies we've installed
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),

        // Enables transpilation into CommonJS (CJS) format
        commonjs(),

        // Transpiles our TypeScript code into JavaScript
        typescript({ useTsconfigDeclarationDir: true }),
        image(),
    ],
};
