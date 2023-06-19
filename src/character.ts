import { Lines } from "."
import { parse } from "./parse-line"

export type Character = {
    encoding: number
    sWidth: number[]
    dWidth: number[]
    bbx: number[]
    bitmap: string[]
    name: string
}

export const readCharacter = (name: string, lines: Lines): Character => {
    const properties: Record<string, Array<string | number>> = {}
    const bitmap: string[] = []

    for (let line = lines.shift(); line; line = lines.shift()) {
        const [key, values] = parse(line)

        if (key === 'BITMAP') {
            if (properties['ENCODING'] && properties['DWIDTH'] && properties['SWIDTH'] && properties['BBX']) {
                for (let data = lines.shift(); data; data = lines.shift()) {
                    const encoding: number = properties['ENCODING'][0] as number
                    const sWidth: number[] = properties['SWIDTH'] as number[]
                    const dWidth: number[] = properties['DWIDTH'] as number[]
                    const bbx: number[] = properties['BBX'] as number[]

                    const [key, values] = parse(data)
                    if (values === null) {
                        const bits = parseInt(key, 16).toString(2).padStart(key.length * 4, '0').substring(0, bbx[0]).padEnd(bbx[0], '0')
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