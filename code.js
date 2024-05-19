
const textos = ["Desarrollador de videojuegos", "Desarrollador Front-End"];
let index = 0;
let i = 0;
let txt = "";
const speed = 70;
const displayElement = document.querySelector(".texto");

function write() {
    if (i < textos[index].length) {
        txt += textos[index].charAt(i);
        displayElement.innerHTML = txt;
        i++;
        setTimeout(write, speed);
    } else {
        setTimeout(borrar, 1000);
    }
}

function borrar() {
    if (i > 0) {
        txt = txt.slice(0, -1);
        displayElement.innerHTML = txt;
        i--;
        setTimeout(borrar, speed);
    } else {
        index = (index + 1) % textos.length;
        setTimeout(write, 500);
    }
}

write();
