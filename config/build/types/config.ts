
export type BuildMode = 'production' | 'development'

export interface BuildPath {
    entry: string
    dist: string
    html: string
    src: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPath
    isDev: boolean
    port: number
}
