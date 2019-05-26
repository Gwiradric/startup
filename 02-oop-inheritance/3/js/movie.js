document.addEventListener("DOMContentLoaded", initJS);

function initJS() {
    "uses strict"

    class EventEmitter {
        constructor() {
            this.events = [];
        }
        on(eventName, callback) {
            this.events.push({
                eventName,
                callback
            })
        }
        emit(eventName) {
            for (let i = 0; i < (this.events.length); i++) {
                if (this.events[i].eventName === eventName) {
                    this.events[i].callback();
                }
            }
        }
        off(eventName, callback) {
            this.events = this.events.filter(event => {
                if ((event.eventName === eventName) && (event.callback === callback)) {
                    return false;
                } else {
                    return true;
                }
            });
            console.log(eventName + " is deleted");
        }

        getEvents() {
            console.log(this.events);
        }
    }

    class Movie {
        //MOVIE CLASS
        constructor(name, year, duration) {
            this.title = name;
            this.year = year;
            this.duration = duration;
            this.actors = [];
        }

        play() {
            eventEmitter.emit("play");
        }

        pause() {
            eventEmitter.emit("pause");
        }

        resume() {
            eventEmitter.emit("resume");
        }

        addCast(cast) {
            if (Array.isArray(cast)) {
                for (let i = 0; i < cast.length; i++) {
                    this.addCast(cast[i]);
                }
            } else {
                this.actors.push(cast);
            }
        }

        movieCast() {
            console.log(this.actors);
        }
    }

    class Actor {
        //ACTOR CLASS
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class Logger {
        constructor() {
            eventEmitter.on("play", function() {
                console.log("The play event has been emitted");
            });
        }
    }

    const avengers = new Movie("Avengers: End Game", 2019, "2:30 hs");
    const arnold = new Actor('Arnold Schwarzenegger', 50);
    const actors = [
        new Actor('Paul Winfield', 50),
        new Actor('Michael Biehn', 50),
        new Actor('Linda Hamilton', 50)
    ];

    avengers.addCast(arnold);
    avengers.addCast(actors);

    const eventEmitter = new EventEmitter();
    const logger = new Logger();
    avengers.play();
}