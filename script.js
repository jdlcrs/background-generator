var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient"); 
var colorSurprise = document.querySelector(".btnRandom");

/* 
first attempt to get the random button working

function getRandomColor() {
    var letters = 'ABCDEF', numbers = '0123456789';
    var rand1 = 'rgb', rand2 = 'rgb';
    for (var i = 0; i < 6; i++) {
      rand1 += numbers[Math.floor(Math.random() * 10)];
      rand2 += numbers[Math.floor(Math.random() * 10)];
    }
    return setRandom(rand1, rand2);
}
*/

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function getRandomColor() {
    var rand1 = getRandomRgb(), rand2 = getRandomRgb();
    return setRandom(rand1, rand2);
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
};

function setRandom(num1, num2) {
    body.style.background = "linear-gradient(to right, " + num1 + "," + num2 + ")";
    color1.style.backgroundColor = num1; color2.style.backgroundColor = num2;
    css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

body.onload = setGradient();
colorSurprise.addEventListener("click", getRandomColor);


// This is a test function 
function test() {
    console.log("Hello, it's working")
}