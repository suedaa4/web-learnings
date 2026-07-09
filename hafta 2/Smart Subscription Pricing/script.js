const user = {
    name: "Sueda", 
    plan: "Premium",
    isStudent: true
};

function calculatePrice(userObj) {
    let finalPrice = 0;

    if (userObj.plan == "Premium") {
        finalPrice = 100;
    } else if (userObj.plan == "Standard") {
        finalPrice = 60;
    }

    if (userObj.isStudent == true) {
        finalPrice = finalPrice - 20;
    }
    
    return finalPrice;
} 

let totalBill = calculatePrice(user);

console.log(`${user.name}, your total subscription bill is: ${totalBill} TL.`);


