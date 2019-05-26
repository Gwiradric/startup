"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Movie = void 0;

var _main = require("./main.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Movie =
/*#__PURE__*/
function () {
  //MOVIE CLASS
  function Movie(name, year, duration) {
    _classCallCheck(this, Movie);

    this.title = name;
    this.year = year;
    this.duration = duration;
    this.actors = [];
  }

  _createClass(Movie, [{
    key: "play",
    value: function play() {
      _main.eventEmitter.emit("play");
    }
  }, {
    key: "pause",
    value: function pause() {
      _main.eventEmitter.emit("pause");
    }
  }, {
    key: "resume",
    value: function resume() {
      _main.eventEmitter.emit("resume");
    }
  }, {
    key: "addCast",
    value: function addCast(cast) {
      if (Array.isArray(cast)) {
        for (var i = 0; i < cast.length; i++) {
          this.addCast(cast[i]);
        }
      } else {
        this.actors.push(cast);
      }
    }
  }, {
    key: "movieCast",
    value: function movieCast() {
      console.log(this.actors);
    }
  }]);

  return Movie;
}();

exports.Movie = Movie;