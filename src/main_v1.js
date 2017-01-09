var calculateMonthlyPayment = function (principal, years, rate) {
    let monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return {principal, years, rate, monthlyPayment, monthlyRate};
};
// "var" variables which are function-scoped, 
// "let" variables are block-scoped: they only exist in the block they are defined in.

document.getElementById('calcBtn').addEventListener('click', function () {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
//    var monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate);
//  var _calculateMonthlyPaym = calculateMonthlyPayment(principal, years, rate),
//        monthlyPayment = _calculateMonthlyPaym.monthlyPayment,
//        monthlyRate = _calculateMonthlyPaym.monthlyRate;    
    
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
});
