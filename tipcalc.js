

const totalBill = document.getElementById("total-bill").value;
const fivePercent = document.getElementById("5percent").value;
const tenPercent = document.getElementById("10percent").value;
const fifteenPercent = document.getElementById("15percent").value;
const twentyFivePercent = document.getElementById("25percent").value;
const fiftyPercent = document.getElementById("50percent").value;
const customPercent = document.getElementById("custom-percent").value;
const numPeople = document.getElementById("number-people").value;

//let test = parseInt(fivePercent) + parseInt(tenPercent);

//console.log(test);

let totalTip;
function calcTotalTip() {
    if (document.getElementById('5percent').clicked == true) {
        totalTip = (fivePercent / 100) * totalBill;
        return totalTip;
    } else if (document.getElementById('10percent').clicked == true) {
        totalTip = (tenPercent / 100) * totalBill;
        return totalTip;
    } else if (document.getElementById('15percent').clicked == true) {
        totalTip = (fifteenPercent / 100) * totalBill;
        return totalTip;
    } else if (document.getElementById('25percent').clicked == true) {
        totalTip = (twentyFivePercent / 100) * totalBill;
        return totalTip;
    } else if (document.getElementById('50percent').clicked == true) {
        totalTip = (fiftyPercent / 100) * totalBill;
        return totalTip;
    } else if (document.getElementById('custom-percent').clicked == true) {
        totalTip = (customPercent / 100) * totalBill;
        return totalTip;
    }
};



let tipPerGuest;
function tipPerPerson(totalTip) {
    tipPerGuest = totalTip / numPeople;
    return document.getElementById("tip-each").write(tipPerGuest);
    //return tipPerGuest;
};



let totalPerGuest;
function totalPerPerson() {
    totalPerGuest = (totalBill / numPeople) + tipPerGuest;
    return document.getElementById("total-each").write(totalPerGuest);
};

if (document.getElementById("submit").clicked == true) {
    calcTotalTip();
    tipPerPerson(totalTip);
    totalPerPerson();
};

