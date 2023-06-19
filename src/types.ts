export type Glyph = {
    encoding: number
    sWidth: number[]
    dWidth: number[]
    bbx: number[]
    bitmap: string[]
    name: string
}

export type JsonBDFFont = {
    properties: Record<string, Array<string | number>>
    comment?: string
    font: string
    size: number[]
    fontBoundingBox: number[]
    chars: number
    glyphs: Record<number, Glyph>
    version: string
}