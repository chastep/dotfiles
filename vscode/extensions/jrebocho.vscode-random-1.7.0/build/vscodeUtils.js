"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerCommandsInput = exports.registerCommandsInputOutput = exports.registerCommandsOutput = void 0;

var _vscode = require("vscode");

var _constants = require("./constants");

var registerCommandsOutput = function registerCommandsOutput(context, cmd) {
  context.subscriptions.push(_vscode.commands.registerCommand(cmd.key, function () {
    return editorInsert(cmd.callback);
  }));
};

exports.registerCommandsOutput = registerCommandsOutput;

var registerCommandsInputOutput = function registerCommandsInputOutput(context, cmd) {
  context.subscriptions.push(_vscode.commands.registerCommand(cmd.key, function () {
    return _vscode.window.showInputBox({
      prompt: cmd.prompt,
      placeHolder: !cmd.placeHolder ? '' : cmd.placeHolder
    }).then(function (inputValue) {
      if (!cmd.validation || cmd.validation(inputValue)) {
        editorInsert(cmd.callback, {
          inputValue: inputValue
        });
      } else {
        _vscode.window.showErrorMessage(cmd.errorMsg);
      }
    });
  }));
};

exports.registerCommandsInputOutput = registerCommandsInputOutput;

var registerCommandsInput = function registerCommandsInput(context, cmd) {
  context.subscriptions.push(_vscode.commands.registerCommand(cmd.key, function () {
    return _vscode.window.showInputBox({
      prompt: cmd.prompt,
      placeHolder: !cmd.placeHolder ? '' : cmd.placeHolder
    }).then(function (inputValue) {
      if (!cmd.validation || cmd.validation(inputValue)) {
        cmd.callback(inputValue);

        if (cmd.infoMsg) {
          _vscode.window.showInformationMessage(cmd.infoMsg);
        }
      } else {
        _vscode.window.showErrorMessage(cmd.errorMsg);
      }
    });
  }));
};

exports.registerCommandsInput = registerCommandsInput;

var editorInsert = function editorInsert(generator) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var editor = _vscode.window.activeTextEditor;

  if (!editor) {
    _vscode.window.showErrorMessage(_constants.MSG_NO_ACTIVE_TEXT_EDITOR);

    return;
  }

  var newSelections = [];
  editor.edit(function (builder) {
    editor.selections.map(function (selection) {
      var text = generator(params);
      builder.replace(selection, text);
      newSelections.push(getEndPosition(selection, text));
    });
  }).then(function () {
    editor.selections = newSelections;
  });
};

var getEndPosition = function getEndPosition(selection, text) {
  var endPosition = new _vscode.Position(selection.start.line, selection.start.character + text.length);
  return new _vscode.Selection(endPosition, endPosition);
};