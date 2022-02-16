"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUndefined = exports.isEmptyObject = exports.isEmpty = void 0;

var isEmptyObject = function isEmptyObject(obj) {
  for (var i in obj) {
    return false;
  }

  return true;
};

exports.isEmptyObject = isEmptyObject;

var isUndefined = function isUndefined(error) {
  if (error === undefined) return true;
  return false;
};

exports.isUndefined = isUndefined;

var isEmpty = function isEmpty(error) {
  if (isUndefined(error)) return true;else if (isEmptyObject(error)) return true;
  return false;
};

exports.isEmpty = isEmpty;