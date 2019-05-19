document.addEventListener("DOMContentLoaded", initJS);

function initJS() {
    "uses strict"

    class Movie {
        //MOVIE CLASS
        constructor(name, year, duration) {
            this.title = name;
            this.year = year;
            this.duration = duration;
        }
        play() {
            console.log("The movie is playing");
        }
        pause() {
            console.log("The movie is paused");
        }
        resume() {
            console.log("The movie continues");
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

    class EventEmitter {
        constructor() {

        }
        on(eventName, callback) {

        }
        emit(eventName) {

        }
        off(eventName, callback) {

        }
    }

    let addBtn = document.getElementById("movieBtn");
    addBtn.addEventListener("click", createMovieInstance);

    function createButton(method, content) {
        let button = document.createElement("button");
        button.addEventListener("click", method);
        button.textContent = content;
        return button;
    }

    function insertElements(movie, playBtn, pauseBtn, resumeBtn) {
        let data = document.createElement("p");
        data.textContent = "Name: " + movie.movieName + ". Year: " + movie.movieYear + ". Duration: " + movie.movieDuration;
        let node = document.createElement("div");
        node.appendChild(data);
        node.appendChild(playBtn);
        node.appendChild(pauseBtn);
        node.appendChild(resumeBtn);
        document.getElementById("movieMenu").appendChild(node);
    }

    function createMovieInstance() {
        let name = document.getElementById("movieName").value;
        let duration = document.getElementById("movieYear").value;
        let year = document.getElementById("movieDuration").value;

        //INSTANCE OF THE MOVIE
        let movie = new Movie(name, duration, year);

        //MENU BUTTONS CREATED
        let playBtn = createButton(movie.play, "PLAY");
        let pauseBtn = createButton(movie.pause, "PAUSE");
        let resumeBtn = createButton(movie.resume, "RESUME");

        insertElements(movie, playBtn, pauseBtn, resumeBtn);
    }

}