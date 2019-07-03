
document.getElementById("calc-btn").addEventListener("click", calcTip);


function calcTip() {
    // Get Inputs
    let billAmt = document.getElementById("bill-amt").value;
    let tipPercent = document.getElementById("tip-percent").value;
    let numPeople = document.getElementById("num-people").value;

    // Calc Tip Per Person
    let tipPerPerson = billAmt * (tipPercent / 100) / numPeople;

    // Output the Result
    document.getElementById("result").innerHTML = tipPerPerson;
}


