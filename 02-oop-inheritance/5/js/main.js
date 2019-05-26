import { Logger } from "./logger.js";
import { Movie } from "./movie.js";
import { Actor } from "./actor.js";
import { EventEmitter } from "./eventEmitter.js";

"uses strict"

const avengers = new Movie("Avengers: End Game", 2019, "2:30 hs");
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

avengers.addCast(arnold);
avengers.addCast(actors);

export const eventEmitter = new EventEmitter();
const logger = new Logger();
avengers.play();
avengers.movieCast();


