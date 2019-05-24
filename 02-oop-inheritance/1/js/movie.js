document.addEventListener("DOMContentLoaded", initJS);

function initJS() {
    "uses strict"

    class EventEmitter {
        constructor() {
            this.events = [];
        }
        on(eventName, callback) {
            this.events.push(eventName, callback);
        }
        emit(eventName) {
            for (let i = 0; i < (this.events.length); i++) {
                if (events[i] === eventName)
                    console.log(eventName + "is emitted");
            }
        }
        off(eventName, callback) {
            this.events = this.events.filter(function(event) {
                if (event.eventName === eventName && event.callback === callback) {
                    return false;
                }
                return true;
            });
            console.log(eventName + "is deleted");
        }

        getEvents() {
            console.log(this.events);
        }
    }

    class Movie extends EventEmitter{
        //MOVIE CLASS
        constructor(name, year, duration) {
            super();
            this.title = name;
            this.year = year;
            this.duration = duration;
        }
        play() {
            console.log(this.title + " is playing");
        }
        pause() {
            console.log(this.title + " is paused");
        }
        resume() {
            console.log(this.title + " continues");
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
    

}