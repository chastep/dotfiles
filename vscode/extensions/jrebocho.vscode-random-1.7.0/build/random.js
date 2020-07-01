"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomIban = exports.randomRgbColor = exports.randomHexColor = exports.randomUrl = exports.randomIPv6 = exports.randomIP = exports.randomEmail = exports.randomPhoneNumber = exports.randomCountryName = exports.randomCountryCode = exports.randomCity = exports.randomStreetAddress = exports.randomName = exports.randomSample = exports.randomString = exports.randomGuid = exports.randomIntCustomRange = exports.randomLong = exports.randomInt = exports.randomShort = exports.randomByte = exports.resetSeed = void 0;

var _chance = _interopRequireDefault(require("chance"));

var _validations = require("./validations");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var chanceInstance = new _chance["default"]();

var resetSeed = function resetSeed(seed) {
  chanceInstance = (0, _validations.isValid)(seed) ? new _chance["default"](seed) : new _chance["default"]();
};

exports.resetSeed = resetSeed;

var randomByte = function randomByte(_ref) {
  var _ref$chance = _ref.chance,
      chance = _ref$chance === void 0 ? chanceInstance : _ref$chance;
  return chance.natural({
    max: 255
  }).toString();
};

exports.randomByte = randomByte;

var randomShort = function randomShort(_ref2) {
  var _ref2$chance = _ref2.chance,
      chance = _ref2$chance === void 0 ? chanceInstance : _ref2$chance;
  return chance.natural({
    max: 65535
  }).toString();
};

exports.randomShort = randomShort;

var randomInt = function randomInt(_ref3) {
  var _ref3$chance = _ref3.chance,
      chance = _ref3$chance === void 0 ? chanceInstance : _ref3$chance;
  return chance.natural({
    max: 4294967295
  }).toString();
};

exports.randomInt = randomInt;

var randomLong = function randomLong(_ref4) {
  var _ref4$chance = _ref4.chance,
      chance = _ref4$chance === void 0 ? chanceInstance : _ref4$chance;
  return chance.natural().toString();
};

exports.randomLong = randomLong;

var randomIntCustomRange = function randomIntCustomRange(_ref5) {
  var _ref5$chance = _ref5.chance,
      chance = _ref5$chance === void 0 ? chanceInstance : _ref5$chance,
      inputValue = _ref5.inputValue;
  var rangeLimits = inputValue.split('-');
  return chance.natural({
    min: +rangeLimits[0],
    max: +rangeLimits[1]
  }).toString();
};

exports.randomIntCustomRange = randomIntCustomRange;

var randomGuid = function randomGuid(_ref6) {
  var _ref6$chance = _ref6.chance,
      chance = _ref6$chance === void 0 ? chanceInstance : _ref6$chance;
  return chance.guid();
};

exports.randomGuid = randomGuid;

var randomString = function randomString(_ref7) {
  var _ref7$chance = _ref7.chance,
      chance = _ref7$chance === void 0 ? chanceInstance : _ref7$chance,
      _ref7$inputValue = _ref7.inputValue,
      inputValue = _ref7$inputValue === void 0 ? _constants.VALUE_DEFAULT_STRING_LENGTH : _ref7$inputValue;
  return chance.word({
    length: inputValue
  });
};

exports.randomString = randomString;

var randomSample = function randomSample(_ref8) {
  var _ref8$chance = _ref8.chance,
      chance = _ref8$chance === void 0 ? chanceInstance : _ref8$chance,
      _ref8$inputValue = _ref8.inputValue,
      inputValue = _ref8$inputValue === void 0 ? _constants.VALUE_DEFAULT_SAMPLE_OPTIONS : _ref8$inputValue;
  var sampleSet = inputValue.split(',');
  return sampleSet[chance.natural({
    max: sampleSet.length - 1
  })];
};

exports.randomSample = randomSample;

var randomName = function randomName(_ref9) {
  var _ref9$chance = _ref9.chance,
      chance = _ref9$chance === void 0 ? chanceInstance : _ref9$chance;
  return chance.name();
};

exports.randomName = randomName;

var randomStreetAddress = function randomStreetAddress(_ref10) {
  var _ref10$chance = _ref10.chance,
      chance = _ref10$chance === void 0 ? chanceInstance : _ref10$chance;
  return chance.address();
};

exports.randomStreetAddress = randomStreetAddress;

var randomCity = function randomCity(_ref11) {
  var _ref11$chance = _ref11.chance,
      chance = _ref11$chance === void 0 ? chanceInstance : _ref11$chance;
  return chance.city();
};

exports.randomCity = randomCity;

var randomCountryCode = function randomCountryCode(_ref12) {
  var _ref12$chance = _ref12.chance,
      chance = _ref12$chance === void 0 ? chanceInstance : _ref12$chance;
  return chance.country();
};

exports.randomCountryCode = randomCountryCode;

var randomCountryName = function randomCountryName(_ref13) {
  var _ref13$chance = _ref13.chance,
      chance = _ref13$chance === void 0 ? chanceInstance : _ref13$chance;
  return chance.country({
    full: true
  });
};

exports.randomCountryName = randomCountryName;

var randomPhoneNumber = function randomPhoneNumber(_ref14) {
  var _ref14$chance = _ref14.chance,
      chance = _ref14$chance === void 0 ? chanceInstance : _ref14$chance;
  return chance.phone();
};

exports.randomPhoneNumber = randomPhoneNumber;

var randomEmail = function randomEmail(_ref15) {
  var _ref15$chance = _ref15.chance,
      chance = _ref15$chance === void 0 ? chanceInstance : _ref15$chance;
  return chance.email();
};

exports.randomEmail = randomEmail;

var randomIP = function randomIP(_ref16) {
  var _ref16$chance = _ref16.chance,
      chance = _ref16$chance === void 0 ? chanceInstance : _ref16$chance;
  return chance.ip();
};

exports.randomIP = randomIP;

var randomIPv6 = function randomIPv6(_ref17) {
  var _ref17$chance = _ref17.chance,
      chance = _ref17$chance === void 0 ? chanceInstance : _ref17$chance;
  return chance.ipv6();
};

exports.randomIPv6 = randomIPv6;

var randomUrl = function randomUrl(_ref18) {
  var _ref18$chance = _ref18.chance,
      chance = _ref18$chance === void 0 ? chanceInstance : _ref18$chance;
  return chance.url();
};

exports.randomUrl = randomUrl;

var randomHexColor = function randomHexColor(_ref19) {
  var _ref19$chance = _ref19.chance,
      chance = _ref19$chance === void 0 ? chanceInstance : _ref19$chance;
  return chance.color({
    format: 'hex',
    casing: 'upper'
  });
};

exports.randomHexColor = randomHexColor;

var randomRgbColor = function randomRgbColor(_ref20) {
  var _ref20$chance = _ref20.chance,
      chance = _ref20$chance === void 0 ? chanceInstance : _ref20$chance;
  return chance.color({
    format: 'rgb'
  });
};

exports.randomRgbColor = randomRgbColor;

var randomIban = function randomIban(_ref21) {
  var _ref21$chance = _ref21.chance,
      chance = _ref21$chance === void 0 ? chanceInstance : _ref21$chance;
  return chance.iban();
};

exports.randomIban = randomIban;