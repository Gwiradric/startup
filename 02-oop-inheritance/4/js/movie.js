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
            eventEmitter.emit(this.title + " has been paused");
        }

        resume() {
            eventEmitter.emit(this.title + " has been resumed");
        }

    }

    let social = {
        share(friendName) {
            console.log(friendName + " share " + this.title);
        },
        like(friendName) {
            console.log(friendName + " likes " + this.title);
        }
    }

    Object.assign(Movie.prototype, social);

    const avengers = new Movie("Avengers: End Game", 2019, "2:30 hs");

    avengers.share("Federico Fuhr");
    avengers.like("Federico Fuhr");

    
}