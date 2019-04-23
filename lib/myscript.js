let money, time;

function start() {
    time = prompt("Ented date in the following format YYYY-MM-DD"),
    money = +prompt("What is your monthly budget?");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("What is your monthly budget?");
    }
}
//start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
    },
    detectLevel: function() {
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
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("What is the amount of your savings?"),
                percent = +prompt("What % do you have in bank?");
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Your monthly income from your deposit is: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        optionalExpense = prompt("What is your optional expenses?");
        newKey = Object.keys(optionalExpenses).length + 1;
        optionalExpenses.newKey = optionalExpense;
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход?(перечислите через запятую)');
        valid = false;
        while (typeof(items) != "string" || items === "") {
            items = prompt('Что принесет дополнительный доход?(перечислите через запятую)');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();

        
    }
};



//appData.chooseExpenses();
//appData.detectDayBudget();


let optionalExpense = "";
let optionalExpenses = {};



//appData.chooseOptExpenses();
//appData.chooseOptExpenses();
//appData.chooseOptExpenses();

console.log('optionalExpenses', optionalExpenses)
    
appData.chooseIncome();
console.log('Income sources:')
let i = 0;
appData.income.forEach(function(element) {
    i = i + 1;
    console.log(i, ': ', element);
});

console.log('Our app includes following data:')
for (var property in appData) {
    if (typeof(appData[property]) != "undefined" && typeof(appData[property]) != "function") {
        console.log(appData[property]);
    }
    
}


//appData.checkSavings();

function createCounter() {
    let counter = 0
    console.log('counter:',counter)
    const myFunction = function() {
        counter = counter + 1
        return counter
    }
    return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)