var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient"); 
var colorSurprise = document.querySelector(".btnRandom");

/* console.log(css, colorOne, colorTwo);*/

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var rand1 = '#', rand2 = '#';
    for (var i = 0; i < 6; i++) {
      rand1 += letters[Math.floor(Math.random() * 16)];
      rand2 += letters[Math.floor(Math.random() * 16)];
    }
    return setRandom(rand1, rand2);
}

function setRandom (num1, num2) {
    body.style.background = "linear-gradient(to right, " + num1 + "," + num2 + ")";
    color1.value = num1; color2.value= num2;
    css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

body.onload = setGradient;
colorSurprise.onClick = setRandom;