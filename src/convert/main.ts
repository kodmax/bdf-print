import { readFile, writeFile } from 'fs/promises'
import { readFont } from './font'
import { Options } from '.'

export type Lines = { 
    buffer: string[]
    shift: () => string
    index: number
}

export const main = async (path: string, targetPath: string, options: Options): Promise<void> => {
    const lines: Lines = {
        buffer: (await readFile(path, { encoding: 'utf-8', flag: 'r' })).split(/\r?\n/),
        shift: function (): string {
            return this.buffer[this.index++]
        },
        index: 0
    } 
    const start = lines.shift()

    if (start?.startsWith('STARTFONT ')) {
        const font = readFont(start.slice('STARTFONT '.length), lines, options)
        await writeFile(targetPath, JSON.stringify(font, null, 2), { encoding: 'utf-8'})

    } else {
        throw new Error('Invalid font file')
    }
}
