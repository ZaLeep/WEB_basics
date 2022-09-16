const li7 = document.getElementById("seven");
li7.addEventListener("click", function() {
    if(li7.style.color == "black" || li7.style.color == "") {
        li7.style.background = "black";
        li7.style.color = "white";
        console.log("Set to weird.")
    }
    else {
        li7.style.background = "white";
        li7.style.color = "black";
        console.log("Set to normal.")
    }
});

const li8 = document.querySelector("#eight");
li8.onclick = function() {
    if(li8.style.color == "black" || li8.style.color == "") {
        li8.style.background = "black";
        li8.style.color = "white";
        console.log("Set to weird.")
    }
    else {
        li8.style.background = "white";
        li8.style.color = "black";
        console.log("Set to normal.")
    }
}

function imgDelete() {
    console.log("Deleting...")
    const container = document.querySelector(".img-container");
    container.removeChild(container.lastChild);
    if(container.childElementCount == 0) document.querySelector("button:first-child").setAttribute("disabled", "true");
}

function imgAdd() {
    console.log("Adding...")
    const container = document.querySelector(".img-container");
    const link = document.createElement("a");
    link.setAttribute("href", "https://www.city.kharkov.ua/ru/");
    const image = document.createElement("img");
    image.setAttribute("src", "img/Kharkov.jpg");
    image.setAttribute("alt", "image was lost");
    link.appendChild(image);
    container.appendChild(link);
    document.querySelector("button:first-child").removeAttribute("disabled");
}

function sizeUp() {
    console.log("Size up...");
    const link = document.querySelector("a:last-child");
    const image = link.firstElementChild;
    image.style.height = (image.clientHeight * 1.1).toString() + "px";
}

function sizeDown() {
    console.log("Size down...");
    const link = document.querySelector("a:last-child");
    const image = link.firstElementChild;
    image.style.height = (image.clientHeight * 0.9).toString() + "px";
}