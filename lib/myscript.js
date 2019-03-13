 'use strict';

let time = prompt("Ented date in the following format YYYY-MM-DD"),
    money = +prompt("What is your monthly budget?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



    

// for (let i = 0; i < 2; i++) {
//     let key = prompt("What is your mandatory item of expenditure in the current month?"),
//         value = prompt("How much it will cost?");
//     if (typeof(key) === 'string' && (typeof(key) != null && typeof(value) != null
//         && key != '' && value != '' && key.length < 50)) {
//         console.log("done");
//         appData.expenses[key] = value;
//     } else {
     
//     }    
// }
let i = 0;
while (i < 2) {
    let key = prompt("What is your mandatory item of expenditure in the current month?"),
        value = prompt("How much it will cost?");
    i++; 
    if (typeof(key) === 'string' && (typeof(key) != null && typeof(value) != null
        && key != '' && value != '' && key.length < 50)) {
        console.log("done");
        appData.expenses[key] = value;
    } else {

    }
}

appData.moneyPerDay = appData.budget / 30;
console.log("Daily budget is " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log("Minimum level of wealth");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Medium level of wealth");
} else if (appData.moneyPerDay >= 2000) {
    console.log("high level of wealth");
} else {
    console.log("Error: wrong data type");
}


