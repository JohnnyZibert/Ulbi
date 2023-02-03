import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(option: BuildOptions):webpack.Configuration {
    const {paths, mode} = option

    return {
        mode: mode ,
        /*точка входа*/
        entry: paths.entry,
        /*точка выхода*/
        output: {
            filename: "[name].[contenthash].js",
            path: paths.dist,
            clean: true,
        },
        /*налаживает связь между index.html в публик и в дист, добавляет div root*/
        plugins: buildPlugins(option),
        /*Настройки для TS*/
        module: {
            /*Отвечает за обработку файлов, которые не относятся к JS, (CSS, PNG,JPEG и т.д.)*/
            rules: buildLoaders()
        },
        /*Убирает необходимость при экспорте добавлять расширение файла, т.е. import 'app',  не 'app.ts'*/
        resolve: buildResolvers(),
    }
}