const cart= [
    {productName:"Wireless Mouse", price:250, quantity:2},
    {productName:"monitor", price:500, quantity:1},
    {productName:"keyboard", price:300, quantity:3}]

let totalCartPrice = 0;

function calculateTotal(){
    for(let i=0; i < cart.length; i++){
        totalCartPrice += cart[i].price * cart[i].quantity;
    }
    console.log(`Total shopping cart price: ${totalCartPrice} TL.`);

}

calculateTotal();