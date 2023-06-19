import { print1Bit } from "../../src";
import { JsonBDFFont } from "../../src";
import rockBoxFont from './14-Rockbox-Mix.json'



console.log(print1Bit(rockBoxFont as JsonBDFFont, 14, 32, 'Hi!'))