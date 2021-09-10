const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML =  "#" + randomColor;
};
btn.addEventListener("click", generateColor);

generateColor();

// let color = Math.random();
// math random produces random numbers
// toString is a method to change it to string
// substring has parameters=> first one is to choose which number to start => second one for the last numer you want
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);
// console.log(color)

