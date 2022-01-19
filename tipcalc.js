//DECLARE VARIABLES FOR ALL INPUT FIELDS
const totalBill = document.getElementById("total-bill");
const fivePercent = document.getElementById("5percent");
const tenPercent = document.getElementById("10percent");
const fifteenPercent = document.getElementById("15percent");
const twentyFivePercent = document.getElementById("25percent");
const fiftyPercent = document.getElementById("50percent");
const customPercent = document.getElementById("custom-percent");
const numPeople = document.getElementById("number-people");

const submitButton = document.getElementById("submit");
const percentButtons = document.querySelectorAll(".button");

//ATTEMPT TO CHANGE STYLE OF SELECTED PERCENT BUTTON
 function showSelectedPercent() { 
    //let targ = item; 
    .style.backgroundColor = "navy";
    .style.color = "white";
    .removeEventListener("pointerdown", selectFivePercent)
};

percentButtons.forEach(item => {item.addEventListener("click", showSelectedPercent)});
/*percentButtons.forEach(button => {
    button.addEventListener("click", showSelectedPercent)
});

/*function selectFivePercent() {
    fivePercent.style.backgroundColor = "navy";
    fivePercent.style.color = "white";
    fivePercent.removeEventListener("pointerdown", selectFivePercent)
};

function selectTenPercent() {
    tenPercent.style.backgroundColor = "navy";
    tenPercent.style.color = "white";
    tenPercent.removeEventListener("pointerdown", selectTenPercent)
};

function selectFifteenPercent() {
    fifteenPercent.style.backgroundColor = "navy";
    fifteenPercent.style.color = "white";
    fifteenPercent.removeEventListener("pointerdown", selectFifteenPercent)
};

function selectTwentyFivePercent() {
    twentyFivePercent.style.backgroundColor = "navy";
    twentyFivePercent.style.color = "white";
    twentyFivePercent.removeEventListener("pointerdown", selectTwentyFivePercent)
};

function selectFiftyPercent() {
    fiftyPercent.style.backgroundColor = "navy";
    fiftyPercent.style.color = "white";
    fiftyPercent.removeEventListener("pointerdown", selectFiftyPercent)
};


fivePercent.addEventListener("pointerdown", selectFivePercent);
tenPercent.addEventListener("pointerdown", selectTenPercent);
fifteenPercent.addEventListener("pointerdown", selectFifteenPercent);
twentyFivePercent.addEventListener("pointerdown", selectTwentyFivePercent);
fiftyPercent.addEventListener("pointerdown", selectFiftyPercent);*/


//ATTEMPT TO DISABLE SUBMIT BUTTON UNTIL TOTAL AND NUMBER OF PEOPLE ARE INPUT
submitButton.disabled = true;

totalBill.addEventListener("input", event => {
    const elem = event.target;
    const valid = elem.value.length != 0;
    if (valid && submitButton.disabled /*&& (numPeople.length != 0)*/) {
        submitButton.disabled = false;
    } else if (!valid && !submitButton.disabled) {
        submitButton.disabled = true;
    }
});


fivePercent.addEventListener("click", calcTotalTip(fivePercent));


//ATTEMPT TO CALCULATE TIP AMOUNT BASED ON TOTAL BILL AND BUTTON SELECTION/INPUT
let totalTip;
function calcTotalTip(num) {
    totalTip = (num / 100) * totalBill;
    return totalTip;
};


tenPercent.clicked = function() {
        totalTip = (tenPercent / 100) * totalBill;
        return totalTip;
        };
fifteenPercent.onclick = function() {
        totalTip = (fifteenPercent / 100) * totalBill;
        return totalTip;
        };
twentyFivePercent.onclick = function() {
        totalTip = (twentyFivePercent / 100) * totalBill;
        return totalTip;
        };
fiftyPercent.onclick = function() {
        totalTip = (fiftyPercent / 100) * totalBill;
        return totalTip;
        };
customPercent.onclick = function() {
        totalTip = (customPercent / 100) * totalBill;
        return totalTip;
        };

//CALCULATING TIP PER PERSON TO OUTPUT TO CORRESPONDING HTML FIELD
let tipEach = document.getElementById("tip-each");
let tipPerGuest;
function tipPerPerson(totalTip) {
    tipPerGuest = totalTip / numPeople;
    tipEach.innerHTML = tipPerGuest;
};

//CALCULATING TOTAL PRICE PER PERSON TO OUTPUT TO CORRESPONDING HTML FIELD
let totalEach = document.getElementById("total-each");
let totalPerGuest;
function totalPerPerson() {
    totalPerGuest = (totalBill / numPeople) + tipPerGuest;
    totalEach.innerHTML = totalPerGuest;
};

//GROUPING FUNCTIONS INTO ONE
function runCalc() {
    calcTotalTip();
    tipPerPerson(totalTip);
    totalPerPerson();
};

//ATTEMPT TO RUN SCRIPT ON CLICK OF THE SUBMIT BUTTON
document.getElementById("submit").onclick = runCalc;
