document.addEventListener("DOMContentLoaded", initJS);

function initJS() {
    "uses strict"

    let searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("input", searchValue);

    function searchValue() {
        let value = searchBtn.value;
        getRepos(value);
    }

    function addNode(element) {
        let node = document.createElement("LI");
        let textnode = document.createTextNode(element);
        node.appendChild(textnode);
        document.getElementById("urls").appendChild(node);
    }

    async function getRepos(value) {
        const response = await fetch("https://api.github.com/search/repositories?q=" + value);
        const result = await response.json();
        result.items.forEach(i => {
            addNode(i.html_url);
        });

    }
}