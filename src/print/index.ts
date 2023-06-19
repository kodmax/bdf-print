import { JsonBDFFont } from "..";

export const print1Bit = (font: JsonBDFFont, lineHeight: number, width: number, text: string): Uint8Array => {
    if (width % 8) {
        throw new TypeError('Width must be aligned by 8')
    }

    const byteWidth = width >> 3
    const buffer = new Uint8Array(lineHeight * byteWidth)
    const rows: string[] = []
    for (let i = 0; i < lineHeight; i++) {
        rows[i] = ''
    }

    for (let i = 0; i < text.length; i++) {
        const glyph = font.glyphs[text.charCodeAt(i)]
        const empty = ' '.repeat(glyph.dWidth.dwx0)

        const padRight = ' '.repeat(glyph.dWidth.dwx0 - glyph.bbx.w - glyph.bbx.xOffsX)
        const padLeft = ' '.repeat(glyph.bbx.xOffsX)

        const dy = lineHeight - glyph.bbx.h + font.fontBoundingBox[3] - glyph.bbx.yOffsY
        console.log(text[i], text.charCodeAt(i), lineHeight, glyph.bbx, dy)
        for (let i = lineHeight - 1; i >= 0; i--) {
            const y = i - dy
            rows[i] += y >= 0 && y < glyph.bitmap.length
                ? padLeft + glyph.bitmap[i - dy] + padRight
                : empty
        }
    }

    console.log(rows)

    return buffer
}