
const textos = ["Desarrollador de videojuegos", "Desarrollador Front-End", "Desarrollador Java"];
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

othersProjects.style.display = "none";
webProjects.style.display = "block";

document.addEventListener("DOMContentLoaded", () => {
    const othersButton = document.getElementById("showOthers");
    const webButton = document.getElementById("showWeb");
    const othersProjects = document.getElementById("othersProjects");
    const webProjects = document.getElementById("webProjects");

    othersButton.addEventListener("click", () => {
        othersProjects.style.display = "block";
        webProjects.style.display = "none";
    });

    webButton.addEventListener("click", () => {
        webProjects.style.display = "block";
        othersProjects.style.display = "none";
    });
});
