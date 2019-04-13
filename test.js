// Make sure default strings are not broken
const defaultString1 = "<div>Something</div>"
const defaultString2 = `String`
const defaultString3 = `
asdasd asd asdas dasdasdasd '"adasjk()909 0a9sd09a sdasjkdhksja dhs
  asdasd
asdasd
  'string'
  "string"
  <div class="asdasd">value</div>
`

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
        Hello, world
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

const stress1 = `>no ${something} n<HTM>LVariable`
const stress2 = `<no test('asdasd') } </no>`
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
          "begin": "(\\b)",
          "end": "(\\b)",
          "patterns": [
            {
              "include": "string.quoted.template.js"
            }
          ]
        },
,
        {
          "begin": "^\\s*(<\/?)(\\w[^\\s>]*)(?<!/)",
          "end": "((?: ?/)?>)\\s*$",
          "patterns": [
            {
              "include": "text.html.basic#attribute"
            }
          ]
        }
*/