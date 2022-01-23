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

//Change style of selected percentage button
//***********ISSUE: RESET BUTTON DOES NOT RESET THE STYLING OF THESE BUTTONS***********
function showSelectedPercent(event) { 
    event.target.style.backgroundColor = "navy";
    event.target.style.color = "white";
    event.target.removeEventListener("pointerdown", showSelectedPercent);
    //test code
    if (event.target.click == "true") {
        !event.target = "disabled"
    //test code
    }
};

percentButtons.forEach(item => {item.addEventListener("click", showSelectedPercent)});

//NEXT UP: DISABLE MULTIPLE PERCENTAGE BUTTONS FROM BEING SELECTED AT THE SAME TIME


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


//fivePercent.addEventListener("click", calcTotalTip(fivePercent));


//ATTEMPT TO CALCULATE TIP AMOUNT BASED ON TOTAL BILL AND BUTTON SELECTION/INPUT
let totalTip;
function calcTotalTip(num) {
    totalTip = (num / 100) * totalBill;
    return totalTip;
};


tenPercent.clicked = function() {
        totalTip = (tenPercent.value / 100) * totalBill.value;
        return totalTip;
        };
fifteenPercent.onclick = function() {
        totalTip = (fifteenPercent.value / 100) * totalBill.value;
        return totalTip;
        };
twentyFivePercent.onclick = function() {
        totalTip = (twentyFivePercent.value / 100) * totalBill.value;
        return totalTip;
        };
fiftyPercent.onclick = function() {
        totalTip = (fiftyPercent.value / 100) * totalBill.value;
        return totalTip;
        };
customPercent.onclick = function() {
        totalTip = (customPercent.value / 100) * totalBill.value;
        return totalTip;
        };

//CALCULATING TIP PER PERSON TO OUTPUT TO CORRESPONDING HTML FIELD
let tipEach = document.getElementById("tip-each");
let tipPerGuest;
function tipPerPerson(totalTip) {
    tipPerGuest = totalTip / numPeople.value;
    tipEach.innerHTML = tipPerGuest;
};

//CALCULATING TOTAL PRICE PER PERSON TO OUTPUT TO CORRESPONDING HTML FIELD
let totalEach = document.getElementById("total-each");
let totalPerGuest;
function totalPerPerson() {
    totalPerGuest = (totalBill.value / numPeople.value) + tipPerGuest;
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
