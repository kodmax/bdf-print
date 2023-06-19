import { Lines } from "./main"
import { Glyph } from ".."
import { BBX, DWidth, SWidth } from "../types"
import { parse } from "./parse-line"

export const readCharacter = (name: string, lines: Lines): Glyph => {
    const properties: Record<string, Array<string | number>> = {}
    const bitmap: string[] = []

    for (let line = lines.shift(); line; line = lines.shift()) {
        const [key, values] = parse(line)

        if (key === 'BITMAP') {
            if (properties['ENCODING'] && properties['DWIDTH'] && properties['SWIDTH'] && properties['BBX']) {
                for (let data = lines.shift(); data; data = lines.shift()) {
                    const encoding: number = properties['ENCODING'][0] as number
                    const sWidth: SWidth = {
                        swx0: properties['SWIDTH'][0] as number,
                        swy0: properties['SWIDTH'][1] as number
                    }
                    const dWidth: DWidth = {
                        dwx0: properties['DWIDTH'][0] as number,
                        dwy0: properties['DWIDTH'][1] as number
                    }
                    const bbx: BBX = {
                        yOffsY: properties['BBX'][3] as number,
                        xOffsX: properties['BBX'][2] as number,
                        h: properties['BBX'][1] as number,
                        w: properties['BBX'][0] as number
                    }

                    const [key, values] = parse(data)
                    if (values === null) {
                        const bits = parseInt(key, 16).toString(2).padStart(key.length * 4, '0').substring(0, bbx.w).padEnd(bbx.w, '0')
                        bitmap.push(bits.replaceAll('0', ' ').replaceAll('1', '■'))
    
                    } else if (key === 'ENDCHAR') {
                        return {
                            encoding,
                            sWidth,
                            dWidth,
                            bitmap,
                            name,
                            bbx
                        } 
                        
                    } else {
                        throw new Error('Invalid character data: ' + name)
                    }
                }
    
            } else {
                throw new Error('Missing character data: ' + name)
            }

        } else if (values !== null) {
            properties[key] = values
        }
    }

    throw new Error('Incomplete character data: ' + name)
}