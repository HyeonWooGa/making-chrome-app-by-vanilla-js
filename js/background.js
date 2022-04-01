const images = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.jpeg", "09.jpeg", "10.png"];

const chosenImage = images[Math.floor(Math.random() * quotes.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);