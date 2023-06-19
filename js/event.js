//option 1: directly set on the html element

//option 2: add onclick function
function makepink(){
    document.body.style.background = 'pink';
}
//option 3: 
//another way to use
const makeBlueButton = document.getElementById('make-blue');

makeBlueButton.onclick= makeBlue;

function makeBlue(){
    document.body.style.background = 'blue';
}
//option 3 another
const yellowButton = document.getElementById("make-yellow");

yellowButton.onclick = function yellowButton() {
    document.body.style.backgroundColor = "yellow";
}