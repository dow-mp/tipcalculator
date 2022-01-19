//DECLARE VARIABLES FOR ALL INPUT FIELDS
const totalBill = document.getElementById("total-bill");
const fivePercent = document.getElementById("5percent");
const tenPercent = document.getElementById("10percent");
const fifteenPercent = document.getElementById("15percent");
const twentyFivePercent = document.getElementById("25percent");
const fiftyPercent = document.getElementById("50percent");
const customPercent = document.getElementById("custom-percent");
const numPeople = document.getElementById("number-people");

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
