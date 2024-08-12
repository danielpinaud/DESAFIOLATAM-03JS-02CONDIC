const divColorBlueJv = document.getElementById("divColorBlue");
const divColorRedJv = document.getElementById("divColorRed");
const divColorGreenJv = document.getElementById("divColorGreen");
const divColorYellowJv = document.getElementById("divColorYellow");
const nuevoColorJv = 'black';

divColorBlueJv.addEventListener("click", function()
{
    cambiarColor(divColorBlueJv, nuevoColorJv)
});
divColorRedJv.addEventListener("click", function()
{
    cambiarColor(divColorRedJv, nuevoColorJv)
});
divColorGreenJv.addEventListener("click", function()
{
    cambiarColor(divColorGreenJv, nuevoColorJv)
});
divColorYellowJv.addEventListener("click", function()
{
    cambiarColor(divColorYellowJv,nuevoColorJv)
});


function cambiarColor(div, color){
    div.style.backgroundColor = color
};

