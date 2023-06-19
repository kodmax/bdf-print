import { Lines } from "./main"
import { Glyph, JsonBDFFont } from ".."
import { readCharacter } from "./character"
import { parse } from "./parse-line"
import { Options } from "."

export const readFont = (version: string, lines: Lines, options: Options): JsonBDFFont => {
    const properties: Record<string, Array<string | number>> = {}
    const glyphs: Record<number, Glyph> = {}
    const font: Partial<JsonBDFFont> = {}

    const include = options.include.split('').map(c => c.charCodeAt(0))
    const asciiOnly = options.asciiOnly || include.length > 0

    for (let line = lines.shift(); line; line = lines.shift()) {
        const [key, values] = parse(line)

        if (values !== null) {
            if (key === 'STARTCHAR') {
                const char = readCharacter(String(values[0]), lines)

                if (!asciiOnly || char.encoding < 128 || include.includes(char.encoding)) {
                    glyphs[char.encoding] = char
                }

            } else if (key === 'STARTPROPERTIES') {
                for (let propLine = lines.shift(); propLine; propLine = lines.shift()) {
                    const [key, values] = parse(propLine)
                    if (key !== 'ENDPROPERTIES' && values !== null) {
                        properties[key] = values

                    } else {
                        break
                    }
                }

            } else if (key === 'ENDFONT') {
                break

            } else {
                switch (key) {
                    case 'COMMENT':
                        font.comment = values[0] as string
                        break
                    
                    case 'CONTENTVERSION':
                        font.contentVersion = values[0] as number
                        break

                    case 'FONT':
                        font.font = values[0] as string
                        break

                    case 'SIZE':
                        font.size = values as number[]
                        break

                    case 'FONTBOUNDINGBOX':
                        font.fontBoundingBox = values as number[]
                        break

                    case 'METRICSSET':
                        font.metricsSet = values[0] as number
                        break
                    
                    case 'CHARS':
                        font.chars = values[0] as number
                        break

                    default:
                        properties[key] = values
                }
            }
        }
    }

    return {
        ...(font as JsonBDFFont),
        properties,
        glyphs,
        version
    }
}
