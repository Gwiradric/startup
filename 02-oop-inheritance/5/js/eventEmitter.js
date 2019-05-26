export class EventEmitter {
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