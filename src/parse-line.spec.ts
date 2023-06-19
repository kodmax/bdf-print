import { parse } from "./parse-line"

describe('parse line', () => {
    it('STARTFONT 2.1', () => {
        expect(parse('STARTFONT 2.1')).toEqual(['STARTFONT', [
            2.1
        ]])
    })

    it('FONT -xos4-Terminus-Medium-R-Normal--14-140-72-72-C-80-ISO10646-1', () => {
        expect(parse('FONT -xos4-Terminus-Medium-R-Normal--14-140-72-72-C-80-ISO10646-1')).toEqual(['FONT', [
            '-xos4-Terminus-Medium-R-Normal--14-140-72-72-C-80-ISO10646-1'
        ]])
    })

    it('SIZE 14 72 72', () => {
        expect(parse('SIZE 14 72 72')).toEqual(['SIZE', [
            14,
            72,
            72
        ]])
    })

    it('FONTBOUNDINGBOX 8 14 0 -2', () => {
        expect(parse('FONTBOUNDINGBOX 8 14 0 -2')).toEqual(['FONTBOUNDINGBOX', [
            8,
            14,
            0,
            -2
        ]])
    })

    it('ADD_STYLE_NAME ""', () => {
        expect(parse('ADD_STYLE_NAME ""')).toEqual(['ADD_STYLE_NAME', [
            ''
        ]])
    })

    it('WEIGHT_NAME "Medium"', () => {
        expect(parse('WEIGHT_NAME "Medium"')).toEqual(['WEIGHT_NAME', [
            'Medium'
        ]])
    })

    it('SLANT "R"', () => {
        expect(parse('SLANT "R"')).toEqual(['SLANT', [
            'R'
        ]])
    })

    it('FONT_DESCENT 2', () => {
        expect(parse('FONT_DESCENT 2')).toEqual(['FONT_DESCENT', [
            2
        ]])
    })

    it('CHARSET_ENCODING "1"', () => {
        expect(parse('CHARSET_ENCODING "1"')).toEqual(['CHARSET_ENCODING', [
            '1'
        ]])
    })

    it('COPYRIGHT "Copyright (C) 2006 Dimitar Toshkov Zhekov"', () => {
        expect(parse('COPYRIGHT "Copyright (C) 2006 Dimitar Toshkov Zhekov"')).toEqual(['COPYRIGHT', [
            'Copyright (C) 2006 Dimitar Toshkov Zhekov'
        ]])
    })

    it('BITMAP', () => {
        expect(parse('BITMAP')).toEqual(['BITMAP', []])
    })

    it('00', () => {
        expect(parse('00')).toEqual(['00', null])
    })

    it('7C', () => {
        expect(parse('7C')).toEqual(['7C', null])
    })
})