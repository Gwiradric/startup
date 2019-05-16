document.addEventListener("DOMContentLoaded", initJs);

function initJs() {
    "use strict"

    function getAlert() {
        // USE ALERT
        alert("ALERT ACTIVATED!");
    }

    function getData(section, url) {
        let xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let object = JSON.parse(this.response);
                section.innerHTML = object.value.joke;
            }
        };
        xhr.open(method, url);
        xhr.send();
    }
    
    let method = "GET";
    let url = "http://api.icndb.com/jokes/random";
    
    let actionBtn = document.getElementById("action-btn");
    actionBtn.addEventListener("click", function() {
        getData(section, url);
    });

    let section = document.querySelector(".hidden");
}