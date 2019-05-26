import { eventEmitter } from "./main.js";

export class Logger {
    constructor() {
        eventEmitter.on("play", function() {
            console.log("The play event has been emitted");
        });
    }
}