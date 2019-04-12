// Make sure default strings are not broken
const defaultString = "<div>Something</div>"

// Check single-line HTML highlighting
const singleLine = `<div>${div}Something</div>`
const singleLineObj = {
    prop: func(`<div>Something</div>`),
    noHTML: `nohtml`
}

// Lits
const temp = lit`
    <div>something</div>
`

// Check multiline HTML highlighting
const multiline = 
`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        Hello, world ${ variable }
        ${ test() }
    </body>
    </html>
`

const multilineObj = {
    prop: `<div att="adsasd"> ${ test() }</div>
    `,
    noHTML: 'nothml'
}

// Check functions
const checkFn = (`<div attr="value">Message</div>`.toUpperCase())

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