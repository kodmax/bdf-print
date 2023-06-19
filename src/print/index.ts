import { JsonBDFFont } from "..";

export const print1Bit = (font: JsonBDFFont, lineHeight: number, width: number, text: string): Uint8Array => {
    if (width % 8) {
        throw new TypeError('Width must be aligned by 8')
    }

    const byteWidth = width >> 3
    const buffer = new Uint8Array(lineHeight * byteWidth)
    // const rows: string[] = []
    // for (let i = 0; i < lineHeight; i++) {
    //     rows[i] = ''
    // }

    for (let i = 0, pos = 0; i < text.length; i++) {
        const glyph = font.glyphs[text.charCodeAt(i)]
        // const empty = ' '.repeat(glyph.dWidth.dwx0)

        // const padRight = ' '.repeat(glyph.dWidth.dwx0 - glyph.bbx.w - glyph.bbx.xOffsX)
        // const padLeft = ' '.repeat(glyph.bbx.xOffsX)

        const dy = lineHeight - glyph.bbx.h + font.fontBoundingBox[3] - glyph.bbx.yOffsY
        for (let lineY = lineHeight - 1; lineY >= 0; lineY--) {
            const y = lineY - dy

            if (y >= 0 && y < glyph.bitmap.length) {
                // rows[lineY] += padLeft + glyph.bitmap[lineY - dy] + padRight
                for (let x = 0; x < glyph.bbx.w; x++) {
                    if (glyph.bitmap[lineY - dy][x] !== ' ') {
                        const xx = x + pos + glyph.bbx.xOffsX
                        if ((xx >> 3) < byteWidth) {
                            const byteIndex = (xx >> 3) + lineY * byteWidth
                            const bitValue = 1 << (7 - (xx % 8))

                            buffer[byteIndex] |= bitValue
                        }
                    }
                }

            } else {
                // rows[lineY] += empty
            }
        }

        pos += glyph.dWidth.dwx0
    }

    // console.log(rows)

    return buffer
}