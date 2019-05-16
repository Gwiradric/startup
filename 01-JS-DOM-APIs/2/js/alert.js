document.addEventListener("DOMContentLoaded", initJs);

function initJs() {
    "use strict"

    function getAlert() {
        alert("ALERT ACTIVATED!");
    }

    let actionBtn = document.getElementById("action-btn");
    actionBtn.addEventListener("click", getAlert);

}