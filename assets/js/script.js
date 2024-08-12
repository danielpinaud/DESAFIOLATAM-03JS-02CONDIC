const ele = document.getElementById("ele1")
const colorJv = 'yellow'

ele.style.backgroundColor = 'green'
ele.addEventListener("click", function(){
    pintar(ele, colorJv)
});

function pintar(elem, colorJv){
    elem.style.backgroundColor = colorJv
}
