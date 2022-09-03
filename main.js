let submitBtn = document.getElementById("sub-btn");
let resetBtn = document.getElementById("reset-btn");
let textBox = document.getElementById("textbox-el");
let result = document.getElementById("result");
let chances = document.getElementById("chances-el");
let score = document.getElementById("score-el");
let points = 0;
let count = 5;                                       //DOM ACCESSING
let enteredValue = null;
let hiddenValue = null;


//SUBMIT BUTTON FUNCTIONS
submitBtn.onclick = function () {
    enteredValue = textBox.value;

    //CONDITION TO CHECK IF ANY VALUE IS ENTERED
    if (!enteredValue) {
        result.style.color = "red";
        result.innerHTML = "Result: Value Not Entered!!";
    } else if (enteredValue > 0 && enteredValue < 11) {   //CONDITION CHECKING IF ENTERED VALUE IS VALID
        if (count > 0) {
            result.style.color = "black";
            hiddenValue = Math.floor((Math.random() * 10) + 1);
            if (hiddenValue == enteredValue) {                  //CHECKING ENTERED VALUE IS RIGHT OR WRONG
                result.style.color = "#0a0944";
                result.innerHTML = "Result: HOORAAY YOU GOT IT 🏆";
                points++;
                score.innerHTML = `Score: ${points}`
            } else {
                result.innerHTML = "Result: NOPE, TRY AGAIN";
                --count;
                chances.innerHTML = `Chances Left: ${count}/5`
            }
        } else {
            result.style.color = "red";
            result.innerHTML = "Out Chances Try Again 😢";
            submitBtn.style.backgroundColor = "red";
        }

    } else {
        result.style.color = "red";
        result.innerHTML = "Result: INVALID ENTRY!!";   //CONDTION TO THROW ERROR FOR INVALID ENTRY
    }
}


//RESET BUTTON FUNCTIONS
resetBtn.onclick = function () {
    points = 0;
    count = 5;
    enteredValue = null;
    hiddenValue = null;
    result.innerHTML = "Result: ";
    score.innerHTML = `Score: ${points}`;
    chances.innerHTML = `Chances Left: ${count}/5`;
    textBox.value = "";
    submitBtn.style.backgroundColor = "#614124";
    result.style.color = "black";
}
