import { JsonBDFFont } from "../types";

export const print1Bit = (font: JsonBDFFont, lineHeight: number, width: number, text: string): Uint8Array => {
    if (width % 8) {
        throw new TypeError('Width must be aligned by 8')
    }

    const byteWidth = width >> 3
    const buffer = new Uint8Array(lineHeight * byteWidth)

    for (let i = 0; i < text.length; i++) {
        const glyph = font.glyphs[text.charCodeAt(i)]
        console.log(text[i], glyph)
    }

    return buffer
}