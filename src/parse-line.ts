const valueRE = /(^-?[0-9]+(?:\.[0-9]+)?)|(^"((?:\\\\|\\"|.)*)")|(^.+)/
const keyRE = /^([A-Z_0-9]*)(?:$|\s+)/
const hexRE = /^([A-F0-9]*)$/

export const parse = (line: string): [string, Array<string | number> | null] => {
    if (hexRE.test(line)) {
        return [line, null]
    }

    const keyMatch = line.match(keyRE)
    if (keyMatch) {
        const values: Array<string | number> = []
        const key = keyMatch[1]

        for (
            let left = line.substring(keyMatch[0].length).trim(), valueMatch = left.match(valueRE);
            valueMatch;
            left = left.substring(valueMatch[0].length).trim(), valueMatch = left.match(valueRE)
        ) {
            if (valueMatch[1]) {
                values.push(Number(valueMatch[1]))

            } else if (valueMatch[2]) {
                values.push(valueMatch[3])

            } else if (valueMatch[4]) {
                values.push(valueMatch[4])
            }
        }

        return [key, values]

    } else {
        throw new Error('Invalid line: ' + line)
    }
}
