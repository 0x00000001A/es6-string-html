# ES6 String HTML 
> [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)

> [Open VSX Registry](https://open-vsx.org/extension/Tobermory/es6-string-html)

Adds syntax highlight support for code, placed in es6 multiline strings:
- HTML (incl. html quoted and unquoted attrs)
- SQL
- XML
- SVG
- CSS
- GLSL
- JavaScript/TypeScript

## Community
- [python-string-sql](https://github.com/ptweir/python-string-sql) - Highlight SQL code in python multiline strings
- [es6-string-javascript](https://github.com/Zjcompt/es6-string-javascript) - Highlight JS in multiline strings

## Contributors
[![guicook](https://img.shields.io/badge/gucook-❤-brightgreen)](https://github.com/guycook)
[![RobertSasak](https://img.shields.io/badge/RobertSasak-❤-brightgreen)](https://github.com/RobertSasak)
[![the-dr-lazy](https://img.shields.io/badge/the--dr--lazy-❤-brightgreen)](https://github.com/the-dr-lazy)
[![yozman](https://img.shields.io/badge/yozman-❤-brightgreen)](https://github.com/yozman)
[![JohnnyLufa](https://img.shields.io/badge/JohnnyLufa-❤-brighten)](https://github.com/JohnnyLufa)

## Installation

- Install `es6-string-html` from extensions (`ctrl + shift + x`)
- Or download it from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)
- Or download it from the [Open VSX Registry](https://open-vsx.org/extension/Tobermory/es6-string-html)

## Donation

If you've found this extension useful, you can give me a cup of coffee :)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/nonholy)       

## Example

![Example](docs/demo.png)

## Usage

Simply insert the comment /\*html\*/ or `html` (also works with SQL, SVG, XML, just use the appropriate word) before the string
(see Requirements "section" for possible values) or select
`Insert es6-string-html comment/template` from the commands menu
(`ctrl+shift+p` or `f1`)

> Tip: Comment in the beginning of es6 string is required

## Requirements

- Visual Studio Code v1.19.0 and higher
- Comment `/*html*/` before the string. (also works with CSS, SQL, SVG, XML, JavaScript, just use the appropriate word) Possible values:
- - `/*css*/`
- - `/*html*/`
- - `/*inline-html*/`
- - `/*template*/`
- - `/*inline-template*/`
- - `/*javascript*/` or `/*js*/`
- - `/*typescript*/` or `/*ts*/`
- Or
- - `html` before the string

## Release Notes

### [...]
- See changelog for previous notes

### [2.7.0] - 2021-04-23
## Fixed
- SQL highlight stops after encountering an identifier delimiter `

### [2.8.0] - 2021-04-23
## Fixed
- SQL support for vue files

### [2.9.0] - 2021-05-18
## Improved
- CSS support

### [2.10.0] - 2021-06-03
## Improved
- GLSL support

### [2.11.0] - 2021-10-05
## Improved
- PHP files support
-----------------------------------------------------------------------------------------------------------

**Enjoy!**
