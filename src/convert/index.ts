#!/usr/bin/env node
import { Command } from 'commander'
import { main } from './main'

export type Options = {
    asciiOnly: boolean
    include: string
}

const program = new Command()

program
    .name('bdf-print')
    .usage('<command> [options]')
    .description('CLI to convert BDF bitmap fonts files into json files usable with bdf-print library.')
    .version('1.0.0');

program.command('convert')
    .description('Converts a BDF font file into Font json readably by bdf-print library')
    .argument('<src-path>', 'path to the bdf file')
    .argument('[target-path')
    .option('-a, --ascii-only', 'Include only characters from 0 to 127', false)
    .option('-i, --include <chars>', 'include listed characters', '')
    .action((srcPath: string, targetPath: string | undefined, options: Options) => {
        main(srcPath, targetPath ?? srcPath + '.json', options)
    })

program.parse()
