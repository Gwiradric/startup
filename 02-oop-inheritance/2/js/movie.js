document.addEventListener("DOMContentLoaded", initJS);

function initJS() {
    "uses strict"

    class EventEmitter {
        constructor() {
            this.events = [];
        }
        on(eventName, callback) {
            this.events.push({eventName, callback});
        }
        emit(eventName) {
            for (let i = 0; i < (this.events.length); i++) {
                if (this.events[i].eventName === eventName)
                    this.events[i].callback();
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

    class Movie extends EventEmitter {
        //MOVIE CLASS
        constructor(name, year, duration) {
            super();
            this.title = name;
            this.year = year;
            this.duration = duration;
            this.on("play", function() {
                console.log(this.title + " is playing");
            });
            this.on("pause", function() {
                console.log(this.title + " was paused");
            });
            this.on("resume", function() {
                console.log(this.title + " was continues");
            })
        }
        play() {
            this.emit("play");
        }
        pause() {
            this.emit("pause");
        }
        resume() {
            this.emit("resume");
        }

        get movieName() {
            return this.title;
        }

        get movieYear() {
            return this.year;
        }

        get movieDuration() {
            return this.duration;
        }
    }

    class Actor {
        //ACTOR CLASS
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    const avengers = new Movie("Avengers: End Game", 2019, "2:30 hs");

    avengers.play();
    avengers.pause();
    avengers.resume();
    //avengers.off("play", avengers.play());
}