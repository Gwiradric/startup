"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;

var _main = require("./main.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function Logger() {
  _classCallCheck(this, Logger);

  _main.eventEmitter.on("play", function () {
    console.log("The play event has been emitted");
  });
};

exports.Logger = Logger;