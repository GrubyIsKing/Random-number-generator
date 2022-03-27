const second = document.getElementById("second");
const generator = document.getElementById("generator");
const result = document.getElementById("result");
const first = document.getElementById("first");

const generate =()=>{
    const v = parseInt(first.value);
    const y = parseInt(second.value);
    const x = Math.floor(Math.random()*(y - v + 1) + v);
    result.innerHTML = x;
}

generator.addEventListener("click", generate);




  






