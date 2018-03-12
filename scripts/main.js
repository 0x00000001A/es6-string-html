'use strict';

var vscode = require('vscode')

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("es6stringhtml.insertComment", () => insertString()),
    vscode.commands.registerCommand("es6stringhtml.insertTemplate", () => insertString(true)),
  )
}

function deactivate() {
  // nothing to dispose
}

/**
 * Insert comment or comment with string in editor
 * @param {boolean} full
 */
function insertString (full) {
  const string = full ? '/*html*/ ``' : '/*html*/'
  const editor = vscode.window.activeTextEditor
  const selections = editor.selections

  editor.edit((editBuilder) => {
    selections.forEach((selection) => {
      editBuilder.replace(selection, '')
      editBuilder.insert(selection.active, string)
    })
  })
}

module.exports = {
  activate: activate,
  deactivate: deactivate
}
