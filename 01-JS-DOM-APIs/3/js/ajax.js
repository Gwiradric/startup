document.addEventListener("DOMContentLoaded", initJs);

function initJs() {
    "uses strict"

    let section = document.querySelector(".hidden");

    function deleteElement(section) {
        section.innerHTML = "";
        section.classList.remove("hidden");
    }
    
    deleteElement(section);

    function ajax(config) {
        let defer = $.Deferred();
        $.ajax(config)
            .done(function (data, textStatus) {
                info = data;
                defer.resolve(data, textStatus);
            })
            .fail(function (textStatus, errorThrown) {
                defer.reject(textStatus, errorThrown);
            });
        return defer.promise();
    }

    function requestServer() {
        let config = {
            type: "GET",
            url: "http://api.icndb.com/jokes/random",
            dataType: "jsonp",
        }

        let promise = ajax(config);
        promise.then(function() {
            section.innerHTML = "ID: " + info.value.id + "</br>" + "Joke: " + info.value.joke;
        })
        .catch(function() {
            section.classList.add("changeColor");
        })
    }

    let actionBtn = document.getElementById("action-btn");
    actionBtn.addEventListener("click", function () {
        requestServer();
    });

}