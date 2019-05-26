document.addEventListener("DOMContentLoaded", initJS);

function initJS() {
    "uses strict"

    class Movie {
        //MOVIE CLASS
        constructor(name, year, duration) {
            this.title = name;
            this.year = year;
            this.duration = duration;
            this.actors = [];
        }

        play() {
            console.log(this.title + " is playing");
        }

        pause() {
            console.log(this.title + " has been paused");
        }

        resume() {
            console.log(this.title + " has been resumed");
        }

    }

    class Actor {
        //ACTOR CLASS
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class EventEmitter {
        constructor() {
            this.events = [];
        }
        on(eventName, callback) {
            this.events.push({ eventName, callback });
        }
        emit(eventName) {
            for (let i = 0; i < (this.events.length); i++) {
                if (this.events[i] === eventName)
                    console.log(eventName + " is emitted");
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

    const avengers = new Movie("Avengers: End Game", 2019, "2:30 hs");

    avengers.play();
    avengers.pause();
    avengers.resume();

}