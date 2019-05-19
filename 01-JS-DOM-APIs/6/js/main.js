document.addEventListener("DOMContentLoaded", initJs);

function initJs() {
    "uses strict"

    function createTableDOM() {
        let section = document.getElementById("tableSection");
        let table = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for (let i = 0; i < matriz.length; i++) {
            let hilera = document.createElement("TR");
            let columna = matriz[i];
            for (let j = 0; j < columna.length; j++) {
                let celda = document.createElement("TD");
                let textCelda = document.createTextNode(columna[j]);
                console.log(columna[j]);
                celda.appendChild(textCelda);
                hilera.appendChild(celda);
            }

            tblBody.appendChild(hilera);
        }
        table.appendChild(tblBody);
        section.appendChild(table);
    }

    let matriz = [
        ["Animals:", "Dog", "Cat", "Cow", "Horse"],
        ["Objects:", "Ball", "Rock", "Table", "Keys"],
        ["Numbers:", "Two", "Sixty five", "Eleven", "One"],
        ["Movies:", "Avengers", "Batman", "Harry Potter", "4X4"],
    ]

    createTableDOM();
    

}