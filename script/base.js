/**
*
* base.js
* @author - Lameen
* @date - 28/02/2023
**/

var count = 0;

function decrease() {
    if(count > 0) {
        count = count - 1;
        document.getElementById("counter").innerHTML = count;
    }
}

function reset() {
    count = 0;
    document.getElementById("counter").innerHTML = count;
}

function increase() {
    count = count + 1;
    document.getElementById("counter").innerHTML = count;
}