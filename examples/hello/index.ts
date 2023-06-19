import { print1Bit } from "../../src";
import { JsonBDFFont } from "../../src";
import rockBoxFont from './14-Rockbox-Mix.json'

print1Bit(rockBoxFont as JsonBDFFont, 16, 128, 'Hello world! ąęćśń')
