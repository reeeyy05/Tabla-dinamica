const tableElement = document.createElement("table");
let columnas = ["Nombre", "Edad"];
const nombres = [
  "Alicia", "Bruno", "Carla", "Diego", "Elena",
  "Fernando", "Gabriela", "Hugo", "Isabel", "Javier",
  "Karina", "Luis", "Marina", "Nicolás", "Olga",
  "Pablo", "Raquel", "Sergio", "Teresa", "Víctor"
];

const trElement = document.createElement("tr");
const maxColumns = 2;
for(let th = 0; th < maxColumns; th++){
  // Creamos cada una de las columnas
  const thElement = document.createElement("th");
  // Le damos un nombre a cada columna
  thElement.innerText = columnas[th];
  // Añadimos la columna ya formada a la fila
  trElement.appendChild(thElement);
}
// Añadimos a la tabla la fila ya formada
tableElement.appendChild(trElement);
// Añadimos al body la tabla ya formada
document.body.appendChild(tableElement);

const buttonElement = document.createElement("button");
buttonElement.innerText = "Añadir fila";

function newRow(){
  // Creamos el elemento fila
  const trElement = document.createElement("tr");
  // Creamos un td para el nombre
  let randomId = Math.floor(Math.random() * nombres.length);
  let randomName = nombres[randomId];
  let tdElement = document.createElement("td");
  tdElement.innerText = randomName;
  trElement.appendChild(tdElement);
  // Creamos un td para la edad
  let randomAge = Math.floor(Math.random() * 100);
  tdElement = document.createElement("td");
  tdElement.innerText = randomAge;
  trElement.appendChild(tdElement);
  // Añadimos la fila ya formada a la tabla
  tableElement.appendChild(trElement);
}

buttonElement.addEventListener("click", newRow);

document.body.appendChild(buttonElement);