"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStringWithComma = exports.isValidIntRange = exports.isValid = exports.isNumber = void 0;

var isNumber = function isNumber(value) {
  return value && Number.isInteger(+value);
};

exports.isNumber = isNumber;

var isValid = function isValid(value) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return !!value && (!maxLength || value.length <= maxLength);
};

exports.isValid = isValid;

var isValidIntRange = function isValidIntRange(value) {
  if (!value) {
    return false;
  }

  var integerValues = value.split('-');

  if (integerValues.length !== 2) {
    return false;
  }

  return isNumber(integerValues[0]) && isNumber(integerValues[1]) && +integerValues[0] <= +integerValues[1];
};

exports.isValidIntRange = isValidIntRange;

var isStringWithComma = function isStringWithComma(value) {
  if (!value || typeof value !== 'string') {
    return false;
  }

  return value.indexOf(',') > -1;
};

exports.isStringWithComma = isStringWithComma;