// Make sure default strings are not broken
const defaultString1 = "<div>Something</div>"
const defaultString2 = `String`
const defaultString3 = `
asdadasdadasdasdasdasdasdasdasd
asdasdadad
<div
  attr="value"
  asdasd="asdasdasd"
>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    Hello, world
    <div>
      Is there something to do?
    </div>
</body>
</html>
`

const defaultString4 = `
  nothing to highlight
`

const value = `Nothing can be here`
const value2 = `<div>Something</div>`

const defaultString4 = `
  <div attribute attribute="value" lastattr>asdasd</div>
`

// Check single-line HTML highlighting
const singleLine = `<div>${div}Something</div>`
const singleLineObj = {
    prop: func(`<div attr="adasd">asdasd</div>`),
    noHTML: `nohtml`
}

callFn(
    "arg",
    `<div attr="asdasd">Value</div>`
)

// Lits
const temp = lit`
    <div>something</div>
`

const anon = () => `<div>Value</div>`

// Check multiline HTML highlighting
const multiline = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        Hello, world <span attr="value">Something</span>
    </body>
    </html>
`

const multilineObj = {
    prop: `
        <div att="adsasd"> ${ test() }</div>
    `
}

// Check functions
const checkFn = temp(`<div attr="value">Message</div>`)

// Misc
function test() {
    const result = true
    return result
}

const stress1 = `asdasdasd`
const stress2 = `<no>asd<div attr="asdad"></div>adasd</no>`
const stress3 = `<no> ${ test('asdasd') } </no>`

function test() {
    const result = (
        true
    )
    return result
}

const testSQL = /* sql */`
    -- THIS FILE SHOWS EXAMPLE SYNTAX HIGHLIGHTING
    -- FOR SQL
    INSERT INTO database.table (1, 2, 3) VALUES (1, 2, 3);
    CREATE TABLE mytable;
    DELETE FROM mytable WHERE id = 2
`

/*
        {
          "name": "string.quoted.template.js",
          "match": "^\\s*([^\\<]*)\\s*$"
        },
        
 {
  "fileTypes": [
    "js",
    "jsx",
    "ts",
    "tsx",
    "html"
  ],
  "injectionSelector": "L:source.js -comment -string, L:source.js -comment -string, L:source.jsx -comment -string,  L:source.js.jsx -comment -string, L:source.ts -comment -string, L:source.tsx -comment -string",
  "injections": {
    "L:source": {
      "patterns": [
        {
          "match": "<",
          "name": "invalid.illegal.bad-angle-bracket.html"
        }
      ]
    }
  },
  "patterns": [
    {
      "comment": "Single line strings",
      "begin": "(\\=|\\:|\\,|\\>)\\s*(`)$",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.assignment.js"
        },
        "2": {
          "name": "string.quoted.template.js"
        }
      },
      "end": "\\s*(`)($)",
      "endCaptures": {
        "1": {
          "name": "string.quoted.template.js"
        }
      },
      "patterns": [
        {
          "comment": "It's matches only tags but not anything inside",
          "begin": "(<\/?)\\!?(\\w[^\\s>]*)(?<!/)",
          "end": "((?: ?/)?>)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.tag.begin.html"
            },
            "2": {
              "name": "entity.name.tag.html"
            }
          },
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.tag.end.html"
            }
          },
          "patterns": [
            {
              "include": "text.html.basic#attribute"
            }
          ]
        }
      ]
    }
  ],
  "scopeName": "inline.es6-html"
}
*/