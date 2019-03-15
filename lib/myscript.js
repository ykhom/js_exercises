let money, time;

function start() {
    time = prompt("Ented date in the following format YYYY-MM-DD"),
    money = +prompt("What is your monthly budget?");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("What is your monthly budget?");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let key = prompt("What is your mandatory item of expenditure in the current month?"),
            value = prompt("How much it will cost?");

        if (typeof(key) === 'string' && (typeof(key) != null && typeof(value) != null
            && key != '' && value != '' && key.length < 50)) {
            console.log("done");
            appData.expenses[key] = value;
        } else {
            i = i - 1;
        }    
    }
}

chooseExpenses();



function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
}

detectDayBudget();

function detectLevel() {
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
}

let optionalExpense = "";
let optionalExpenses = {};

function chooseOptExpenses() {
    optionalExpense = prompt("What is your optional expenses?");
    newKey = Object.keys(optionalExpenses).length + 1;
    optionalExpenses.newKey = optionalExpense;
    
}

chooseOptExpenses();
chooseOptExpenses();
chooseOptExpenses();

console.log('optionalExpenses', optionalExpenses)
    

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("What is the amount of your savings?"),
            percent = +prompt("What % do you have in bank?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Your monthly income from your deposit is: " + appData.monthIncome);
    }
}

checkSavings();