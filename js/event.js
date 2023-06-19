//option 1: directly set on the html element
//<button onclick="console.log(65)">Another button</button>

//option 2: add onclick function
//use this one for our project
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

        const cyanButton = document.getElementById('make-cyan');
        cyanButton.addEventListener('click', makecyan)

       function makecyan(){
        document.body.style.backgroundColor = 'cyan';
}
//option 4: another
const makeGreenButton = document.getElementById('make-green');
       makeGreenButton.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green';})

//option 4 final
 
    //document.getElementById('make-goldenrod').addEventListener('click', function() {})
    /*very very importand we will use it sometime */
        document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenrod';
       
    })