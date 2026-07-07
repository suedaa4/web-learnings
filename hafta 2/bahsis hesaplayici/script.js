const totalBill = 250;
const tipPercentage = 0.15;
const numberOfPeople = 4;

function calculateBill(){
    const totalTip = totalBill * tipPercentage;
    const grandTotal = totalBill + totalTip;
    const perPersonShare = grandTotal / numberOfPeople;

 
console.log(`Total tip: ${totalTip} $`);
console.log(`Total Bill (with tip): ${grandTotal} $`);
console.log(`Each Person Pays: ${perPersonShare} $`);
}

calculateBill();