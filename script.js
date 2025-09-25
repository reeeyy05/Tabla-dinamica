const tableElement = document.getElementById('table');

let datos = ["Nombre", "Edad"];

let nombres = ["Ana", "Luis", "Carlos", "María", "Lucía", "Javier", "Marta", "Sofía", "David", "Elena"];

const trElement = document.createElement('tr');
const maxColumnas = 2; // Número máximo de columnas

for (let th = 0; th <= maxColumnas; i++) {
    // Creamos las columnas
    const thElement = document.createElement("th");

    // Le damos un nombre a cada columna
    thElement.innerText = datos
[th];

    // Añadir los elementos th a la fila tr
    trElement.appendChild(thElement);
}

tableElement.appendChild(trElement);
document.body.appendChild(tableElement);

const buttonElement = document.createElement("button");
buttonElement.innerText = "Añadir fila";

function newRow() {
    // Creamos el elemento fila
    const trElement = document.createElement("tr");
    // Creamos un td para el nombre
    for (let td = 0; td <= maxColumnas; i++) {
        let randomId = Math.floor(Math.random() * nombres.length);
        let randomName = nombres[randomId];
        const tdElement = document.createElement("td");
        tdElement.innerText = randomName;
    }

    // Creamos un td para la edad

    // Añadimos la fila ya formada a la tabla
    tableElement.appendChild(trElement);
}

buttonElement.addEventListener('click', newRow);

document.body.appendChild(buttonElement);