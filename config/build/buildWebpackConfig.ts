import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options

    return {
        mode: mode,
        /*точка входа*/
        entry: paths.entry,

        /*точка выхода*/
        output: {
            filename: "[name].[contenthash].js",
            path: paths.dist,
            clean: true,
        },

        /*для dev server, проверка на дев позволяет в сборку не добавлять сурсмэп и ещё чё-то, что не нужно в продакшене,
        будет добавляться только на уровне дев*/
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options): undefined,

        /*налаживает связь между index.html в публик и в дист, добавляет div root*/
        plugins: buildPlugins(options),

        /*Настройки для TS*/
        module: {
            /*Отвечает за обработку файлов, которые не относятся к JS, (CSS, PNG,JPEG и т.д.)*/
            rules: buildLoaders(options)
        },

        /*Убирает необходимость при экспорте добавлять расширение файла, т.е. import 'app',  не 'app.ts'*/
        resolve: buildResolvers(options),
    }
}