import {eventEmitter} from "./main.js"

export class Movie {
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