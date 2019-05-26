"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventEmitter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = [];
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, callback) {
      this.events.push({
        eventName: eventName,
        callback: callback
      });
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      for (var i = 0; i < this.events.length; i++) {
        if (this.events[i].eventName === eventName) {
          this.events[i].callback();
        }
      }
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      this.events = this.events.filter(function (event) {
        if (event.eventName === eventName && event.callback === callback) {
          return false;
        } else {
          return true;
        }
      });
      console.log(eventName + " is deleted");
    }
  }, {
    key: "getEvents",
    value: function getEvents() {
      console.log(this.events);
    }
  }]);

  return EventEmitter;
}();

exports.EventEmitter = EventEmitter;