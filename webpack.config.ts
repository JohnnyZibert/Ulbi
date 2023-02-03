import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoaders} from "./config/build/buildLoaders";
import {buildResolvers} from "./config/build/buildResolvers";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPath} from "./config/build/types/config";
import path from "path";

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = "development"
const isDev = mode === "development"

const config: webpack.Configuration = buildWebpackConfig({
    mode: "development",
    paths,
    isDev,
})

export default config