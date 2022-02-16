"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderError = void 0;

var _isEmpty = require("./isEmpty");

var isErrorForm = function isErrorForm(name, error) {
  if (name in error) return true;
  return false;
};

var isBoolean = function isBoolean(error) {
  if (typeof error == 'boolean') return true;
  return false;
};

var renderError = function renderError(name, error) {
  if (isBoolean(error)) return false;
  if ((0, _isEmpty.isEmpty)(error)) return false;
  if (isErrorForm(name, error)) return true;
  return false;
};

exports.renderError = renderError;