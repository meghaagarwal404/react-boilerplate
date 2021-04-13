"use strict";

var _web = _interopRequireDefault(require("./web.server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Started', () => {
  var webServer = null;
  beforeAll(() => {
    webServer = new _web.default();
  });
  test('should start and trigger a callback', /*#__PURE__*/_asyncToGenerator(function* () {
    var promise = webServer.start();
    yield expect(promise).resolves.toBeUndefined();
  }));
  test('should stop and trigger a callback', /*#__PURE__*/_asyncToGenerator(function* () {
    var promise = webServer.stop();
    yield expect(promise).resolves.toBeUndefined();
  }));
});