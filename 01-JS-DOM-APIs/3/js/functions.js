document.addEventListener("DOMContentLoaded", initJs);

function initJs() {
    "use strict"
    
    let section = document.querySelector(".hidden");

    function deleteElement(section) {
        section.innerHTML = "";
        section.classList.remove("hidden");
    }
    
    deleteElement(section);
    
    function getAlert() {
        // USE ALERT
        alert("ALERT ACTIVATED!");
    }

    function requestServer(section, url) {
        let xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let object = JSON.parse(this.response);
                section.innerHTML = "id: " + object.value.id + "</br>" + "Joke: " + object.value.joke;
            }
        };
        xhr.open(method, url);
        xhr.send();
    }
    
    let method = "GET";
    let url = "http://api.icndb.com/jokes/random";
    
    let actionBtn = document.getElementById("action-btn");
    actionBtn.addEventListener("click", function() {
        requestServer(section, url);
    });
    
}