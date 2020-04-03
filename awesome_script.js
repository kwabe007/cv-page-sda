function changeColor() {
    const body = document.querySelector("body");
    if (body.classList.contains("bg-blue")) {
        body.classList.remove("bg-blue");
        body.classList.add("bg-red");
    } else if (body.classList.contains("bg-red")) {
        body.classList.remove("bg-red");
        body.classList.add("bg-yellow");
    } else if (body.classList.contains("bg-yellow")) {
        body.classList.remove("bg-yellow");
        body.classList.add("bg-blue");
    } else {
        body.classList.add("bg-blue");
    }
}

function addImage() {
    const body = document.querySelector("body");
    const image = document.createElement("img");
    image.src = "https://picsum.photos/200/300";

    const div = document.createElement("div");
    div.classList.add("moving");
    div.appendChild(image);
    body.appendChild(div);
    animateDiv('.moving');

}

function makeArt() {
    setInterval(changeColor, 450);
    setInterval(addImage, 2000);
    const articles = document.querySelector("article");
    articles.classList.add("hover-zoom");
    articles.classList.add("hover-color");
    const image = document.createElement("img");
    image.src = "https://preview.redd.it/hnbyaanpp2201.jpg?width=960&crop=smart&auto=webp&s=a3a784ec337133680fdff9bfc174a43e78351b4c";
    const body = document.querySelector("body");
    body.appendChild(image);

    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
}

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    const h = $(window).height() - 50;
    const w = $(window).width() - 50;

    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(myclass){
    const newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
        animateDiv(myclass);
    });

};

function main () {
    const awesomeButton = document.querySelector("#awesome");
    awesomeButton.onclick = makeArt;
}

document.addEventListener("DOMContentLoaded", main);
