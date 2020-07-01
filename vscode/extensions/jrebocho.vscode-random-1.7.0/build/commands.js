"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extensionExecCommands = exports.extensionCommandsWithInput = exports.extensionCommands = void 0;

var _random = require("./random");

var _validations = require("./validations");

var constants = _interopRequireWildcard(require("./constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var extensionCommands = [{
  key: constants.CMD_KEY_RANDOM_BYTE,
  callback: _random.randomByte
}, {
  key: constants.CMD_KEY_RANDOM_SHORT,
  callback: _random.randomShort
}, {
  key: constants.CMD_KEY_RANDOM_INT,
  callback: _random.randomInt
}, {
  key: constants.CMD_KEY_RANDOM_LONG,
  callback: _random.randomLong
}, {
  key: constants.CMD_KEY_RANDOM_GUID,
  callback: _random.randomGuid
}, {
  key: constants.CMD_KEY_RANDOM_NAME,
  callback: _random.randomName
}, {
  key: constants.CMD_KEY_RANDOM_CITY,
  callback: _random.randomCity
}, {
  key: constants.CMD_KEY_RANDOM_COUNTRY_CODE,
  callback: _random.randomCountryCode
}, {
  key: constants.CMD_KEY_RANDOM_COUNTRY_NAME,
  callback: _random.randomCountryName
}, {
  key: constants.CMD_KEY_RANDOM_STREET_ADDRESS,
  callback: _random.randomStreetAddress
}, {
  key: constants.CMD_KEY_RANDOM_PHONE_NUMBER,
  callback: _random.randomPhoneNumber
}, {
  key: constants.CMD_KEY_RANDOM_EMAIL,
  callback: _random.randomEmail
}, {
  key: constants.CMD_KEY_RANDOM_IP,
  callback: _random.randomIP
}, {
  key: constants.CMD_KEY_RANDOM_IP_V6,
  callback: _random.randomIPv6
}, {
  key: constants.CMD_KEY_RANDOM_URL,
  callback: _random.randomUrl
}, {
  key: constants.CMD_KEY_RANDOM_HEX_COLOR,
  callback: _random.randomHexColor
}, {
  key: constants.CMD_KEY_RANDOM_RGB_COLOR,
  callback: _random.randomRgbColor
}, {
  key: constants.CMD_KEY_RANDOM_IBAN,
  callback: _random.randomIban
}];
exports.extensionCommands = extensionCommands;
var extensionCommandsWithInput = [{
  key: constants.CMD_KEY_RANDOM_STRING_CUSTOM_LENGTH,
  callback: _random.randomString,
  prompt: constants.MSG_ENTER_STRING_LENGTH,
  validation: _validations.isNumber,
  errorMsg: constants.MSG_INPUT_VALUE_MUST_BE_NUMBER
}, {
  key: constants.CMD_KEY_RANDOM_INTEGER_CUSTOM_RANGE,
  callback: _random.randomIntCustomRange,
  prompt: constants.MSG_ENTER_INTEGER_RANGE,
  placeHolder: constants.MSG_INTEGER_RANGE_FORMAT,
  validation: _validations.isValidIntRange,
  errorMsg: constants.MSG_INPUT_VALUE_MUST_BE_VALID_RANGE
}, {
  key: constants.CMD_KEY_RANDOM_SAMPLE_FROM_INPUT,
  callback: _random.randomSample,
  prompt: constants.MSG_ENTER_SAMPLE_INPUT,
  validation: _validations.isStringWithComma,
  errorMsg: constants.MSG_INPUT_VALUE_MUST_CONTAIN_COMMA
}];
exports.extensionCommandsWithInput = extensionCommandsWithInput;
var extensionExecCommands = [{
  key: constants.CMD_KEY_RESET_SEED,
  callback: _random.resetSeed,
  prompt: constants.MSG_ENTER_SEED,
  placeHolder: constants.MSG_LEAVE_EMPTY_FOR_DEFAULT,
  errorMsg: constants.MSG_SEED_RESET_ERROR,
  infoMsg: constants.MSG_SEED_RESET
}];
exports.extensionExecCommands = extensionExecCommands;