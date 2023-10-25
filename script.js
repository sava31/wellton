// console.log("10")

let inputIn_1 = document.querySelector('.input-in_1'); // input
let inputIn_2 = document.querySelector('.input-in_2'); // input

let div = document.querySelector('.out');
let button = document.querySelector('button'); // button

let reset = document.getElementById('reset');



button.onclick = function () {
    console.log("working");
    // console.log(inputIn.value); // value - то, что введено в input

    let b = `${inputIn_1.value * inputIn_2.value}`;


    console.log(b);
    div.innerHTML = b;
    document.querySelector('.out').style.background = "green";
    document.querySelector('.out').style.color = "white";



}

reset.onclick = function () {
    inputIn_1.value = "";
    inputIn_2.value = "";
    div.innerHTML = "";
    document.querySelector('.out').style.background = "yellow";
}