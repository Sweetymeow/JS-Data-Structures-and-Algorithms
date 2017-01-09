// Sample for Arrow Functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
/* (param1, param2, …, paramN) => { statements }
 * (param1, param2, …, paramN) => expression
 * (singleParam) => { statements }
 * singleParam => { statements }
 * () => { statements }
 * () => expression  // equivalent to: () => { return expression; }
 *
*/
let calculateMonthlyPayment = (principal, years, rate) => { // 本金，年限，利率
    let monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return {principal, years, rate, monthlyPayment, monthlyRate};
};
// "var" variables which are function-scoped, 
// "let" variables are block-scoped: they only exist in the block they are defined in.

let calculateAmortization = (principal, years, rate) =>{ // n. 分期偿还
    let {monthlyRate, monthlyPayment} = calculateMonthlyPayment(principal, years, rate);
    let balance = principal;
    let amortization = [];
    
    for( let y = 0; y < years ; y++ ){
        let interestY = 0; //Interest payment for year y
        let principalY = 0; //Principal payment for year y
        
        for( let m = 0; m < 12; m++){
            let interestM = balance * monthlyRate; //Interest payment for month m
            let principalM = monthlyPayment - interestM; //Principal payment for month m
            interestY = interestY + interestM;
            principalY = principalY + principalM;
            balance = balance - principalM;
        }
        amortization.push({principalY, interestY, balance});
    }
    return {monthlyRate, monthlyPayment, amortization};
}

document.getElementById('calcBtn').addEventListener('click', () => {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    // let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate);    
    let {monthlyPayment, monthlyRate, amortization} = calculateAmortization(principal, years, rate);  
    
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
    amortization.forEach(month => console.log(month));
});
