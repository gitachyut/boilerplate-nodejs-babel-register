'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  res.send('hello');
});

app.get('/info', function (req, res) {
  res.send((0, _test2.default)());
});

app.listen(process.env.PORT || 9080);