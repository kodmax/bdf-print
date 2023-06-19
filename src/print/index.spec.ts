import { JsonBDFFont, print1Bit } from ".."

const font: JsonBDFFont = {
    "font": "rockbox-font-mix-12pt",
    "size": [
        12,
        75,
        75
    ],
    "fontBoundingBox": [
        25,
        15,
        -12,
        -3
    ],
    "chars": 43789,
    "properties": {
        "FONT_ASCENT": [
            11
        ],
        "FONT_DESCENT": [
            3
        ],
        "CHARSET_REGISTRY": [
            "ISO10646"
        ],
        "CHARSET_ENCODING": [
            "1"
        ]
    },
    "glyphs": {
        "32": {
            "encoding": 32,
            "sWidth": {
                "swx0": 320,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 4,
                "dwy0": 0
            },
            "bitmap": [],
            "name": "space",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 0,
                "h": 0,
                "w": 0
            }
        },
        "33": {
            "encoding": 33,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                " ",
                "■"
            ],
            "name": "exclam",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 1
            }
        },
        "34": {
            "encoding": 34,
            "sWidth": {
                "swx0": 400,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 5,
                "dwy0": 0
            },
            "bitmap": [
                "■ ■",
                "■ ■",
                "■ ■"
            ],
            "name": "quotedbl",
            "bbx": {
                "yOffsY": 6,
                "xOffsX": 1,
                "h": 3,
                "w": 3
            }
        },
        "35": {
            "encoding": 35,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "  ■ ■ ",
                "  ■ ■ ",
                "■■■■■■",
                "  ■ ■ ",
                "■■■■■■",
                " ■ ■  ",
                " ■ ■  ",
                " ■ ■  "
            ],
            "name": "numbersign",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 0,
                "h": 8,
                "w": 6
            }
        },
        "36": {
            "encoding": 36,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "  ■  ",
                " ■■■ ",
                "■ ■ ■",
                "■ ■  ",
                " ■■■ ",
                "  ■ ■",
                "■ ■ ■",
                "■ ■ ■",
                " ■■■ ",
                "  ■  "
            ],
            "name": "dollar",
            "bbx": {
                "yOffsY": -1,
                "xOffsX": 1,
                "h": 10,
                "w": 5
            }
        },
        "37": {
            "encoding": 37,
            "sWidth": {
                "swx0": 880,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 11,
                "dwy0": 0
            },
            "bitmap": [
                " ■■   ■  ",
                "■  ■ ■   ",
                "■  ■ ■   ",
                " ■■ ■    ",
                "    ■    ",
                "   ■  ■■ ",
                "   ■ ■  ■",
                "   ■ ■  ■",
                "  ■   ■■ "
            ],
            "name": "percent",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 9
            }
        },
        "38": {
            "encoding": 38,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "  ■■   ",
                " ■  ■  ",
                " ■  ■  ",
                "  ■■   ",
                " ■ ■   ",
                "■   ■ ■",
                "■    ■ ",
                "■   ■■ ",
                " ■■■  ■"
            ],
            "name": "ampersand",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "39": {
            "encoding": 39,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                "■",
                "■",
                "■"
            ],
            "name": "quotesingle",
            "bbx": {
                "yOffsY": 6,
                "xOffsX": 1,
                "h": 3,
                "w": 1
            }
        },
        "40": {
            "encoding": 40,
            "sWidth": {
                "swx0": 320,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 4,
                "dwy0": 0
            },
            "bitmap": [
                "  ■",
                " ■ ",
                " ■ ",
                "■  ",
                "■  ",
                "■  ",
                "■  ",
                "■  ",
                "■  ",
                " ■ ",
                " ■ ",
                "  ■"
            ],
            "name": "parenleft",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 1,
                "h": 12,
                "w": 3
            }
        },
        "41": {
            "encoding": 41,
            "sWidth": {
                "swx0": 320,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 4,
                "dwy0": 0
            },
            "bitmap": [
                "■  ",
                " ■ ",
                " ■ ",
                "  ■",
                "  ■",
                "  ■",
                "  ■",
                "  ■",
                "  ■",
                " ■ ",
                " ■ ",
                "■  "
            ],
            "name": "parenright",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 0,
                "h": 12,
                "w": 3
            }
        },
        "42": {
            "encoding": 42,
            "sWidth": {
                "swx0": 400,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 5,
                "dwy0": 0
            },
            "bitmap": [
                "■ ■",
                " ■ ",
                "■ ■"
            ],
            "name": "asterisk",
            "bbx": {
                "yOffsY": 6,
                "xOffsX": 1,
                "h": 3,
                "w": 3
            }
        },
        "43": {
            "encoding": 43,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "  ■  ",
                "  ■  ",
                "■■■■■",
                "  ■  ",
                "  ■  "
            ],
            "name": "plus",
            "bbx": {
                "yOffsY": 1,
                "xOffsX": 1,
                "h": 5,
                "w": 5
            }
        },
        "44": {
            "encoding": 44,
            "sWidth": {
                "swx0": 320,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 4,
                "dwy0": 0
            },
            "bitmap": [
                " ■",
                " ■",
                "■ "
            ],
            "name": "comma",
            "bbx": {
                "yOffsY": -2,
                "xOffsX": 1,
                "h": 3,
                "w": 2
            }
        },
        "45": {
            "encoding": 45,
            "sWidth": {
                "swx0": 400,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 5,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■"
            ],
            "name": "hyphen",
            "bbx": {
                "yOffsY": 3,
                "xOffsX": 0,
                "h": 1,
                "w": 4
            }
        },
        "46": {
            "encoding": 46,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                "■"
            ],
            "name": "period",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 1,
                "w": 1
            }
        },
        "47": {
            "encoding": 47,
            "sWidth": {
                "swx0": 320,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 4,
                "dwy0": 0
            },
            "bitmap": [
                "   ■",
                "   ■",
                "  ■ ",
                "  ■ ",
                " ■  ",
                " ■  ",
                " ■  ",
                "■   ",
                "■   "
            ],
            "name": "slash",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 0,
                "h": 9,
                "w": 4
            }
        },
        "48": {
            "encoding": 48,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■ ",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                " ■■■ "
            ],
            "name": "zero",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "49": {
            "encoding": 49,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "  ■",
                "■■■",
                "  ■",
                "  ■",
                "  ■",
                "  ■",
                "  ■",
                "  ■",
                "  ■"
            ],
            "name": "one",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 3
            }
        },
        "50": {
            "encoding": 50,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■ ",
                "■   ■",
                "    ■",
                "   ■ ",
                "  ■  ",
                " ■   ",
                "■    ",
                "■    ",
                "■■■■■"
            ],
            "name": "two",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "51": {
            "encoding": 51,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■ ",
                "■   ■",
                "    ■",
                "  ■■ ",
                "    ■",
                "    ■",
                "■   ■",
                "■   ■",
                " ■■■ "
            ],
            "name": "three",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "52": {
            "encoding": 52,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "    ■ ",
                "   ■■ ",
                "  ■ ■ ",
                "  ■ ■ ",
                " ■  ■ ",
                "■   ■ ",
                "■■■■■■",
                "    ■ ",
                "    ■ "
            ],
            "name": "four",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 0,
                "h": 9,
                "w": 6
            }
        },
        "53": {
            "encoding": 53,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■",
                "■    ",
                "■    ",
                "■■■■ ",
                "    ■",
                "    ■",
                "■   ■",
                "■   ■",
                " ■■■ "
            ],
            "name": "five",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "54": {
            "encoding": 54,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■ ",
                "■   ■",
                "■    ",
                "■ ■■ ",
                "■■  ■",
                "■   ■",
                "■   ■",
                "■   ■",
                " ■■■ "
            ],
            "name": "six",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "55": {
            "encoding": 55,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■",
                "    ■",
                "   ■ ",
                "   ■ ",
                "  ■  ",
                "  ■  ",
                "  ■  ",
                " ■   ",
                " ■   "
            ],
            "name": "seven",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "56": {
            "encoding": 56,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■ ",
                "■   ■",
                "■   ■",
                " ■■■ ",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                " ■■■ "
            ],
            "name": "eight",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "57": {
            "encoding": 57,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■ ",
                "■   ■",
                "■   ■",
                "■   ■",
                " ■■■■",
                "    ■",
                "    ■",
                "■   ■",
                " ■■■ "
            ],
            "name": "nine",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "58": {
            "encoding": 58,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                "■",
                " ",
                " ",
                " ",
                " ",
                "■"
            ],
            "name": "colon",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 6,
                "w": 1
            }
        },
        "59": {
            "encoding": 59,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                " ■",
                "  ",
                "  ",
                "  ",
                "  ",
                " ■",
                " ■",
                "■ "
            ],
            "name": "semicolon",
            "bbx": {
                "yOffsY": -2,
                "xOffsX": 0,
                "h": 8,
                "w": 2
            }
        },
        "60": {
            "encoding": 60,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "    ■■",
                "  ■■  ",
                "■■    ",
                "  ■■  ",
                "    ■■"
            ],
            "name": "less",
            "bbx": {
                "yOffsY": 1,
                "xOffsX": 0,
                "h": 5,
                "w": 6
            }
        },
        "61": {
            "encoding": 61,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■",
                "     ",
                "■■■■■"
            ],
            "name": "equal",
            "bbx": {
                "yOffsY": 2,
                "xOffsX": 1,
                "h": 3,
                "w": 5
            }
        },
        "62": {
            "encoding": 62,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■■    ",
                "  ■■  ",
                "    ■■",
                "  ■■  ",
                "■■    "
            ],
            "name": "greater",
            "bbx": {
                "yOffsY": 1,
                "xOffsX": 1,
                "h": 5,
                "w": 6
            }
        },
        "63": {
            "encoding": 63,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■ ",
                "■   ■",
                "■   ■",
                "   ■ ",
                "   ■ ",
                "  ■  ",
                "  ■  ",
                "     ",
                "  ■  "
            ],
            "name": "question",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "64": {
            "encoding": 64,
            "sWidth": {
                "swx0": 960,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 12,
                "dwy0": 0
            },
            "bitmap": [
                "   ■■■■■  ",
                " ■■     ■ ",
                " ■  ■■ ■ ■",
                "■  ■  ■  ■",
                "■ ■   ■  ■",
                "■ ■   ■  ■",
                "■ ■  ■■ ■ ",
                "■  ■■ ■■  ",
                " ■        ",
                "  ■■■■■   "
            ],
            "name": "at",
            "bbx": {
                "yOffsY": -1,
                "xOffsX": 1,
                "h": 10,
                "w": 10
            }
        },
        "65": {
            "encoding": 65,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "   ■   ",
                "  ■ ■  ",
                "  ■ ■  ",
                " ■   ■ ",
                " ■   ■ ",
                " ■■■■■ ",
                "■     ■",
                "■     ■",
                "■     ■"
            ],
            "name": "A",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "66": {
            "encoding": 66,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■ ",
                "■    ■",
                "■    ■",
                "■    ■",
                "■■■■■ ",
                "■    ■",
                "■    ■",
                "■    ■",
                "■■■■■ "
            ],
            "name": "B",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 6
            }
        },
        "67": {
            "encoding": 67,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "  ■■■■ ",
                " ■    ■",
                "■      ",
                "■      ",
                "■      ",
                "■      ",
                "■      ",
                " ■    ■",
                "  ■■■■ "
            ],
            "name": "C",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "68": {
            "encoding": 68,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■  ",
                "■    ■ ",
                "■     ■",
                "■     ■",
                "■     ■",
                "■     ■",
                "■     ■",
                "■    ■ ",
                "■■■■■  "
            ],
            "name": "D",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "69": {
            "encoding": 69,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■■",
                "■     ",
                "■     ",
                "■     ",
                "■■■■■■",
                "■     ",
                "■     ",
                "■     ",
                "■■■■■■"
            ],
            "name": "E",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 6
            }
        },
        "70": {
            "encoding": 70,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■■",
                "■     ",
                "■     ",
                "■     ",
                "■■■■■ ",
                "■     ",
                "■     ",
                "■     ",
                "■     "
            ],
            "name": "F",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 6
            }
        },
        "71": {
            "encoding": 71,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "  ■■■■ ",
                " ■    ■",
                "■      ",
                "■      ",
                "■   ■■■",
                "■     ■",
                "■     ■",
                " ■   ■■",
                "  ■■■ ■"
            ],
            "name": "G",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "72": {
            "encoding": 72,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "■     ■",
                "■     ■",
                "■     ■",
                "■     ■",
                "■■■■■■■",
                "■     ■",
                "■     ■",
                "■     ■",
                "■     ■"
            ],
            "name": "H",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "73": {
            "encoding": 73,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■"
            ],
            "name": "I",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 1
            }
        },
        "74": {
            "encoding": 74,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "    ■",
                "    ■",
                "    ■",
                "    ■",
                "    ■",
                "    ■",
                "■   ■",
                "■   ■",
                " ■■■ "
            ],
            "name": "J",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "75": {
            "encoding": 75,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                "■    ■ ",
                "■   ■  ",
                "■  ■   ",
                "■ ■    ",
                "■■■    ",
                "■  ■   ",
                "■   ■  ",
                "■    ■ ",
                "■     ■"
            ],
            "name": "K",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "76": {
            "encoding": 76,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■    ",
                "■    ",
                "■    ",
                "■    ",
                "■    ",
                "■    ",
                "■    ",
                "■    ",
                "■■■■■"
            ],
            "name": "L",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "77": {
            "encoding": 77,
            "sWidth": {
                "swx0": 880,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 11,
                "dwy0": 0
            },
            "bitmap": [
                "■       ■",
                "■■     ■■",
                "■■     ■■",
                "■ ■   ■ ■",
                "■ ■   ■ ■",
                "■  ■ ■  ■",
                "■  ■ ■  ■",
                "■   ■   ■",
                "■   ■   ■"
            ],
            "name": "M",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 9
            }
        },
        "78": {
            "encoding": 78,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "■     ■",
                "■■    ■",
                "■ ■   ■",
                "■ ■   ■",
                "■  ■  ■",
                "■   ■ ■",
                "■   ■ ■",
                "■    ■■",
                "■     ■"
            ],
            "name": "N",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "79": {
            "encoding": 79,
            "sWidth": {
                "swx0": 800,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 10,
                "dwy0": 0
            },
            "bitmap": [
                "  ■■■■  ",
                " ■    ■ ",
                "■      ■",
                "■      ■",
                "■      ■",
                "■      ■",
                "■      ■",
                " ■    ■ ",
                "  ■■■■  "
            ],
            "name": "O",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 8
            }
        },
        "80": {
            "encoding": 80,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■ ",
                "■    ■",
                "■    ■",
                "■    ■",
                "■■■■■ ",
                "■     ",
                "■     ",
                "■     ",
                "■     "
            ],
            "name": "P",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 6
            }
        },
        "81": {
            "encoding": 81,
            "sWidth": {
                "swx0": 800,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 10,
                "dwy0": 0
            },
            "bitmap": [
                "  ■■■■  ",
                " ■    ■ ",
                "■      ■",
                "■      ■",
                "■      ■",
                "■   ■  ■",
                "■    ■ ■",
                " ■    ■ ",
                "  ■■■■ ■"
            ],
            "name": "Q",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 8
            }
        },
        "82": {
            "encoding": 82,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■ ",
                "■    ■",
                "■    ■",
                "■    ■",
                "■■■■■ ",
                "■   ■ ",
                "■    ■",
                "■    ■",
                "■    ■"
            ],
            "name": "R",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 6
            }
        },
        "83": {
            "encoding": 83,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■■ ",
                "■    ■",
                "■     ",
                " ■■   ",
                "   ■■ ",
                "     ■",
                "■    ■",
                "■    ■",
                " ■■■■ "
            ],
            "name": "S",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 6
            }
        },
        "84": {
            "encoding": 84,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■■■",
                "   ■   ",
                "   ■   ",
                "   ■   ",
                "   ■   ",
                "   ■   ",
                "   ■   ",
                "   ■   ",
                "   ■   "
            ],
            "name": "T",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 0,
                "h": 9,
                "w": 7
            }
        },
        "85": {
            "encoding": 85,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                "■    ■",
                "■    ■",
                "■    ■",
                "■    ■",
                "■    ■",
                "■    ■",
                "■    ■",
                "■    ■",
                " ■■■■ "
            ],
            "name": "U",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 6
            }
        },
        "86": {
            "encoding": 86,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "■     ■",
                "■     ■",
                " ■   ■ ",
                " ■   ■ ",
                " ■   ■ ",
                "  ■ ■  ",
                "  ■ ■  ",
                "   ■   ",
                "   ■   "
            ],
            "name": "V",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "87": {
            "encoding": 87,
            "sWidth": {
                "swx0": 880,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 11,
                "dwy0": 0
            },
            "bitmap": [
                "■   ■   ■",
                "■   ■   ■",
                "■   ■   ■",
                " ■  ■  ■ ",
                " ■ ■ ■ ■ ",
                " ■ ■ ■ ■ ",
                "  ■   ■  ",
                "  ■   ■  ",
                "  ■   ■  "
            ],
            "name": "W",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 9
            }
        },
        "88": {
            "encoding": 88,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "■     ■",
                " ■   ■ ",
                " ■   ■ ",
                "  ■ ■  ",
                "   ■   ",
                "  ■ ■  ",
                " ■   ■ ",
                " ■   ■ ",
                "■     ■"
            ],
            "name": "X",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "89": {
            "encoding": 89,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "■     ■",
                "■     ■",
                " ■   ■ ",
                " ■   ■ ",
                "  ■ ■  ",
                "   ■   ",
                "   ■   ",
                "   ■   ",
                "   ■   "
            ],
            "name": "Y",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "90": {
            "encoding": 90,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■■■",
                "      ■",
                "     ■ ",
                "    ■  ",
                "   ■   ",
                "  ■    ",
                " ■     ",
                "■      ",
                "■■■■■■■"
            ],
            "name": "Z",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "91": {
            "encoding": 91,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                "■■",
                "■ ",
                "■ ",
                "■ ",
                "■ ",
                "■ ",
                "■ ",
                "■ ",
                "■ ",
                "■ ",
                "■ ",
                "■■"
            ],
            "name": "bracketleft",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 1,
                "h": 12,
                "w": 2
            }
        },
        "92": {
            "encoding": 92,
            "sWidth": {
                "swx0": 320,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 4,
                "dwy0": 0
            },
            "bitmap": [
                "■   ",
                "■   ",
                " ■  ",
                " ■  ",
                "  ■ ",
                "  ■ ",
                "  ■ ",
                "   ■",
                "   ■"
            ],
            "name": "backslash",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 0,
                "h": 9,
                "w": 4
            }
        },
        "93": {
            "encoding": 93,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                "■■",
                " ■",
                " ■",
                " ■",
                " ■",
                " ■",
                " ■",
                " ■",
                " ■",
                " ■",
                " ■",
                "■■"
            ],
            "name": "bracketright",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 0,
                "h": 12,
                "w": 2
            }
        },
        "94": {
            "encoding": 94,
            "sWidth": {
                "swx0": 480,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 6,
                "dwy0": 0
            },
            "bitmap": [
                "  ■  ",
                " ■ ■ ",
                "■   ■"
            ],
            "name": "asciicircum",
            "bbx": {
                "yOffsY": 5,
                "xOffsX": 0,
                "h": 3,
                "w": 5
            }
        },
        "95": {
            "encoding": 95,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■■■"
            ],
            "name": "underscore",
            "bbx": {
                "yOffsY": -2,
                "xOffsX": 0,
                "h": 1,
                "w": 7
            }
        },
        "96": {
            "encoding": 96,
            "sWidth": {
                "swx0": 160,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 2,
                "dwy0": 0
            },
            "bitmap": [
                "■ ",
                " ■"
            ],
            "name": "grave",
            "bbx": {
                "yOffsY": 8,
                "xOffsX": 0,
                "h": 2,
                "w": 2
            }
        },
        "97": {
            "encoding": 97,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■  ",
                "■   ■ ",
                "    ■ ",
                " ■■■■ ",
                "■   ■ ",
                "■   ■ ",
                " ■■■ ■"
            ],
            "name": "a",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 6
            }
        },
        "98": {
            "encoding": 98,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■    ",
                "■    ",
                "■ ■■ ",
                "■■  ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■■  ■",
                "■ ■■ "
            ],
            "name": "b",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "99": {
            "encoding": 99,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■ ",
                "■   ■",
                "■    ",
                "■    ",
                "■    ",
                "■   ■",
                " ■■■ "
            ],
            "name": "c",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 5
            }
        },
        "100": {
            "encoding": 100,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "    ■",
                "    ■",
                " ■■ ■",
                "■  ■■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■  ■■",
                " ■■ ■"
            ],
            "name": "d",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "101": {
            "encoding": 101,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■ ",
                "■   ■",
                "■   ■",
                "■■■■■",
                "■    ",
                "■   ■",
                " ■■■ "
            ],
            "name": "e",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 5
            }
        },
        "102": {
            "encoding": 102,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                "  ■■",
                " ■  ",
                "■■■ ",
                " ■  ",
                " ■  ",
                " ■  ",
                " ■  ",
                " ■  ",
                " ■  "
            ],
            "name": "f",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 0,
                "h": 9,
                "w": 4
            }
        },
        "103": {
            "encoding": 103,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■ ■",
                "■  ■■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■  ■■",
                " ■■ ■",
                "    ■",
                "■   ■",
                " ■■■ "
            ],
            "name": "g",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 1,
                "h": 10,
                "w": 5
            }
        },
        "104": {
            "encoding": 104,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■    ",
                "■    ",
                "■ ■■ ",
                "■■  ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■"
            ],
            "name": "h",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "105": {
            "encoding": 105,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                "■",
                " ",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■"
            ],
            "name": "i",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 1
            }
        },
        "106": {
            "encoding": 106,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                " ■",
                "  ",
                " ■",
                " ■",
                " ■",
                " ■",
                " ■",
                " ■",
                " ■",
                " ■",
                " ■",
                "■ "
            ],
            "name": "j",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 0,
                "h": 12,
                "w": 2
            }
        },
        "107": {
            "encoding": 107,
            "sWidth": {
                "swx0": 480,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 6,
                "dwy0": 0
            },
            "bitmap": [
                "■    ",
                "■    ",
                "■  ■ ",
                "■ ■  ",
                "■■   ",
                "■■   ",
                "■ ■  ",
                "■  ■ ",
                "■   ■"
            ],
            "name": "k",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "108": {
            "encoding": 108,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■"
            ],
            "name": "l",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 1
            }
        },
        "109": {
            "encoding": 109,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "■ ■  ■ ",
                "■■ ■■ ■",
                "■  ■  ■",
                "■  ■  ■",
                "■  ■  ■",
                "■  ■  ■",
                "■  ■  ■"
            ],
            "name": "m",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 7
            }
        },
        "110": {
            "encoding": 110,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■ ■■ ",
                "■■  ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■"
            ],
            "name": "n",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 5
            }
        },
        "111": {
            "encoding": 111,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■ ",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                " ■■■ "
            ],
            "name": "o",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 5
            }
        },
        "112": {
            "encoding": 112,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■ ■■ ",
                "■■  ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■■  ■",
                "■ ■■ ",
                "■    ",
                "■    ",
                "■    "
            ],
            "name": "p",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 1,
                "h": 10,
                "w": 5
            }
        },
        "113": {
            "encoding": 113,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■ ■",
                "■  ■■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■  ■■",
                " ■■ ■",
                "    ■",
                "    ■",
                "    ■"
            ],
            "name": "q",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 1,
                "h": 10,
                "w": 5
            }
        },
        "114": {
            "encoding": 114,
            "sWidth": {
                "swx0": 320,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 4,
                "dwy0": 0
            },
            "bitmap": [
                "■ ■",
                "■■ ",
                "■  ",
                "■  ",
                "■  ",
                "■  ",
                "■  "
            ],
            "name": "r",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 3
            }
        },
        "115": {
            "encoding": 115,
            "sWidth": {
                "swx0": 480,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 6,
                "dwy0": 0
            },
            "bitmap": [
                " ■■ ",
                "■  ■",
                "■   ",
                " ■■ ",
                "   ■",
                "■  ■",
                " ■■ "
            ],
            "name": "s",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 4
            }
        },
        "116": {
            "encoding": 116,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                " ■ ",
                " ■ ",
                "■■■",
                " ■ ",
                " ■ ",
                " ■ ",
                " ■ ",
                " ■ ",
                " ■■"
            ],
            "name": "t",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 0,
                "h": 9,
                "w": 3
            }
        },
        "117": {
            "encoding": 117,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■  ■■",
                " ■■ ■"
            ],
            "name": "u",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 5
            }
        },
        "118": {
            "encoding": 118,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■   ■",
                "■   ■",
                "■   ■",
                " ■ ■ ",
                " ■ ■ ",
                "  ■  ",
                "  ■  "
            ],
            "name": "v",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 5
            }
        },
        "119": {
            "encoding": 119,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "■   ■   ■",
                "■   ■   ■",
                " ■  ■  ■ ",
                " ■  ■  ■ ",
                " ■ ■ ■ ■ ",
                "  ■   ■  ",
                "  ■   ■  "
            ],
            "name": "w",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 0,
                "h": 7,
                "w": 9
            }
        },
        "120": {
            "encoding": 120,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                "■    ■",
                " ■  ■ ",
                "  ■■  ",
                "  ■■  ",
                " ■  ■ ",
                "■    ■",
                "■    ■"
            ],
            "name": "x",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 6
            }
        },
        "121": {
            "encoding": 121,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "■   ■",
                "■   ■",
                "■   ■",
                "■  ■ ",
                " ■ ■ ",
                " ■ ■ ",
                "  ■  ",
                "  ■  ",
                " ■   ",
                "■    "
            ],
            "name": "y",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 1,
                "h": 10,
                "w": 5
            }
        },
        "122": {
            "encoding": 122,
            "sWidth": {
                "swx0": 480,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 6,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■",
                "   ■",
                "  ■ ",
                " ■  ",
                " ■  ",
                "■   ",
                "■■■■"
            ],
            "name": "z",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 7,
                "w": 4
            }
        },
        "123": {
            "encoding": 123,
            "sWidth": {
                "swx0": 320,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 4,
                "dwy0": 0
            },
            "bitmap": [
                "  ■■",
                " ■  ",
                " ■  ",
                " ■  ",
                " ■  ",
                "■   ",
                " ■  ",
                " ■  ",
                " ■  ",
                " ■  ",
                " ■  ",
                "  ■■"
            ],
            "name": "braceleft",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 0,
                "h": 12,
                "w": 4
            }
        },
        "124": {
            "encoding": 124,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■",
                "■"
            ],
            "name": "bar",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 1,
                "h": 12,
                "w": 1
            }
        },
        "125": {
            "encoding": 125,
            "sWidth": {
                "swx0": 320,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 4,
                "dwy0": 0
            },
            "bitmap": [
                "■■  ",
                "  ■ ",
                "  ■ ",
                "  ■ ",
                "  ■ ",
                "   ■",
                "  ■ ",
                "  ■ ",
                "  ■ ",
                "  ■ ",
                "  ■ ",
                "■■  "
            ],
            "name": "braceright",
            "bbx": {
                "yOffsY": -3,
                "xOffsX": 0,
                "h": 12,
                "w": 4
            }
        },
        "126": {
            "encoding": 126,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■  ■",
                "■  ■■ "
            ],
            "name": "asciitilde",
            "bbx": {
                "yOffsY": 3,
                "xOffsX": 0,
                "h": 2,
                "w": 6
            }
        },
        "211": {
            "encoding": 211,
            "sWidth": {
                "swx0": 800,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 10,
                "dwy0": 0
            },
            "bitmap": [
                "     ■  ",
                "    ■   ",
                "        ",
                "  ■■■■  ",
                " ■    ■ ",
                "■      ■",
                "■      ■",
                "■      ■",
                "■      ■",
                "■      ■",
                " ■    ■ ",
                "  ■■■■  "
            ],
            "name": "Oacute",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 12,
                "w": 8
            }
        },
        "243": {
            "encoding": 243,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "   ■ ",
                "  ■  ",
                "     ",
                " ■■■ ",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                " ■■■ "
            ],
            "name": "oacute",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 10,
                "w": 5
            }
        },
        "260": {
            "encoding": 260,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "   ■    ",
                "   ■    ",
                "  ■ ■   ",
                " ■   ■  ",
                " ■   ■  ",
                " ■■■■■  ",
                "■     ■ ",
                "■     ■ ",
                "■    ■  ",
                "     ■ ■",
                "      ■ "
            ],
            "name": "Aogonek",
            "bbx": {
                "yOffsY": -2,
                "xOffsX": 1,
                "h": 11,
                "w": 8
            }
        },
        "261": {
            "encoding": 261,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■   ",
                "■   ■  ",
                "    ■  ",
                " ■■■■  ",
                "■   ■  ",
                "■   ■  ",
                " ■■■■  ",
                "    ■ ■",
                "     ■ "
            ],
            "name": "aogonek",
            "bbx": {
                "yOffsY": -2,
                "xOffsX": 1,
                "h": 9,
                "w": 7
            }
        },
        "262": {
            "encoding": 262,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "    ■  ",
                "   ■   ",
                "       ",
                "  ■■■■ ",
                " ■    ■",
                "■      ",
                "■      ",
                "■      ",
                "■      ",
                "■      ",
                " ■    ■",
                "  ■■■■ "
            ],
            "name": "Cacute",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 12,
                "w": 7
            }
        },
        "263": {
            "encoding": 263,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "   ■ ",
                "  ■  ",
                "     ",
                " ■■■ ",
                "■   ■",
                "■    ",
                "■    ",
                "■    ",
                "■   ■",
                " ■■■ "
            ],
            "name": "cacute",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 10,
                "w": 5
            }
        },
        "280": {
            "encoding": 280,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                "■■■■■■",
                "■     ",
                "■     ",
                "■     ",
                "■■■■■■",
                "■     ",
                "■     ",
                "■     ",
                "■■■■■■",
                "  ■   ",
                "  ■■  "
            ],
            "name": "Eogonek",
            "bbx": {
                "yOffsY": -2,
                "xOffsX": 1,
                "h": 11,
                "w": 6
            }
        },
        "281": {
            "encoding": 281,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■■■ ",
                "■   ■",
                "■   ■",
                "■■■■■",
                "■    ",
                "■   ■",
                " ■■■ ",
                "  ■  ",
                "  ■■ "
            ],
            "name": "eogonek",
            "bbx": {
                "yOffsY": -2,
                "xOffsX": 1,
                "h": 9,
                "w": 5
            }
        },
        "321": {
            "encoding": 321,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                " ■    ",
                " ■    ",
                " ■ ■  ",
                " ■■   ",
                "■■    ",
                " ■    ",
                " ■    ",
                " ■    ",
                " ■■■■■"
            ],
            "name": "Lslash",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 0,
                "h": 9,
                "w": 6
            }
        },
        "322": {
            "encoding": 322,
            "sWidth": {
                "swx0": 240,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 3,
                "dwy0": 0
            },
            "bitmap": [
                " ■ ",
                " ■ ",
                " ■ ",
                " ■■",
                "■■ ",
                " ■ ",
                " ■ ",
                " ■ ",
                " ■ "
            ],
            "name": "lslash",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 0,
                "h": 9,
                "w": 3
            }
        },
        "323": {
            "encoding": 323,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "    ■  ",
                "   ■   ",
                "       ",
                "■     ■",
                "■■    ■",
                "■ ■   ■",
                "■ ■   ■",
                "■  ■  ■",
                "■   ■ ■",
                "■   ■ ■",
                "■    ■■",
                "■     ■"
            ],
            "name": "Nacute",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 12,
                "w": 7
            }
        },
        "324": {
            "encoding": 324,
            "sWidth": {
                "swx0": 560,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 7,
                "dwy0": 0
            },
            "bitmap": [
                "   ■ ",
                "  ■  ",
                "     ",
                "■ ■■ ",
                "■■  ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■",
                "■   ■"
            ],
            "name": "nacute",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 10,
                "w": 5
            }
        },
        "346": {
            "encoding": 346,
            "sWidth": {
                "swx0": 640,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 8,
                "dwy0": 0
            },
            "bitmap": [
                "   ■  ",
                "  ■   ",
                "      ",
                " ■■■■ ",
                "■    ■",
                "■     ",
                " ■■   ",
                "   ■■ ",
                "     ■",
                "■    ■",
                "■    ■",
                " ■■■■ "
            ],
            "name": "Sacute",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 12,
                "w": 6
            }
        },
        "347": {
            "encoding": 347,
            "sWidth": {
                "swx0": 480,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 6,
                "dwy0": 0
            },
            "bitmap": [
                "  ■ ",
                " ■  ",
                "    ",
                " ■■ ",
                "■  ■",
                "■   ",
                " ■■ ",
                "   ■",
                "■  ■",
                " ■■ "
            ],
            "name": "sacute",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 10,
                "w": 4
            }
        },
        "377": {
            "encoding": 377,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "    ■  ",
                "   ■   ",
                "       ",
                "■■■■■■■",
                "      ■",
                "     ■ ",
                "    ■  ",
                "   ■   ",
                "  ■    ",
                " ■     ",
                "■      ",
                "■■■■■■■"
            ],
            "name": "Zacute",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 12,
                "w": 7
            }
        },
        "378": {
            "encoding": 378,
            "sWidth": {
                "swx0": 480,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 6,
                "dwy0": 0
            },
            "bitmap": [
                "  ■ ",
                " ■  ",
                "    ",
                "■■■■",
                "   ■",
                "  ■ ",
                " ■  ",
                " ■  ",
                "■   ",
                "■■■■"
            ],
            "name": "zacute",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 10,
                "w": 4
            }
        },
        "379": {
            "encoding": 379,
            "sWidth": {
                "swx0": 720,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 9,
                "dwy0": 0
            },
            "bitmap": [
                "   ■   ",
                "       ",
                "■■■■■■■",
                "      ■",
                "     ■ ",
                "    ■  ",
                "   ■   ",
                "  ■    ",
                " ■     ",
                "■      ",
                "■■■■■■■"
            ],
            "name": "Zdotaccent",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 11,
                "w": 7
            }
        },
        "380": {
            "encoding": 380,
            "sWidth": {
                "swx0": 480,
                "swy0": 0
            },
            "dWidth": {
                "dwx0": 6,
                "dwy0": 0
            },
            "bitmap": [
                " ■  ",
                "    ",
                "■■■■",
                "   ■",
                "  ■ ",
                " ■  ",
                " ■  ",
                "■   ",
                "■■■■"
            ],
            "name": "zdotaccent",
            "bbx": {
                "yOffsY": 0,
                "xOffsX": 1,
                "h": 9,
                "w": 4
            }
        }
    },
    "version": "2.1"
}


describe('print1Bit', () => {
    it('Hi!', () => {
        expect(Array.from(print1Bit(font, 14, 32, 'Hi!').values())).toEqual([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            65,
            36,
            0,
            0,
            65,
            4,
            0,
            0,
            65,
            36,
            0,
            0,
            65,
            36,
            0,
            0,
            127,
            36,
            0,
            0,
            65,
            36,
            0,
            0,
            65,
            36,
            0,
            0,
            65,
            32,
            0,
            0,
            65,
            36,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ])
    })

    it('Ćąęś', () => {
        expect(Array.from(print1Bit(font, 14, 32, 'Ćąęś.').values())).toEqual([
            8,
            0,
            0,
            0,
            0,
            0,
            0,
            16,
            30,
            0,
            0,
            32,
            33,
            0,
            0,
            0,
            64,
            28,
            28,
            48,
            64,
            34,
            34,
            72,
            64,
            2,
            34,
            64,
            64,
            30,
            62,
            48,
            64,
            34,
            32,
            8,
            33,
            34,
            34,
            72,
            30,
            30,
            28,
            49,
            0,
            2,
            136,
            0,
            0,
            1,
            12,
            0,
            0,
            0,
            0,
            0,
        
        ])
    })

    it('Hello!', () => {
        expect(Array.from(print1Bit(font, 14, 32, 'Hello!').values())).toEqual([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            65,
            0,
            72,
            2,
            65,
            0,
            72,
            2,
            65,
            28,
            72,
            226,
            65,
            34,
            73,
            18,
            127,
            34,
            73,
            18,
            65,
            62,
            73,
            18,
            65,
            32,
            73,
            18,
            65,
            34,
            73,
            16,
            65,
            28,
            72,
            226,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ])
    })
})