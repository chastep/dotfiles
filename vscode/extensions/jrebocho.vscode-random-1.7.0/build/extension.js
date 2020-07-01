"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activate = void 0;

var _commands = require("./commands");

var _vscodeUtils = require("./vscodeUtils");

var activate = function activate(context) {
  _commands.extensionCommands.map(function (cmd) {
    return (0, _vscodeUtils.registerCommandsOutput)(context, cmd);
  });

  _commands.extensionCommandsWithInput.map(function (cmd) {
    return (0, _vscodeUtils.registerCommandsInputOutput)(context, cmd);
  });

  _commands.extensionExecCommands.map(function (cmd) {
    return (0, _vscodeUtils.registerCommandsInput)(context, cmd);
  });
};

exports.activate = activate;