// 'use strict';

let time = prompt("Ented date in the following format YYYY-MM-DD"),
    money = prompt("What is your monthly budget?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let key = prompt("What is your mandatory item of expenditure in the current month?"),
    value = prompt("How much it will cost?");

    appData.expenses[key] = value;

console.log(appData.expenses);
alert(appData.budget / 30);

