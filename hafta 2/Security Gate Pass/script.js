const age = 20;
const vipVisitor = true;
const standard = false;

function checkGatePass(){
    if(vipVisitor == true){
        console.log("Welcome VIP Guest! Access Granted.");
    } 
    else if(age >= 18 && standard == true) {
        console.log("Ticket verified. Access Granted.")
    } 
    else {
        console.log("Access Denied! You cannot enter.")
    }
}

checkGatePass();