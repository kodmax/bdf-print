import { BBX, DWidth, SWidth } from './types'

export * from './print'

export type Glyph = {
    encoding: number
    sWidth: SWidth
    dWidth: DWidth
    bbx: BBX
    bitmap: string[]
    name: string
}

export type JsonBDFFont = {
    properties: Record<string, Array<string | number>>
    comment?: string
    contentVersion?: number
    font: string
    size: number[]
    fontBoundingBox: number[]
    metricsSet?: number
    chars: number
    glyphs: Record<number, Glyph>
    version: string
}
