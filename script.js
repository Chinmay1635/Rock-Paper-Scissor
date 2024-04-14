let btns = document.querySelectorAll(".opt");
let ply = document.getElementById("player");
let comp = document.getElementById("comp");
let result = document.getElementById("result");

let plycount = 0;
let comcount = 0;

btns.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", () => {

        let plyValue = btn.value;
        checkWinner(plyValue);
    })
})

const checkWinner = (plyValue) => {

    let compValue = Math.floor(Math.random() * 3 + 1);

    if ((plyValue == 1 && compValue == 3) || (plyValue == 2 && compValue == 1) || (plyValue == 3 && compValue == 2)) {
        plycount++;
        ply.innerHTML = "Player: " + plycount;
        result.innerHTML = "You Won!!!";
        result.style.backgroundColor="green";
    } else if (plyValue == compValue) {
        result.innerHTML = "Tie!!!";
        result.style.backgroundColor="gray";
    } else {
        comcount++;
        comp.innerHTML = "Computer: " + comcount;
        result.innerHTML = "Computer Won!!!";
        result.style.backgroundColor="red";
    }
}

