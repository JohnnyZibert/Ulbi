
export type BuildMode = 'production' | 'development'

export interface BuildPath {
    entry: string
    dist: string
    html: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPath
    isDev: boolean
}
