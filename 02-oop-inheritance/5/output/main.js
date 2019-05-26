"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventEmitter = void 0;

var _logger = require("./logger.js");

var _movie = require("./movie.js");

var _actor = require("./actor.js");

var _eventEmitter = require("./eventEmitter.js");

"uses strict";
var avengers = new _movie.Movie("Avengers: End Game", 2019, "2:30 hs");
var arnold = new _actor.Actor('Arnold Schwarzenegger', 50);
var actors = [new _actor.Actor('Paul Winfield', 50), new _actor.Actor('Michael Biehn', 50), new _actor.Actor('Linda Hamilton', 50)];
avengers.addCast(arnold);
avengers.addCast(actors);
var eventEmitter = new _eventEmitter.EventEmitter();
exports.eventEmitter = eventEmitter;
var logger = new _logger.Logger();
avengers.play();
avengers.movieCast();