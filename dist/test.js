'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  console.log('Hello World!');
  return 'NODE_ENV ' + process.env.NODE_ENV;
};